importScripts("wasm_exec.js");

const go = new Go();
let wasmReady = false;
const pendingQueue = [];

self.onChessBotWasmReady = () => {
    wasmReady = true;
    while (pendingQueue.length > 0) {
        dispatchRequest(pendingQueue.shift());
    }
};

function dispatchRequest({ id, method, path, body }) {
    self.chessBotHandleRequest(method, path, body || "", (status, respBody) => {
        self.postMessage({ type: "response", id, status, respBody });
    });
}

self.onmessage = (e) => {
    const msg = e.data;
    if (!msg || !msg.id) return;
    if (!wasmReady) {
        pendingQueue.push(msg);
    } else {
        dispatchRequest(msg);
    }
};

async function initWasm() {
    try {
        if (WebAssembly.instantiateStreaming) {
            try {
                const res = await WebAssembly.instantiateStreaming(fetch("chessbot.wasm"), go.importObject);
                go.run(res.instance);
                return;
            } catch (_) {
                // Fallback for servers serving .wasm without application/wasm MIME type
            }
        }
        const resp = await fetch("chessbot.wasm");
        const bytes = await resp.arrayBuffer();
        const res = await WebAssembly.instantiate(bytes, go.importObject);
        go.run(res.instance);
    } catch (err) {
        console.error("Failed to initialize chessbot.wasm:", err);
    }
}

initWasm();
