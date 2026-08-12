// ------ clocks ------
function updateClocks() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const timeStr = `${h}:${m}`;

    const trayTime = document.getElementById('tray-time');
    const trayDate = document.getElementById('tray-date');
    if (trayTime) trayTime.textContent = timeStr;
    if (trayDate) {
        const d = String(now.getDate()).padStart(2, '0');
        const mo = String(now.getMonth() + 1).padStart(2, '0');
        trayDate.textContent = `${d}/${mo}/${now.getFullYear()}`;
    }

    const statusTime = document.getElementById('status-time');
    if (statusTime) statusTime.textContent = timeStr;
}
updateClocks();
setInterval(updateClocks, 1000);

// ------ start menu ------
function populateStartMenu() {
    const list = document.getElementById('start-app-list');
    if (!list) return;

    list.innerHTML = START_PROGRAMS.map(app => `
        <div class="start-app-row" data-app="${app.id}">
            <div class="sar-icon">${ICONS[app.id] || ''}</div>
            <span>${app.name}</span>
        </div>
    `).join('');

    // app launch from left list
    list.querySelectorAll('.start-app-row').forEach(row => {
        row.addEventListener('click', () => {
            const appId = row.dataset.app;
            if (appId) {
                openApp(appId);
                startMenu?.classList.remove('open');
            }
        });
    });

    // app launch from right panel system links
    document.querySelectorAll('.start-sys-item[data-app]').forEach(item => {
        item.addEventListener('click', () => {
            const appId = item.dataset.app;
            if (appId) {
                openApp(appId);
                startMenu?.classList.remove('open');
            }
        });
    });

    // power button
    document.getElementById('start-power-btn')?.addEventListener('click', () => {
        startMenu?.classList.remove('open');
        document.querySelectorAll('.app-window').forEach(w => closeWindow(w));
    });

    // search filtering
    const searchInput = document.getElementById('start-search-input');
    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        list.querySelectorAll('.start-app-row').forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query) ? 'flex' : 'none';
        });
    });
}
populateStartMenu();

const startMenu = document.getElementById('start-menu');
const startBtn = document.getElementById('start-btn');

startBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu?.classList.toggle('open');
    hideContextMenu();
});

// close start menu & context menu on outside click
document.addEventListener('click', (e) => {
    if (startMenu?.classList.contains('open') && !startMenu.contains(e.target) && e.target !== startBtn) {
        startMenu.classList.remove('open');
    }
    hideContextMenu();
});

// global escape key listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('mobile-app-screen')?.classList.remove('open');
        startMenu?.classList.remove('open');
        hideContextMenu();
    }
});

// ------ context menu ------
const contextMenu = document.getElementById('context-menu');

document.getElementById('desktop')?.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (e.target.closest('.app-window')) return;
    startMenu?.classList.remove('open');

    const remPx = getRemInPx();
    contextMenu.classList.remove('hidden');
    let x = e.clientX, y = e.clientY;
    contextMenu.style.left = (x / remPx) + 'rem';
    contextMenu.style.top = (y / remPx) + 'rem';

    requestAnimationFrame(() => {
        const r = contextMenu.getBoundingClientRect();
        if (r.right > window.innerWidth) x = window.innerWidth - r.width - 8;
        if (r.bottom > window.innerHeight) y = window.innerHeight - r.height - 8;
        contextMenu.style.left = (x / remPx) + 'rem';
        contextMenu.style.top = (y / remPx) + 'rem';
    });
});

function hideContextMenu() {
    contextMenu?.classList.add('hidden');
}

contextMenu?.addEventListener('click', (e) => {
    const item = e.target.closest('.ctx-item');
    if (!item) return;
    hideContextMenu();
});

// ------ desktop icons grid & drag ------
const GRID_W_REM = 5.5;
const GRID_H_REM = 6.0;
const OFFSET_X_REM = 0.75;
const OFFSET_Y_REM = 0.75;

