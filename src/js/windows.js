// ============================================================
//  ravsil os — window manager
//  opening, closing, dragging, resizing, maximizing windows
// ============================================================

let topZIndex = 10;

function getRemInPx() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
}

function bringToFront(win) {
    win.style.zIndex = ++topZIndex;
}

function closeWindow(win) {
    win.classList.add('closing');
    setTimeout(() => {
        win.remove();
        updateTaskbarIndicators();
    }, 150);
}

function toggleMaximize(win) {
    const maxBtn = win.querySelector('.max-btn');
    if (win.classList.contains('maximized')) {
        win.classList.remove('maximized');
        maxBtn.innerHTML = ICONS['maximize'];
        maxBtn.title = 'Maximizar';
    } else {
        win.classList.add('maximized');
        maxBtn.innerHTML = ICONS['restore'];
        maxBtn.title = 'Restaurar';
    }
}

function openApp(appId, targetFile) {
    // if window exists, bring to front or restore
    const existing = document.querySelector(`.app-window[data-app="${appId}"]`);
    if (existing) {
        bringToFront(existing);
        updateTaskbarIndicators();
        if (appId === 'markdown-viewer' && targetFile) {
            if (existing.updateMarkdownFile) {
                existing.updateMarkdownFile(targetFile);
            }
        }
        return;
    }

    const config = APP_CONFIGS[appId];
    if (!config) return;

    let winWidth = config.width;
    let winHeight = config.height;
    if (appId === 'markdown-viewer' && (targetFile === 'README.md' || !targetFile)) {
        winHeight = 20.5;
    }

    const desktop = document.getElementById('desktop');
    const win = document.createElement('div');
    win.className = 'app-window';
    win.dataset.app = appId;
    win.style.width = winWidth + 'rem';
    win.style.height = winHeight + 'rem';

    // center with small random offset
    const remPx = getRemInPx();
    const wPx = winWidth * remPx;
    const hPx = winHeight * remPx;
    const offsetX = (Math.random() - 0.5) * 3.75 * remPx;
    const offsetY = (Math.random() - 0.5) * 2.5 * remPx;
    const desktopRect = desktop.getBoundingClientRect();
    win.style.left = (Math.max(0, (desktopRect.width - wPx) / 2 + offsetX) / remPx) + 'rem';
    win.style.top = (Math.max(0, (desktopRect.height - hPx) / 2 + offsetY) / remPx) + 'rem';
    win.style.zIndex = ++topZIndex;

    const iconSvg = ICONS[appId] || '';

    win.innerHTML = `
        <div class="window-header">
            <div class="window-icon">${iconSvg}</div>
            <span class="window-title">${config.title}</span>
            <div class="window-controls">
                <button class="win-ctrl max-btn" title="Maximizar">${ICONS['maximize']}</button>
                <button class="win-ctrl close-btn" title="Fechar">${ICONS['close']}</button>
            </div>
        </div>
        <div class="window-body">${config.content()}</div>
        <div class="win-resize-handle handle-n" data-handle="n"></div>
        <div class="win-resize-handle handle-s" data-handle="s"></div>
        <div class="win-resize-handle handle-e" data-handle="e"></div>
        <div class="win-resize-handle handle-w" data-handle="w"></div>
        <div class="win-resize-handle handle-ne" data-handle="ne"></div>
        <div class="win-resize-handle handle-nw" data-handle="nw"></div>
        <div class="win-resize-handle handle-se" data-handle="se"></div>
        <div class="win-resize-handle handle-sw" data-handle="sw"></div>
    `;

    desktop.appendChild(win);

    // bring to front on click
    win.addEventListener('mousedown', () => bringToFront(win));

    // setup drag & resize
    setupWindowDrag(win);
    setupWindowResize(win);

    // window controls
    win.querySelector('.close-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        closeWindow(win);
    });
    win.querySelector('.max-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMaximize(win);
    });
    // double-click title bar to maximize
    win.querySelector('.window-header').addEventListener('dblclick', (e) => {
        if (e.target.closest('.window-controls')) return;
        toggleMaximize(win);
    });

    // allow file items in explorer to open markdown files
    win.querySelectorAll('.md-file-open').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const mdFile = item.dataset.file;
            openApp('markdown-viewer', mdFile);
        });
    });

    if (appId === 'markdown-viewer') {
        initMarkdownViewerListeners(win, targetFile || 'README.md');
    }

    updateTaskbarIndicators();
}

