// ------ svg icon library ------
const ICONS = {
    'recycle-bin': `<svg viewBox="0 0 48 48"><path d="M14 16h20v22a3 3 0 01-3 3H17a3 3 0 01-3-3V16z" fill="#4a90d9"/><rect x="11" y="12" width="26" height="2.5" rx="1.25" fill="#5ba0e0"/><path d="M20.5 21v12M24 21v12M27.5 21v12" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    'this-pc': `<svg viewBox="0 0 48 48"><rect x="6" y="8" width="36" height="24" rx="2.5" fill="#3a7bd5"/><rect x="9" y="11" width="30" height="18" rx="1.5" fill="#1a1a2e"/><path d="M18 35h12M24 32v3" stroke="#5ba0e0" stroke-width="2" stroke-linecap="round"/><rect x="16" y="37" width="16" height="2" rx="1" fill="#5ba0e0"/></svg>`,
    'projects': `<svg viewBox="0 0 48 48"><path d="M6 16a2 2 0 012-2h12l3 3h17a2 2 0 012 2v17a2 2 0 01-2 2H8a2 2 0 01-2-2V16z" fill="#e8a838"/><path d="M6 21h36v15a2 2 0 01-2 2H8a2 2 0 01-2-2V21z" fill="#ffc107"/></svg>`,
    'games': `<svg viewBox="0 0 48 48"><path d="M6 16a2 2 0 012-2h12l3 3h17a2 2 0 012 2v17a2 2 0 01-2 2H8a2 2 0 01-2-2V16z" fill="#e8a838"/><path d="M6 21h36v15a2 2 0 01-2 2H8a2 2 0 01-2-2V21z" fill="#ffc107"/><path d="M19 26h10a3 3 0 012.9 3.8l-.8 3a1.8 1.8 0 01-3 .8l-1.6-1.6h-5l-1.6 1.6a1.8 1.8 0 01-3-.8l-.8-3A3 3 0 0119 26z" fill="#7c4dff"/><path d="M21 28.5v2.5M19.75 29.75h2.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><circle cx="27.5" cy="29" r="0.8" fill="#fff"/><circle cx="26" cy="30.5" r="0.8" fill="#fff"/></svg>`,
    'browser': `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="#0078d4"/><ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="#60cdff" stroke-width="2"/><path d="M7 18h34M7 30h34" stroke="#60cdff" stroke-width="2"/><circle cx="24" cy="24" r="18" fill="none" stroke="#80d8ff" stroke-width="2"/></svg>`,
    'maximize': `<svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`,
    'restore': `<svg viewBox="0 0 10 10"><rect x="2.5" y="0.5" width="7" height="7" rx="0.5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="0.5" y="2.5" width="7" height="7" rx="0.5" fill="var(--win-window-header)" stroke="currentColor" stroke-width="1"/></svg>`,
    'close': `<svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    'folder': `<svg viewBox="0 0 40 40"><path d="M4 12a2 2 0 012-2h10l2.5 2.5H34a2 2 0 012 2V30a2 2 0 01-2 2H6a2 2 0 01-2-2V12z" fill="#e8a838"/><path d="M4 16h32v14a2 2 0 01-2 2H6a2 2 0 01-2-2V16z" fill="#ffc107"/></svg>`,
    'file': `<svg viewBox="0 0 40 40"><path d="M10 4h14l8 8v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#5ba0e0"/><path d="M24 4v6a2 2 0 002 2h6" fill="#4a90d9"/><path d="M14 20h12M14 25h8" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    'markdown-file': `<svg viewBox="0 0 40 40"><path d="M10 4h14l8 8v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#5ba0e0"/><path d="M24 4v6a2 2 0 002 2h6" fill="#4a90d9"/><path d="M14 20h12M14 25h8" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    'markdown-viewer': `<svg viewBox="0 0 40 40"><path d="M12 4h12l8 8v20a2 2 0 01-2 2H12a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#5ba0e0"/><path d="M24 4v6a2 2 0 002 2h6" fill="#4a90d9"/><path d="M16 18l3 3-3 3M24 18l-3 3 3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'pdf-file': `<svg viewBox="0 0 40 40"><path d="M10 4h14l8 8v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#e53935"/><path d="M24 4v6a2 2 0 002 2h6" fill="#b71c1c"/><rect x="11" y="19" width="18" height="9" rx="1.5" fill="rgba(0,0,0,0.22)"/><text x="20" y="25.5" text-anchor="middle" fill="#fff" font-size="6.5" font-weight="700" font-family="Inter, sans-serif">PDF</text></svg>`,
    'pdf-viewer': `<svg viewBox="0 0 40 40"><path d="M10 4h14l8 8v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#e53935"/><path d="M24 4v6a2 2 0 002 2h6" fill="#b71c1c"/><rect x="11" y="19" width="18" height="9" rx="1.5" fill="rgba(0,0,0,0.22)"/><text x="20" y="25.5" text-anchor="middle" fill="#fff" font-size="6.5" font-weight="700" font-family="Inter, sans-serif">PDF</text></svg>`,
    'terminal': `<svg viewBox="0 0 48 48"><rect x="4" y="8" width="40" height="32" rx="4" fill="#18181b" stroke="#3f3f46" stroke-width="2"/><path d="M4 14a4 4 0 014-4h32a4 4 0 014 4v2H4v-2z" fill="#27272a"/><circle cx="10" cy="12" r="1.5" fill="#ef4444"/><circle cx="15" cy="12" r="1.5" fill="#eab308"/><circle cx="20" cy="12" r="1.5" fill="#22c55e"/><path d="M12 22l6 5-6 5M21 32h9" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'maphra': `<img src="demos/compiladores/peixinho.svg" style="width:28px;height:28px;object-fit:contain;" alt="Maphra"/>`,
};

// ------ executable projects registry ------
const EXECUTABLE_PROJECTS = {
    'datarural.md': {
        id: 'datarural',
        title: 'DataRural — Plataforma de Datasets da UFRRJ',
        url: 'demos/datarural/index.html',
        mode: 'Mock API'
    },
    'agendamento-lab.md': {
        id: 'agendamento-lab',
        title: 'Agendamento de Computadores — Lab 310 (SmartIM)',
        url: 'demos/agendamento-lab/index.html',
        mode: 'Mock API'
    },
    'compiladores.md': {
        id: 'compiladores',
        title: 'Compilador Maphra — Playground',
        url: 'demos/compiladores/index.html',
        mode: 'Playground',
        openIn: 'maphra'
    },
    'e-commerce.md': {
        id: 'e-commerce',
        title: 'BDV E-commerce',
        url: 'demos/e-commerce/index.html',
        mode: 'Mock API + Stripe'
    },
    'IM-3D.md': {
        id: 'IM-3D',
        title: 'IM-3D — Visualizador 3D do Campus UFRRJ (Nova Iguaçu)',
        url: 'demos/IM-3D/index.html',
        mode: 'WebGL 3D Viewer'
    },
    'jogoPE.md': {
        id: 'jogoPE',
        title: 'A Lenda de Anura — RPG de Terminal',
        url: 'demos/jogoPE/index.html',
        mode: 'Terminal (ncurses)',
        openIn: 'terminal'
    },
    'email-classifier.md': {
        id: 'email-classifier',
        title: 'E-mail Classifier',
        url: 'https://emailclassifier.ravsil.dev',
        mode: 'GitHub Pages'
    },
    'show-do-milhao.md': {
        id: 'show-do-milhao',
        title: 'Show do Milhão — Quiz Web Game',
        url: 'demos/show-do-milhao/index.html',
        mode: 'Web Game'
    }
};

// ------ start menu programs ------
const START_PROGRAMS = [
    { id: 'projects', name: 'Projetos' },
    { id: 'browser', name: 'Navegador Web' },
    { id: 'maphra', name: 'Compilador Maphra' },
    { id: 'terminal', name: 'jogoPE (A Lenda de Anura)', file: 'jogoPE.md' },
    { id: 'pdf-viewer', name: 'Currículo (PDF)', file: 'curriculo.pdf' },
    { id: 'markdown-viewer', name: 'Leitor de Markdown' },
    { id: 'this-pc', name: 'Este PC' },
    { id: 'recycle-bin', name: 'Lixeira' },
];

// ------ mobile app definitions ------
const MOBILE_APPS = [
    { id: 'this-pc', name: 'Este PC', color: '#3a7bd5', icon: ICONS['this-pc'] },
    { id: 'projects', name: 'Projetos', color: '#e8a838', icon: ICONS['projects'] },
    { id: 'browser', name: 'Navegador', color: '#0078d4', icon: ICONS['browser'] },
    { id: 'maphra', name: 'Maphra', color: '#7c3aed', icon: ICONS['maphra'] },
    { id: 'pdf-viewer', name: 'Currículo', color: '#e53935', icon: ICONS['pdf-file'], file: 'curriculo.pdf' },
    { id: 'markdown-viewer', name: 'Markdown', color: '#5ba0e0', icon: ICONS['file'] }
];

const DOCK_APPS = ['this-pc', 'projects', 'browser', 'pdf-viewer'];

// ------ project folders data ------
const PROJECTS_DATA = {
    root: {
        breadcrumb: 'Projetos',
        items: [
            { type: 'folder', id: 'graduacao', label: 'Graduação' },
            { type: 'folder', id: 'pessoais', label: 'Pessoais' }
        ]
    },
    graduacao: {
        breadcrumb: 'Projetos › Graduação',
        items: [
            { type: 'md', file: 'datarural.md', label: 'datarural.md' },
            { type: 'md', file: 'agendamento-lab.md', label: 'agendamento-lab.md' },
            { type: 'md', file: 'compiladores.md', label: 'compiladores.md' },
            { type: 'md', file: 'e-commerce.md', label: 'e-commerce.md' },
            { type: 'md', file: 'sistemasDeRecomendacao.md', label: 'sistemasDeRecomendacao.md' },
            { type: 'md', file: 'sistemasOperacionais.md', label: 'sistemasOperacionais.md' },
            { type: 'md', file: 'estruturaDeDadosII.md', label: 'estruturaDeDadosII.md' },
            { type: 'md', file: 'inteligenciaArtificial.md', label: 'inteligenciaArtificial.md' },
            { type: 'md', file: 'IM-3D.md', label: 'IM-3D.md' },
            { type: 'md', file: 'jogoCG.md', label: 'jogoCG.md' },
            { type: 'md', file: 'jogoPE.md', label: 'jogoPE.md' }
        ]
    },
    pessoais: {
        breadcrumb: 'Projetos › Pessoais',
        items: [
            { type: 'md', file: 'email-classifier.md', label: 'email-classifier.md' },
            { type: 'md', file: 'chess-bot.md', label: 'chess-bot.md' },
            { type: 'md', file: 'cloneHero.md', label: 'cloneHero.md' },
            { type: 'md', file: 'show-do-milhao.md', label: 'show-do-milhao.md' },
            { type: 'md', file: 'IM-3D.md', label: 'IM-3D.md' }
        ]
    }
};

function renderFileGridItems(items) {
    return items.map(item => {
        if (item.type === 'folder') {
            return `<div class="file-item folder-item-open" data-subfolder="${item.id}">${ICONS['folder']}<span>${item.label}</span></div>`;
        }
        if (item.type === 'pdf') {
            return `<div class="file-item pdf-file-open" data-app="pdf-viewer" data-file="${item.file}">${ICONS['pdf-file']}<span>${item.label}</span></div>`;
        }
        return `<div class="file-item md-file-open" data-app="markdown-viewer" data-file="${item.file}">${ICONS['markdown-file']}<span>${item.label}</span></div>`;
    }).join('');
}

// ------ hardware detection ------
function getGPUInfo() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return 'Placa gráfica WebGL Padrão';
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            if (renderer) return renderer.replace(/^ANGLE \((.*)\)$/, '$1');
        }
    } catch (e) { }
    return 'Adaptador de Vídeo Acelerado';
}

function getOSName() {
    const ua = navigator.userAgent;
    if (ua.includes('Win')) return 'Windows 11 Home / Pro (64-bit)';
    if (ua.includes('Mac')) return 'macOS Apple Silicon / Intel';
    if (ua.includes('Linux')) return 'Linux x86_64';
    if (ua.includes('Android')) return 'Android Mobile OS';
    if (ua.includes('iPhone') || ua.includes('iPad')) return 'Apple iOS';
    return 'Sistema Operacional de 64 bits';
}

function getHardwareSpecs() {
    const cpuCores = navigator.hardwareConcurrency || '8';
    const ram = navigator.deviceMemory ? `${navigator.deviceMemory} GB RAM` : '8 GB RAM (detectado)';
    const gpu = getGPUInfo();
    const os = getOSName();
    const res = `${window.screen.width} × ${window.screen.height} (${window.devicePixelRatio}x DPR)`;
    const touch = navigator.maxTouchPoints > 0 ? `Suportado (${navigator.maxTouchPoints} pontos)` : 'Não suportado';

    return { cpu: `${cpuCores} núcleos lógicos`, ram, gpu, os, screen: res, touch };
}

// ------ app window content configs ------
const APP_CONFIGS = {
    'recycle-bin': {
        title: 'Lixeira',
        width: 38.75, height: 26.25,
        content: () => `
            <div class="explorer-toolbar">
                <div class="explorer-nav">
                    <button disabled><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L4 6l4 4"/></svg></button>
                    <button disabled><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2l4 4-4 4"/></svg></button>
                </div>
                <div class="explorer-breadcrumb">
                    ${ICONS['recycle-bin'].replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '')}
                    Lixeira
                </div>
            </div>
            <div class="empty-state">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20 24h24v28a4 4 0 01-4 4H24a4 4 0 01-4-4V24z"/>
                    <path d="M16 20h32"/>
                    <path d="M26 20v-4a4 4 0 014-4h4a4 4 0 014 4v4"/>
                </svg>
                <p>A Lixeira está vazia</p>
            </div>`
    },
    'this-pc': {
        title: 'Este PC',
        width: 46.25, height: 28.75,
        content: () => {
            const specs = getHardwareSpecs();
            return `
            <div class="explorer-toolbar">
                <div class="explorer-nav">
                    <button disabled><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L4 6l4 4"/></svg></button>
                    <button disabled><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2l4 4-4 4"/></svg></button>
                </div>
                <div class="explorer-breadcrumb">
                    ${ICONS['this-pc'].replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '')}
                    Este PC &rsaquo; Especificações do Sistema
                </div>
            </div>
            <div class="sys-info-container">
                <div class="drive-section-title">Especificações do Dispositivo</div>
                <div class="sys-hardware-grid">
                    <div class="sys-hw-card">
                        <div class="hw-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>
                        </div>
                        <div class="hw-details">
                            <span class="hw-label">Processador (CPU)</span>
                            <span class="hw-val">${specs.cpu}</span>
                        </div>
                    </div>
                    <div class="sys-hw-card">
                        <div class="hw-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h2M11 10h2M16 10h2"/></svg>
                        </div>
                        <div class="hw-details">
                            <span class="hw-label">Memória RAM</span>
                            <span class="hw-val">${specs.ram}</span>
                        </div>
                    </div>
                    <div class="sys-hw-card">
                        <div class="hw-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                        </div>
                        <div class="hw-details">
                            <span class="hw-label">Placa de Vídeo (GPU)</span>
                            <span class="hw-val" title="${specs.gpu}">${specs.gpu}</span>
                        </div>
                    </div>
                    <div class="sys-hw-card">
                        <div class="hw-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 12h10M12 7v10"/></svg>
                        </div>
                        <div class="hw-details">
                            <span class="hw-label">Monitor &amp; Resolução</span>
                            <span class="hw-val">${specs.screen}</span>
                        </div>
                    </div>
                    <div class="sys-hw-card">
                        <div class="hw-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                        </div>
                        <div class="hw-details">
                            <span class="hw-label">Sistema Operacional</span>
                            <span class="hw-val">${specs.os}</span>
                        </div>
                    </div>
                    <div class="sys-hw-card">
                        <div class="hw-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v5M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v6M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"/></svg>
                        </div>
                        <div class="hw-details">
                            <span class="hw-label">Suporte ao Toque</span>
                            <span class="hw-val">${specs.touch}</span>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    },
    'projects': {
        title: 'Projetos',
        width: 43, height: 28,
        content: () => `
            <div class="explorer-toolbar">
                <div class="explorer-nav">
                    <button class="exp-back-btn" title="Voltar" disabled><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L4 6l4 4"/></svg></button>
                    <button class="exp-fwd-btn" title="Avançar" disabled><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2l4 4-4 4"/></svg></button>
                </div>
                <div class="explorer-breadcrumb">
                    ${ICONS['projects'].replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '')}
                    <span class="exp-breadcrumb-text">Projetos</span>
                </div>
            </div>
            <div class="file-grid" id="projects-file-grid">
                ${renderFileGridItems(PROJECTS_DATA.root.items)}
            </div>`
    },
    'markdown-viewer': {
        title: 'Visualizador de Markdown',
        width: 48, height: 32,
        content: () => `
            <div class="md-viewer-layout">
                <div class="md-exec-bar hidden" id="md-exec-bar">
                    <div class="md-exec-info">
                        <span class="md-exec-dot"></span>
                        <span class="md-exec-label" id="md-exec-label">Projeto executável</span>
                        <span class="md-exec-badge" id="md-exec-badge">WebAssembly</span>
                    </div>
                    <button class="md-exec-btn" id="md-exec-btn" title="Executar projeto no navegador interno">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                            <polygon points="4,2.5 13.5,8 4,13.5"/>
                        </svg>
                        <span>Executar Projeto</span>
                    </button>
                </div>
                <div class="md-content-pane">
                    <div class="markdown-body" id="md-rendered-pane"></div>
                </div>
            </div>`
    },
    'browser': {
        title: 'Navegador Web',
        width: 62, height: 39,
        content: () => {
            const bookmarkButtons = Object.entries(EXECUTABLE_PROJECTS)
                .filter(([, p]) => p.openIn !== 'terminal' && p.openIn !== 'maphra')
                .map(([mdKey, p]) => `
                <button class="browser-bookmark-item" data-md="${mdKey}" title="${p.title}">
                    <span class="bb-dot"></span>
                    <span>${p.id}</span>
                </button>
            `).join('');
            return `
            <div class="browser-layout">
                <div class="browser-bookmarks-bar" id="browser-bookmarks-bar">
                    ${bookmarkButtons}
                </div>
                <div class="browser-viewport">
                    <iframe class="browser-iframe" id="browser-iframe" src="demos/browser-home/index.html" title="Project Browser"></iframe>
                </div>
            </div>`;
        }
    },
    'maphra': {
        title: 'Compilador Maphra — Playground',
        width: 60, height: 38,
        content: () => `
            <div class="maphra-app-layout" style="width:100%;height:100%;background:#0f1117;">
                <iframe class="maphra-app-iframe" id="maphra-iframe" src="demos/compiladores/index.html" style="width:100%;height:100%;border:none;display:block;" title="Compilador Maphra"></iframe>
            </div>`
    },
    'terminal': {
        title: 'Terminal — ./game (A Lenda de Anura)',
        width: 52, height: 33,
        content: () => `
            <div class="terminal-app-layout">
                <iframe class="terminal-app-iframe" id="terminal-iframe" src="demos/jogoPE/index.html" title="Terminal Application"></iframe>
            </div>`
    },
    'pdf-viewer': {
        title: 'curriculo.pdf',
        width: 52, height: 36,
        content: () => `
            <div class="pdf-viewer-layout">
                <div class="pdf-toolbar">
                    <div class="pdf-toolbar-info">
                        ${ICONS['pdf-file']}
                        <span class="pdf-filename">curriculo.pdf</span>
                    </div>
                    <div class="pdf-toolbar-actions">
                        <a href="curriculo.pdf" target="_blank" rel="noopener noreferrer" class="pdf-action-btn" title="Abrir em nova aba">
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 2h5v5M14 2L7 9M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3"/>
                            </svg>
                            <span>Nova guia</span>
                        </a>
                        <a href="curriculo.pdf" download="curriculo-rafael-vieira.pdf" class="pdf-action-btn primary" title="Baixar PDF">
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M8 2v8m0 0l-3-3m3 3l3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
                            </svg>
                            <span>Baixar</span>
                        </a>
                    </div>
                </div>
                <div class="pdf-frame-container">
                    <iframe src="curriculo.pdf" class="pdf-viewer-frame" title="Currículo PDF"></iframe>
                </div>
            </div>`
    }
};
