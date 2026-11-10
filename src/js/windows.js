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

function bindExplorerFileClicks(container, isMobile = false) {
    container.querySelectorAll('.md-file-open').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const mdFile = item.dataset.file;
            if (isMobile) {
                openMobileApp('markdown-viewer', mdFile, true);
            } else {
                openApp('markdown-viewer', mdFile);
            }
        });
    });

    container.querySelectorAll('.pdf-file-open').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const pdfFile = item.dataset.file || 'curriculo.pdf';
            if (isMobile) {
                openMobileApp('pdf-viewer', pdfFile, true);
            } else {
                openApp('pdf-viewer', pdfFile);
            }
        });
    });
}

function initProjectsExplorer(container, isMobile = false, initialFolder = 'root') {
    const grid = container.querySelector('#projects-file-grid') || container.querySelector('.file-grid');
    const breadcrumbText = container.querySelector('.exp-breadcrumb-text');
    const backBtn = container.querySelector('.exp-back-btn');
    const fwdBtn = container.querySelector('.exp-fwd-btn');

    let history = [initialFolder];
    let historyIndex = 0;

    function renderFolder(folderKey) {
        const folderData = PROJECTS_DATA[folderKey] || PROJECTS_DATA.root;
        if (grid) {
            grid.innerHTML = renderFileGridItems(folderData.items);
        }

        if (breadcrumbText) {
            if (folderKey === 'root') {
                breadcrumbText.innerHTML = 'Projetos';
            } else {
                const subName = folderData.breadcrumb.split('›')[1]?.trim() || folderKey;
                breadcrumbText.innerHTML = `<span class="breadcrumb-link" data-target="root">Projetos</span> &rsaquo; <span>${subName}</span>`;
                breadcrumbText.querySelector('.breadcrumb-link')?.addEventListener('click', () => {
                    navigateTo('root');
                });
            }
        }

        if (backBtn) backBtn.disabled = historyIndex <= 0;
        if (fwdBtn) fwdBtn.disabled = historyIndex >= history.length - 1;

        if (grid) {
            grid.querySelectorAll('.folder-item-open').forEach(folderEl => {
                folderEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const sub = folderEl.dataset.subfolder;
                    if (sub && PROJECTS_DATA[sub]) {
                        navigateTo(sub);
                    }
                });
            });
            bindExplorerFileClicks(grid, isMobile);
        }
    }

    function navigateTo(folderKey) {
        if (history[historyIndex] === folderKey) return;
        history = history.slice(0, historyIndex + 1);
        history.push(folderKey);
        historyIndex = history.length - 1;
        renderFolder(folderKey);
    }

    backBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (historyIndex > 0) {
            historyIndex--;
            renderFolder(history[historyIndex]);
        }
    });

    fwdBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (historyIndex < history.length - 1) {
            historyIndex++;
            renderFolder(history[historyIndex]);
        }
    });

    container.getCurrentFolder = () => history[historyIndex];
    container.navigateBackInExplorer = () => {
        if (historyIndex > 0) {
            historyIndex--;
            renderFolder(history[historyIndex]);
            return true;
        }
        return false;
    };

    renderFolder(initialFolder);
}

function launchProjectInBrowser(mdFile, isMobile = false) {
    const normalized = mdFile.endsWith('.md') ? mdFile : `${mdFile}.md`;
    const proj = EXECUTABLE_PROJECTS[normalized];
    if (!proj) return;
    const targetApp = proj.openIn || 'browser';
    if (isMobile || isMobileModeActive()) {
        openMobileApp(targetApp, normalized, true);
    } else {
        openApp(targetApp, normalized);
    }
}

function initTerminalListeners(win, initialFile = 'jogoPE.md') {
    const iframe = win.querySelector('#terminal-iframe');
    const normalized = initialFile && initialFile.endsWith('.md') ? initialFile : `${initialFile}.md`;
    const proj = EXECUTABLE_PROJECTS[normalized] || EXECUTABLE_PROJECTS['jogoPE.md'];

    function loadTerminalProject(p) {
        const winTitle = win.querySelector('.window-title');
        if (winTitle) winTitle.textContent = `Terminal — ${p.title}`;

        const mobileTitle = document.getElementById('mobile-app-title');
        if (mobileTitle && win.id === 'mobile-app-screen') {
            mobileTitle.textContent = `Terminal — ${p.title}`;
        }

        if (iframe) {
            iframe.src = p.url;
            iframe.addEventListener('load', () => {
                try { iframe.focus(); iframe.contentWindow?.focus(); } catch (e) {}
            });
            setTimeout(() => {
                try { iframe.focus(); iframe.contentWindow?.focus(); } catch (e) {}
            }, 120);
        }
    }

    win.addEventListener('mousedown', () => {
        setTimeout(() => {
            try { iframe?.focus(); iframe?.contentWindow?.focus(); } catch (e) {}
        }, 10);
    });

    win.updateTerminalProject = (mdKey) => {
        const norm = mdKey && mdKey.endsWith('.md') ? mdKey : `${mdKey}.md`;
        if (EXECUTABLE_PROJECTS[norm]) {
            loadTerminalProject(EXECUTABLE_PROJECTS[norm]);
        }
    };

    if (proj) loadTerminalProject(proj);
}