function initDesktopIconsGrid() {
    const icons = document.querySelectorAll('.desktop-icon');
    const desktopEl = document.getElementById('desktop');
    const remPx = getRemInPx();
    const desktopH = desktopEl?.clientHeight || window.innerHeight;
    const gridHPx = GRID_H_REM * remPx;
    const offsetYPx = OFFSET_Y_REM * remPx;
    const taskbarHPx = 3 * remPx;
    const maxRowsPerCol = Math.max(1, Math.floor((desktopH - offsetYPx - taskbarHPx) / gridHPx));

    const occupiedSlots = new Set();

    icons.forEach((icon, index) => {
        let col, row;
        if (icon.style.left && icon.dataset.gridInit === 'true') {
            const curL = parseFloat(icon.style.left);
            const curT = parseFloat(icon.style.top);
            col = Math.round((curL - OFFSET_X_REM) / GRID_W_REM);
            row = Math.round((curT - OFFSET_Y_REM) / GRID_H_REM);
        } else {
            col = Math.floor(index / maxRowsPerCol);
            row = index % maxRowsPerCol;
        }

        // if slot is occupied by another icon, find next free slot
        while (occupiedSlots.has(`${col},${row}`)) {
            row++;
            if (row >= maxRowsPerCol) {
                row = 0;
                col++;
            }
        }

        occupiedSlots.add(`${col},${row}`);
        icon.style.position = 'absolute';
        icon.style.left = (OFFSET_X_REM + col * GRID_W_REM) + 'rem';
        icon.style.top = (OFFSET_Y_REM + row * GRID_H_REM) + 'rem';
        icon.dataset.gridInit = 'true';
    });
}