// ------ window drag ------
function setupWindowDrag(win) {
    const header = win.querySelector('.window-header');
    let isDragging = false;
    let startX, startY, origLeftPx, origTopPx;

    header.addEventListener('mousedown', (e) => {
        if (e.target.closest('.window-controls')) return;
        if (e.button !== 0) return;
        const remPx = getRemInPx();
        isDragging = true;
        bringToFront(win);

        if (win.classList.contains('maximized')) {
            // un-maximize on drag
            win.classList.remove('maximized');
            const maxBtn = win.querySelector('.max-btn');
            if (maxBtn) {
                maxBtn.innerHTML = ICONS['maximize'];
                maxBtn.title = 'Maximizar';
            }
            // position so mouse is centered on title bar
            const w = win.offsetWidth;
            win.style.left = ((e.clientX - w / 2) / remPx) + 'rem';
            win.style.top = '0rem';
        }

        startX = e.clientX;
        startY = e.clientY;
        const currentLeftRem = parseFloat(win.style.left) || (win.offsetLeft / remPx);
        const currentTopRem = parseFloat(win.style.top) || (win.offsetTop / remPx);
        origLeftPx = currentLeftRem * remPx;
        origTopPx = currentTopRem * remPx;

        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const remPx = getRemInPx();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        win.style.left = ((origLeftPx + dx) / remPx) + 'rem';
        win.style.top = ((origTopPx + dy) / remPx) + 'rem';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// ------ window resize ------
function setupWindowResize(win) {
    const handles = win.querySelectorAll('.win-resize-handle');
    const MIN_WIDTH_REM = 23.75;  // 380px / 16
    const MIN_HEIGHT_REM = 16.25; // 260px / 16

    handles.forEach(handle => {
        handle.addEventListener('mousedown', (e) => {
            if (e.button !== 0 || win.classList.contains('maximized')) return;
            e.stopPropagation();
            e.preventDefault();

            bringToFront(win);

            const dir = handle.dataset.handle;
            const remPx = getRemInPx();

            const startX = e.clientX;
            const startY = e.clientY;

            const origWidthRem = parseFloat(win.style.width) || (win.offsetWidth / remPx);
            const origHeightRem = parseFloat(win.style.height) || (win.offsetHeight / remPx);
            const origLeftRem = parseFloat(win.style.left) || (win.offsetLeft / remPx);
            const origTopRem = parseFloat(win.style.top) || (win.offsetTop / remPx);

            const onMouseMove = (moveEv) => {
                const dxRem = (moveEv.clientX - startX) / remPx;
                const dyRem = (moveEv.clientY - startY) / remPx;

                let newWidth = origWidthRem;
                let newHeight = origHeightRem;
                let newLeft = origLeftRem;
                let newTop = origTopRem;

                if (dir.includes('e')) {
                    newWidth = Math.max(MIN_WIDTH_REM, origWidthRem + dxRem);
                }
                if (dir.includes('s')) {
                    newHeight = Math.max(MIN_HEIGHT_REM, origHeightRem + dyRem);
                }
                if (dir.includes('w')) {
                    const possibleW = origWidthRem - dxRem;
                    if (possibleW >= MIN_WIDTH_REM) {
                        newWidth = possibleW;
                        newLeft = origLeftRem + dxRem;
                    } else {
                        newWidth = MIN_WIDTH_REM;
                        newLeft = origLeftRem + (origWidthRem - MIN_WIDTH_REM);
                    }
                }
                if (dir.includes('n')) {
                    const possibleH = origHeightRem - dyRem;
                    if (possibleH >= MIN_HEIGHT_REM) {
                        newHeight = possibleH;
                        newTop = origTopRem + dyRem;
                    } else {
                        newHeight = MIN_HEIGHT_REM;
                        newTop = origTopRem + (origHeightRem - MIN_HEIGHT_REM);
                    }
                }

                win.style.width = newWidth + 'rem';
                win.style.height = newHeight + 'rem';
                win.style.left = newLeft + 'rem';
                win.style.top = newTop + 'rem';
            };

            const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
}

// ------ taskbar indicators ------
function updateTaskbarIndicators() {
    // update the "active" indicator on taskbar pinned apps
    const pinnedBtns = document.querySelectorAll('#taskbar-center .taskbar-btn[data-app]');
    pinnedBtns.forEach(btn => {
        const appId = btn.dataset.app;
        const win = document.querySelector(`.app-window[data-app="${appId}"]`);
        if (win && !win.classList.contains('closing')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // dynamic taskbar entries for non-pinned apps
    const activeContainer = document.getElementById('taskbar-active');
    if (!activeContainer) return;

    const pinnedIds = new Set();
    pinnedBtns.forEach(b => { if (b.dataset.app) pinnedIds.add(b.dataset.app); });

    const openWindows = document.querySelectorAll('.app-window:not(.closing)');
    const dynamicIds = new Set();
    openWindows.forEach(w => {
        const id = w.dataset.app;
        if (!pinnedIds.has(id)) dynamicIds.add(id);
    });

    // remove stale dynamic buttons
    activeContainer.querySelectorAll('.taskbar-btn').forEach(btn => {
        if (!dynamicIds.has(btn.dataset.app)) btn.remove();
    });

    // add new dynamic buttons
    dynamicIds.forEach(appId => {
        if (activeContainer.querySelector(`[data-app="${appId}"]`)) return;
        const config = APP_CONFIGS[appId];
        if (!config) return;
        const btn = document.createElement('button');
        btn.className = 'taskbar-btn active';
        btn.dataset.app = appId;
        btn.title = config.title;
        btn.innerHTML = ICONS[appId] ? `<div style="width:20px;height:20px;">${ICONS[appId]}</div>` : `<span style="font-size:11px;">${config.title.charAt(0)}</span>`;
        btn.addEventListener('click', () => {
            const w = document.querySelector(`.app-window[data-app="${appId}"]`);
            if (w) bringToFront(w);
        });
        activeContainer.appendChild(btn);
    });
}

// ------ markdown utilities ------
function isMobileModeActive() {
    const mobileModeEl = document.getElementById('mobile-mode');
    if (mobileModeEl) {
        const style = window.getComputedStyle(mobileModeEl);
        if (style.display !== 'none') return true;
    }
    return window.innerWidth <= 768;
}

function processDevicePlaceholder(text) {
    if (!text) return '';
    const isMobile = isMobileModeActive();
    const replacement = isMobile ? 'computador' : 'celular';
    return text.replace(/\[\[DEVICE\]?\]?/gi, replacement);
}

async function fetchMarkdownFile(fileName) {
    let rawText = '';
    try {
        const res = await fetch(`markdown/${fileName}`);
        if (res.ok) {
            rawText = await res.text();
        }
    } catch (e) { }

    return processDevicePlaceholder(rawText);
}

function initMarkdownViewerListeners(win, initialFile = 'README.md') {
    const renderedPane = win.querySelector('#md-rendered-pane');
    let currentFile = initialFile;

    async function updateContent() {
        const winTitle = win.querySelector('.window-title');
        if (winTitle) winTitle.textContent = currentFile;

        const mdText = await fetchMarkdownFile(currentFile);
        if (renderedPane) {
            renderedPane.innerHTML = window.marked ? marked.parse(mdText) : mdText;
        }
    }

    win.updateMarkdownFile = (fileName) => {
        currentFile = fileName;
        updateContent();
    };

    updateContent();
}