// Forward keyboard input to active terminal window so WASD / JHKF work seamlessly
document.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    const mobileScreen = document.getElementById('mobile-app-screen');
    if (mobileScreen && mobileScreen.classList.contains('open')) {
        const termIframe = mobileScreen.querySelector('#terminal-iframe');
        if (termIframe && termIframe.contentWindow) {
            termIframe.contentWindow.postMessage({ type: 'TERMINAL_KEY', key: e.key }, '*');
            return;
        }
    }
    const termWin = document.querySelector('.app-window[data-app="terminal"]:not(.closing)');
    if (!termWin) return;
    const allWins = Array.from(document.querySelectorAll('.app-window:not(.closing)'));
    const maxZ = allWins.reduce((m, w) => Math.max(m, parseInt(w.style.zIndex || '0', 10)), 0);
    if (parseInt(termWin.style.zIndex || '0', 10) >= maxZ) {
        const termIframe = termWin.querySelector('#terminal-iframe');
        if (termIframe && termIframe.contentWindow) {
            termIframe.contentWindow.postMessage({ type: 'TERMINAL_KEY', key: e.key }, '*');
        }
    }
});

const BROWSER_HOME_PAGE = {
    id: 'home',
    title: 'Início',
    url: 'demos/browser-home/index.html'
};