function setupDesktopIconDrag() {
    initDesktopIconsGrid();

    window.addEventListener('resize', () => {
        initDesktopIconsGrid();
    });

    document.querySelectorAll('.desktop-icon').forEach(icon => {
        let isMouseDown = false;
        let hasDragged = false;
        let startX = 0, startY = 0;
        let origLeftPx = 0, origTopPx = 0;
        let origCol = 0, origRow = 0;

        icon.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            e.stopPropagation();

            const remPx = getRemInPx();

            isMouseDown = true;
            hasDragged = false;
            startX = e.clientX;
            startY = e.clientY;

            const currentLeftRem = parseFloat(icon.style.left) || (icon.offsetLeft / remPx);
            const currentTopRem = parseFloat(icon.style.top) || (icon.offsetTop / remPx);

            origCol = Math.max(0, Math.round((currentLeftRem - OFFSET_X_REM) / GRID_W_REM));
            origRow = Math.max(0, Math.round((currentTopRem - OFFSET_Y_REM) / GRID_H_REM));

            origLeftPx = currentLeftRem * remPx;
            origTopPx = currentTopRem * remPx;

            icon.style.transition = 'none';
            icon.style.zIndex = 300;

            document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
            icon.classList.add('selected');

            const onMouseMove = (moveEv) => {
                if (!isMouseDown) return;
                const dx = moveEv.clientX - startX;
                const dy = moveEv.clientY - startY;

                if (Math.hypot(dx, dy) > 5) {
                    hasDragged = true;
                    icon.style.left = ((origLeftPx + dx) / remPx) + 'rem';
                    icon.style.top = ((origTopPx + dy) / remPx) + 'rem';
                }
            };

            const onMouseUp = () => {
                if (!isMouseDown) return;
                isMouseDown = false;

                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                if (hasDragged) {
                    // snap to grid
                    const desktopEl = document.getElementById('desktop');
                    const desktopRect = desktopEl ? desktopEl.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };

                    const remPx = getRemInPx();
                    const gridWPx = GRID_W_REM * remPx;
                    const gridHPx = GRID_H_REM * remPx;
                    const offsetXPx = OFFSET_X_REM * remPx;
                    const offsetYPx = OFFSET_Y_REM * remPx;
                    const taskbarHPx = 3 * remPx;

                    const curLeftPx = parseFloat(icon.style.left) * remPx;
                    const curTopPx = parseFloat(icon.style.top) * remPx;

                    let targetCol = Math.max(0, Math.round((curLeftPx - offsetXPx) / gridWPx));
                    let targetRow = Math.max(0, Math.round((curTopPx - offsetYPx) / gridHPx));

                    const maxCols = Math.max(1, Math.floor((desktopRect.width - offsetXPx) / gridWPx));
                    const maxRows = Math.max(1, Math.floor((desktopRect.height - offsetYPx - taskbarHPx) / gridHPx));

                    targetCol = Math.min(targetCol, maxCols - 1);
                    targetRow = Math.min(targetRow, maxRows - 1);

                    // check if another icon is occupying targetcol, targetrow
                    const icons = document.querySelectorAll('.desktop-icon');
                    let occupyingIcon = null;
                    icons.forEach(other => {
                        if (other === icon) return;
                        const otherLeft = parseFloat(other.style.left);
                        const otherTop = parseFloat(other.style.top);
                        if (!isNaN(otherLeft) && !isNaN(otherTop)) {
                            const oCol = Math.round((otherLeft - OFFSET_X_REM) / GRID_W_REM);
                            const oRow = Math.round((otherTop - OFFSET_Y_REM) / GRID_H_REM);
                            if (oCol === targetCol && oRow === targetRow) {
                                occupyingIcon = other;
                            }
                        }
                    });

                    if (occupyingIcon) {
                        // swap: move occupyingicon to origcol, origrow
                        const swapLeftRem = OFFSET_X_REM + origCol * GRID_W_REM;
                        const swapTopRem = OFFSET_Y_REM + origRow * GRID_H_REM;
                        occupyingIcon.style.transition = 'left 160ms cubic-bezier(0, 0, 0.2, 1), top 160ms cubic-bezier(0, 0, 0.2, 1)';
                        occupyingIcon.style.left = swapLeftRem + 'rem';
                        occupyingIcon.style.top = swapTopRem + 'rem';
                    }

                    const targetLeftRem = OFFSET_X_REM + targetCol * GRID_W_REM;
                    const targetTopRem = OFFSET_Y_REM + targetRow * GRID_H_REM;

                    icon.style.transition = 'left 160ms cubic-bezier(0, 0, 0.2, 1), top 160ms cubic-bezier(0, 0, 0.2, 1)';
                    icon.style.left = targetLeftRem + 'rem';
                    icon.style.top = targetTopRem + 'rem';
                    icon.style.zIndex = '';
                } else {
                    // single click opens app!
                    const appId = icon.dataset.app;
                    const targetFile = icon.dataset.file;
                    if (appId) openApp(appId, targetFile);
                    icon.style.zIndex = '';
                }
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
}
setupDesktopIconDrag();

// ------ selection box ------
const desktopEl = document.getElementById('desktop');
const selectionBox = document.getElementById('selection-box');
let isSelecting = false;
let startClientX = 0, startClientY = 0;
let desktopRect = null;

if (desktopEl && selectionBox) {
    desktopEl.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        if (e.target.closest('.app-window') || e.target.closest('#start-menu') || e.target.closest('#context-menu') || e.target.closest('.desktop-icon')) return;

        isSelecting = true;
        desktopRect = desktopEl.getBoundingClientRect();
        startClientX = e.clientX;
        startClientY = e.clientY;

        const remPx = getRemInPx();
        const startLocalX = startClientX - desktopRect.left;
        const startLocalY = startClientY - desktopRect.top;

        selectionBox.style.left = (startLocalX / remPx) + 'rem';
        selectionBox.style.top = (startLocalY / remPx) + 'rem';
        selectionBox.style.width = '0rem';
        selectionBox.style.height = '0rem';

        document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
    });

    document.addEventListener('mousemove', (e) => {
        if (!isSelecting || !desktopRect) return;

        const currentClientX = e.clientX;
        const currentClientY = e.clientY;

        const dx = currentClientX - startClientX;
        const dy = currentClientY - startClientY;

        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
            selectionBox.classList.remove('hidden');
        }

        const leftClient = Math.min(startClientX, currentClientX);
        const topClient = Math.min(startClientY, currentClientY);
        const rightClient = Math.max(startClientX, currentClientX);
        const bottomClient = Math.max(startClientY, currentClientY);

        const remPx = getRemInPx();
        const localLeft = leftClient - desktopRect.left;
        const localTop = topClient - desktopRect.top;
        const width = rightClient - leftClient;
        const height = bottomClient - topClient;

        selectionBox.style.left = (localLeft / remPx) + 'rem';
        selectionBox.style.top = (localTop / remPx) + 'rem';
        selectionBox.style.width = (width / remPx) + 'rem';
        selectionBox.style.height = (height / remPx) + 'rem';

        if (!selectionBox.classList.contains('hidden')) {
            document.querySelectorAll('.desktop-icon').forEach(icon => {
                const iconRect = icon.getBoundingClientRect();
                const intersects = !(
                    iconRect.right < leftClient ||
                    iconRect.left > rightClient ||
                    iconRect.bottom < topClient ||
                    iconRect.top > bottomClient
                );

                if (intersects) {
                    icon.classList.add('selected');
                } else if (!e.ctrlKey) {
                    icon.classList.remove('selected');
                }
            });
        }
    });

    document.addEventListener('mouseup', () => {
        if (isSelecting) {
            isSelecting = false;
            selectionBox?.classList.add('hidden');
        }
    });
}

