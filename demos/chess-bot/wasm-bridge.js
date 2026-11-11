(function () {
    const nameEl = document.getElementById("name");
    if (nameEl && !nameEl.textContent) {
        nameEl.textContent = "Loading Go WebAssembly engine...";
    }

    const worker = new Worker("worker.js");
    let reqCounter = 0;
    const pendingRequests = new Map();

    worker.onmessage = (e) => {
        const { type, id, status, respBody } = e.data || {};
        if (type === "response" && pendingRequests.has(id)) {
            const { resolve } = pendingRequests.get(id);
            pendingRequests.delete(id);
            resolve(new Response(respBody, {
                status: status || 200,
                headers: { "Content-Type": "application/json" }
            }));
        }
    };

    const originalFetch = window.fetch.bind(window);
    window.fetch = function (resource, init) {
        const url = typeof resource === "string" ? resource : (resource && resource.url) || "";
        const clean = url.replace(/^\.?\//, "").split("?")[0];
        if (clean === "getBoard" || clean === "getMoves" || clean === "movePiece") {
            const method = (init && init.method) ? init.method.toUpperCase() : "GET";
            const body = (init && init.body) ? String(init.body) : "";
            return new Promise((resolve) => {
                const id = ++reqCounter;
                pendingRequests.set(id, { resolve });
                worker.postMessage({ id, method, path: clean, body });
            });
        }
        return originalFetch(resource, init);
    };
})();