function initBrowserListeners(win, initialFile = 'home') {
    const iframe = win.querySelector('#browser-iframe');
    const bookmarkBtns = win.querySelectorAll('.browser-bookmark-item');

    let currentMd = (initialFile && EXECUTABLE_PROJECTS[initialFile]) ? initialFile : 'home';

    function loadProject(mdKey) {
        currentMd = mdKey;
        const isHome = mdKey === 'home' || !EXECUTABLE_PROJECTS[mdKey];
        const proj = isHome ? BROWSER_HOME_PAGE : EXECUTABLE_PROJECTS[mdKey];

        const winTitle = win.querySelector('.window-title');
        if (winTitle) winTitle.textContent = isHome ? 'Navegador Web' : `Navegador — ${proj.title}`;

        const mobileTitle = document.getElementById('mobile-app-title');
        if (mobileTitle && win.id === 'mobile-app-screen') {
            mobileTitle.textContent = proj.title;
        }

        if (iframe && proj) iframe.src = proj.url;

        bookmarkBtns.forEach(btn => {
            btn.classList.toggle('active', !isHome && btn.dataset.md === mdKey);
        });
    }

    bookmarkBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetMd = btn.dataset.md;
            if (targetMd && EXECUTABLE_PROJECTS[targetMd]) {
                loadProject(targetMd);
            }
        });
    });

    window.onBrowserChildNavigate = (mdKey, href) => {
        if (mdKey && EXECUTABLE_PROJECTS[mdKey]) {
            loadProject(mdKey);
        } else if (href && iframe) {
            iframe.src = href;
        }
    };

    win.updateBrowserProject = (mdKey) => {
        const normalized = mdKey && mdKey.endsWith('.md') ? mdKey : `${mdKey}.md`;
        if (EXECUTABLE_PROJECTS[normalized]) {
            loadProject(normalized);
        } else if (mdKey === 'home') {
            loadProject('home');
        }
    };

    loadProject(currentMd);
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
        if (appId === 'browser' && targetFile) {
            if (existing.updateBrowserProject) {
                existing.updateBrowserProject(targetFile);
            }
        }
        if (appId === 'terminal' && targetFile) {
            if (existing.updateTerminalProject) {
                existing.updateTerminalProject(targetFile);
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

    if (appId === 'projects') {
        initProjectsExplorer(win, false);
    } else {
        bindExplorerFileClicks(win, false);
    }

    if (appId === 'markdown-viewer') {
        initMarkdownViewerListeners(win, targetFile || 'README.md');
    }

    if (appId === 'browser') {
        initBrowserListeners(win, targetFile || 'home');
        // Browser starts at full screen (maximized) by default
        win.classList.add('maximized');
        const maxBtn = win.querySelector('.max-btn');
        if (maxBtn) {
            maxBtn.innerHTML = ICONS['restore'];
            maxBtn.title = 'Restaurar';
        }
    }

    if (appId === 'maphra') {
        win.classList.add('maximized');
        const maxBtn = win.querySelector('.max-btn');
        if (maxBtn) {
            maxBtn.innerHTML = ICONS['restore'];
            maxBtn.title = 'Restaurar';
        }
    }

    if (appId === 'terminal') {
        initTerminalListeners(win, targetFile || 'jogoPE.md');
    }

    updateTaskbarIndicators();
}

function getOrCreateSnapPreview() {
    let preview = document.getElementById('window-snap-preview');
    if (!preview) {
        const desktop = document.getElementById('desktop');
        if (!desktop) return null;
        preview = document.createElement('div');
        preview.id = 'window-snap-preview';
        preview.className = 'window-snap-preview hidden';
        desktop.appendChild(preview);
    }
    return preview;
}

// ------ window drag ------
function setupWindowDrag(win) {
    const header = win.querySelector('.window-header');
    let isDragging = false;
    let startX, startY, origLeftPx, origTopPx;
    let snapTopActive = false;
    let startedMaximized = false;

    header.addEventListener('mousedown', (e) => {
        if (e.target.closest('.window-controls')) return;
        if (e.button !== 0) return;
        const remPx = getRemInPx();
        isDragging = true;
        snapTopActive = false;
        startedMaximized = win.classList.contains('maximized');
        bringToFront(win);

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

        if (startedMaximized) {
            if (Math.hypot(dx, dy) < 6) return;
            startedMaximized = false;
            win.classList.remove('maximized');
            const maxBtn = win.querySelector('.max-btn');
            if (maxBtn) {
                maxBtn.innerHTML = ICONS['maximize'];
                maxBtn.title = 'Maximizar';
            }
            const w = win.offsetWidth;
            origLeftPx = e.clientX - w / 2;
            origTopPx = Math.max(0, e.clientY - 18);
            startX = e.clientX;
            startY = e.clientY;
            win.style.left = (origLeftPx / remPx) + 'rem';
            win.style.top = (origTopPx / remPx) + 'rem';
            return;
        }

        win.style.left = ((origLeftPx + dx) / remPx) + 'rem';
        win.style.top = ((origTopPx + dy) / remPx) + 'rem';

        const snapPreview = getOrCreateSnapPreview();
        if (e.clientY <= 14) {
            snapTopActive = true;
            snapPreview?.classList.remove('hidden');
        } else {
            snapTopActive = false;
            snapPreview?.classList.add('hidden');
        }
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        startedMaximized = false;
        const snapPreview = getOrCreateSnapPreview();
        snapPreview?.classList.add('hidden');
        if (snapTopActive && !win.classList.contains('maximized')) {
            snapTopActive = false;
            toggleMaximize(win);
        }
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

function decorateExternalLinks(container) {
    if (!container) return;
    container.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href.startsWith('#run:')) {
            const targetMd = href.slice(5);
            a.classList.add('md-inline-run-link');
            a.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                launchProjectInBrowser(targetMd);
            });
        } else if (href.startsWith('http://') || href.startsWith('https://')) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

function initMarkdownViewerListeners(win, initialFile = 'README.md') {
    const renderedPane = win.querySelector('#md-rendered-pane');
    const execBar = win.querySelector('#md-exec-bar');
    const execLabel = win.querySelector('#md-exec-label');
    const execBadge = win.querySelector('#md-exec-badge');
    const execBtn = win.querySelector('#md-exec-btn');

    let currentFile = initialFile;

    if (execBtn) {
        execBtn.onclick = (e) => {
            e.stopPropagation();
            launchProjectInBrowser(currentFile);
        };
    }

    async function updateContent() {
        const winTitle = win.querySelector('.window-title');
        if (winTitle) winTitle.textContent = currentFile;

        const mobileTitle = document.getElementById('mobile-app-title');
        if (mobileTitle && win.id === 'mobile-app-screen') {
            mobileTitle.textContent = currentFile;
        }

        const execConfig = EXECUTABLE_PROJECTS[currentFile];
        if (execBar) {
            if (execConfig) {
                execBar.classList.remove('hidden');
                if (execLabel) execLabel.textContent = execConfig.title;
                if (execBadge) execBadge.textContent = execConfig.mode;
            } else {
                execBar.classList.add('hidden');
            }
        }

        if (currentFile !== 'README.md' && win.classList?.contains('app-window') && !win.classList.contains('maximized')) {
            const currentH = parseFloat(win.style.height) || 0;
            if (currentH <= 21) {
                win.style.height = APP_CONFIGS['markdown-viewer'].height + 'rem';
                const desktop = document.getElementById('desktop');
                if (desktop) {
                    const remPx = getRemInPx();
                    const desktopHRem = desktop.getBoundingClientRect().height / remPx;
                    const curTop = parseFloat(win.style.top) || 0;
                    if (curTop + APP_CONFIGS['markdown-viewer'].height > desktopHRem) {
                        win.style.top = Math.max(0.5, (desktopHRem - APP_CONFIGS['markdown-viewer'].height) / 2) + 'rem';
                    }
                }
            }
        }

        const mdText = await fetchMarkdownFile(currentFile);
        if (renderedPane) {
            renderedPane.innerHTML = window.marked ? marked.parse(mdText) : mdText;
            decorateExternalLinks(renderedPane);
            renderedPane.parentElement?.scrollTo(0, 0);
        }
    }

    win.updateMarkdownFile = (fileName) => {
        currentFile = fileName;
        updateContent();
    };

    updateContent();
}