// ------ taskbar app buttons ------
document.querySelectorAll('#taskbar-center .taskbar-btn[data-app]').forEach(btn => {
    btn.addEventListener('click', () => {
        const appId = btn.dataset.app;
        if (appId) openApp(appId);
    });
});

// ------ mobile ui ------
function populateMobileUI() {
    // app grid (first 16 apps)
    const grid = document.getElementById('app-grid');
    if (grid) {
        grid.innerHTML = MOBILE_APPS.slice(0, 16).map(app => `
            <div class="mobile-app" data-app="${app.id}">
                <div class="app-icon-wrap">
                    ${app.icon}
                </div>
                <span class="app-name">${app.name}</span>
            </div>
        `).join('');
    }

    // dock
    const dock = document.getElementById('dock');
    if (dock) {
        dock.innerHTML = DOCK_APPS.map(id => {
            const app = MOBILE_APPS.find(a => a.id === id);
            if (!app) return '';
            return `<div class="dock-app" data-app="${app.id}" title="${app.name}">${app.icon}</div>`;
        }).join('');
    }

    // attach click handlers to open apps in mobile screen view
    document.querySelectorAll('.mobile-app, .dock-app').forEach(app => {
        app.addEventListener('click', () => {
            const appId = app.dataset.app;
            if (appId) {
                openMobileApp(appId);
            }
        });
    });
}
populateMobileUI();

function openMobileApp(appId, targetFile) {
    const screen = document.getElementById('mobile-app-screen');
    const titleEl = document.getElementById('mobile-app-title');
    const bodyEl = document.getElementById('mobile-app-body');
    const backBtn = document.getElementById('mobile-back-btn');

    if (!screen || !bodyEl) return;

    const config = APP_CONFIGS[appId];
    if (!config) return;

    if (titleEl) {
        titleEl.textContent = targetFile || config.title;
    }

    bodyEl.innerHTML = config.content();

    bodyEl.querySelectorAll('.md-file-open').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const mdFile = item.dataset.file;
            openMobileApp('markdown-viewer', mdFile);
        });
    });

    if (appId === 'markdown-viewer') {
        initMarkdownViewerListeners(screen, targetFile || 'README.md', true);
    }

    screen.classList.add('open');
    document.getElementById('mobile-mode')?.classList.add('app-open');

    if (backBtn) {
        backBtn.onclick = closeMobileScreen;
    }
}

// android navigation buttons
const closeMobileScreen = () => {
    document.getElementById('mobile-app-screen')?.classList.remove('open');
    document.getElementById('mobile-mode')?.classList.remove('app-open');
};

document.getElementById('nav-back-btn')?.addEventListener('click', closeMobileScreen);
document.getElementById('nav-home-btn')?.addEventListener('click', closeMobileScreen);
document.getElementById('nav-recents-btn')?.addEventListener('click', closeMobileScreen);

document.getElementById('mobile-mode')?.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ------ welcome screen ------
async function autoOpenWelcomeScreen() {
    const isMobile = window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        const modal = document.getElementById('mobile-welcome-modal');
        const bodyEl = document.getElementById('mwm-body');
        const okBtn = document.getElementById('mwm-ok-btn');
        const backdrop = modal?.querySelector('.mwm-backdrop');

        if (modal && bodyEl) {
            const mdText = await fetchMarkdownFile('README.md');
            bodyEl.innerHTML = window.marked ? marked.parse(mdText) : mdText;
            modal.classList.remove('hidden');

            const closeModal = () => modal.classList.add('hidden');
            if (okBtn) okBtn.onclick = closeModal;
            if (backdrop) backdrop.onclick = closeModal;
        }
    } else {
        openApp('markdown-viewer', 'README.md');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoOpenWelcomeScreen);
} else {
    autoOpenWelcomeScreen();
}
