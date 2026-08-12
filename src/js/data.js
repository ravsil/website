// ------ svg icon library ------
const ICONS = {
    'recycle-bin': `<svg viewBox="0 0 48 48"><path d="M14 16h20v22a3 3 0 01-3 3H17a3 3 0 01-3-3V16z" fill="#4a90d9"/><rect x="11" y="12" width="26" height="2.5" rx="1.25" fill="#5ba0e0"/><path d="M20.5 21v12M24 21v12M27.5 21v12" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    'this-pc': `<svg viewBox="0 0 48 48"><rect x="6" y="8" width="36" height="24" rx="2.5" fill="#3a7bd5"/><rect x="9" y="11" width="30" height="18" rx="1.5" fill="#1a1a2e"/><path d="M18 35h12M24 32v3" stroke="#5ba0e0" stroke-width="2" stroke-linecap="round"/><rect x="16" y="37" width="16" height="2" rx="1" fill="#5ba0e0"/></svg>`,
    'documents': `<svg viewBox="0 0 48 48"><path d="M6 16a2 2 0 012-2h12l3 3h17a2 2 0 012 2v17a2 2 0 01-2 2H8a2 2 0 01-2-2V16z" fill="#e8a838"/><path d="M6 21h36v15a2 2 0 01-2 2H8a2 2 0 01-2-2V21z" fill="#ffc107"/></svg>`,
    'maximize': `<svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`,
    'restore': `<svg viewBox="0 0 10 10"><rect x="2.5" y="0.5" width="7" height="7" rx="0.5" fill="none" stroke="currentColor" stroke-width="1"/><rect x="0.5" y="2.5" width="7" height="7" rx="0.5" fill="var(--win-window-header)" stroke="currentColor" stroke-width="1"/></svg>`,
    'close': `<svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    'folder': `<svg viewBox="0 0 40 40"><path d="M4 12a2 2 0 012-2h10l2.5 2.5H34a2 2 0 012 2V30a2 2 0 01-2 2H6a2 2 0 01-2-2V12z" fill="#e8a838"/><path d="M4 16h32v14a2 2 0 01-2 2H6a2 2 0 01-2-2V16z" fill="#ffc107"/></svg>`,
    'file': `<svg viewBox="0 0 40 40"><path d="M10 4h14l8 8v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#5ba0e0"/><path d="M24 4v6a2 2 0 002 2h6" fill="#4a90d9"/><path d="M14 20h12M14 25h8" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    'markdown-file': `<svg viewBox="0 0 40 40"><path d="M10 4h14l8 8v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#5ba0e0"/><path d="M24 4v6a2 2 0 002 2h6" fill="#4a90d9"/><path d="M14 20h12M14 25h8" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    'markdown-viewer': `<svg viewBox="0 0 40 40"><path d="M12 4h12l8 8v20a2 2 0 01-2 2H12a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#5ba0e0"/><path d="M24 4v6a2 2 0 002 2h6" fill="#4a90d9"/><path d="M16 18l3 3-3 3M24 18l-3 3 3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// ------ start menu programs ------
const START_PROGRAMS = [
    { id: 'markdown-viewer', name: 'Leitor de Markdown' },
    { id: 'documents', name: 'Documentos' },
    { id: 'this-pc', name: 'Este PC' },
    { id: 'recycle-bin', name: 'Lixeira' },
];

// ------ mobile app definitions ------
const MOBILE_APPS = [
    { id: 'this-pc', name: 'Este PC', color: '#3a7bd5', icon: ICONS['this-pc'] },
    { id: 'documents', name: 'Documentos', color: '#e8a838', icon: ICONS['documents'] },
    { id: 'markdown-viewer', name: 'Markdown', color: '#5ba0e0', icon: ICONS['file'] }
];

const DOCK_APPS = ['this-pc', 'documents', 'markdown-viewer'];

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
                    <button><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L4 6l4 4"/></svg></button>
                    <button><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2l4 4-4 4"/></svg></button>
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
                    <button><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L4 6l4 4"/></svg></button>
                    <button><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2l4 4-4 4"/></svg></button>
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
    'documents': {
        title: 'Documentos',
        width: 41.25, height: 27.5,
        content: () => `
            <div class="explorer-toolbar">
                <div class="explorer-nav">
                    <button><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L4 6l4 4"/></svg></button>
                    <button><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2l4 4-4 4"/></svg></button>
                </div>
                <div class="explorer-breadcrumb">
                    ${ICONS['documents'].replace(/width="[^"]*"/g, '').replace(/height="[^"]*"/g, '')}
                    Documentos
                </div>
            </div>
            <div class="file-grid">
                <div class="file-item md-file-open" data-app="markdown-viewer" data-file="README.md">${ICONS['markdown-file']}<span>README.md</span></div>
                <div class="file-item md-file-open" data-app="markdown-viewer" data-file="PROJETO.md">${ICONS['markdown-file']}<span>PROJETO.md</span></div>
                <div class="file-item">${ICONS['folder']}<span>Projetos</span></div>
                <div class="file-item">${ICONS['folder']}<span>Trabalho</span></div>
                <div class="file-item">${ICONS['folder']}<span>Pessoal</span></div>
                <div class="file-item">${ICONS['file']}<span>notas.txt</span></div>
                <div class="file-item">${ICONS['file']}<span>resumo.pdf</span></div>
                <div class="file-item">${ICONS['file']}<span>planilha.xlsx</span></div>
            </div>`
    },
    'markdown-viewer': {
        title: 'Visualizador de Markdown',
        width: 48, height: 32,
        content: () => `
            <div class="md-viewer-layout">
                <div class="md-content-pane">
                    <div class="markdown-body" id="md-rendered-pane"></div>
                </div>
            </div>`
    }
};