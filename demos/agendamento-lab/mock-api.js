// =========================================================================
// Mock API & Client-Side SQLite Simulation for Agendamento-Lab (UFRRJ)
// =========================================================================
(function () {
    const DB_KEY = "agend_db_v1";

    function getFormattedDate(year = true) {
        let currentDate = new Date();
        let day = currentDate.getDate();
        if (day < 10) day = `0${day}`;
        let month = currentDate.getMonth() + 1;
        if (month < 10) month = `0${month}`;
        if (year) {
            return `${day}/${month}/${currentDate.getFullYear()}`;
        }
        return `${day}/${month}`;
    }

    function getCurrentWeekdayPt() {
        const daysOfWeek = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado",
        ];
        const idx = new Date().getDay();
        if (idx === 0 || idx === 6) return "Terça-feira";
        return daysOfWeek[idx];
    }

    function createInitialDB() {
        const computers = [];
        for (let i = 0; i < 30; i++) {
            if (i < 10) {
                computers.push({
                    patrimonio: i,
                    processador: "Ryzen 5 5600G",
                    placa_de_video: "Integrada",
                    qtd_memoria_ram: 16,
                });
            } else {
                computers.push({
                    patrimonio: i,
                    processador: "Intel Core i3 4100M",
                    placa_de_video: "Integrada",
                    qtd_memoria_ram: 4,
                });
            }
        }

        const users = [
            { email: "rafael@ufrrj.br", ocupacao: "Professor" },
            { email: "helcio@ufrrj.br", ocupacao: "Aluno" },
            { email: "pedro@ufrrj.br", ocupacao: "Aluno" },
            { email: "aluno@ufrrj.br", ocupacao: "Aluno" },
        ];

        const todayStr = getFormattedDate(true);
        const curHour = new Date().getHours();
        const curMin = new Date().getMinutes();
        let curIdx = (curHour - 8) * 2 + (curMin >= 30 ? 1 : 0) + 1;
        if (curIdx < 1 || curIdx > 19) curIdx = 9; // fallback to 12:00 if outside 08:00-17:30

        const schedules = [
            // Active schedules covering current time & afternoon slots on PCs 1, 2, 5, 12
            {
                id_Agendamento: 1,
                computador_patrimonio: 1,
                email: "helcio@ufrrj.br",
                id_inicio: Math.max(1, curIdx),
                id_fim: Math.min(21, curIdx + 3),
                data: todayStr,
            },
            {
                id_Agendamento: 2,
                computador_patrimonio: 2,
                email: "pedro@ufrrj.br",
                id_inicio: Math.max(1, curIdx),
                id_fim: Math.min(21, curIdx + 2),
                data: todayStr,
            },
            {
                id_Agendamento: 3,
                computador_patrimonio: 5,
                email: "aluno@ufrrj.br",
                id_inicio: 13, // 14:00
                id_fim: 17,     // 16:00
                data: todayStr,
            },
            {
                id_Agendamento: 4,
                computador_patrimonio: 12,
                email: "helcio@ufrrj.br",
                id_inicio: 15, // 15:00
                id_fim: 19,     // 17:00
                data: todayStr,
            },
        ];

        const todayWeekday = getCurrentWeekdayPt();
        const classes = [
            {
                email: "rafael@ufrrj.br",
                id_inicio: 17, // 16:00
                id_fim: 21,    // 18:00
                dia_semana: todayWeekday,
                descricao: "Programação Estruturada",
                ativo: 1,
            },
            {
                email: "rafael@ufrrj.br",
                id_inicio: 5,  // 10:00
                id_fim: 9,     // 12:00
                dia_semana: todayWeekday === "Segunda-feira" ? "Quarta-feira" : "Segunda-feira",
                descricao: "Estrutura de Dados I",
                ativo: 1,
            },
            {
                email: "rafael@ufrrj.br",
                id_inicio: 9,  // 12:00
                id_fim: 13,    // 14:00
                dia_semana: "Sexta-feira",
                descricao: "Engenharia de Software",
                ativo: 0,
            },
        ];

        return {
            computers,
            users,
            schedules,
            classes,
            nextScheduleId: 5,
        };
    }

    function loadDB() {
        try {
            const raw = localStorage.getItem(DB_KEY);
            if (!raw) {
                const initial = createInitialDB();
                localStorage.setItem(DB_KEY, JSON.stringify(initial));
                return initial;
            }
            const parsed = JSON.parse(raw);
            // Ensure today's date has sample schedules so demo is always vibrant
            const todayStr = getFormattedDate(true);
            const hasToday = (parsed.schedules || []).some((s) => s.data === todayStr);
            if (!hasToday) {
                const fresh = createInitialDB();
                parsed.schedules = fresh.schedules;
                localStorage.setItem(DB_KEY, JSON.stringify(parsed));
            }
            return parsed;
        } catch (e) {
            const initial = createInitialDB();
            localStorage.setItem(DB_KEY, JSON.stringify(initial));
            return initial;
        }
    }

    function saveDB(db) {
        localStorage.setItem(DB_KEY, JSON.stringify(db));
    }

    // Ensure DB is initialized immediately
    loadDB();

    // Ensure default logged-in user if not on login page and not explicitly logged out
    if (
        !localStorage.getItem("email") &&
        !sessionStorage.getItem("explicit_logout") &&
        !window.location.pathname.endsWith("index.html") &&
        !window.location.pathname.endsWith("/agendamento-lab/") &&
        !window.location.pathname.endsWith("/agendamento-lab")
    ) {
        localStorage.setItem("email", "rafael@ufrrj.br");
        localStorage.setItem("name", "Rafael");
        localStorage.setItem("time", String(new Date().getTime()));
    }

    function handleRoute(url, method, data) {
        const cleanUrl = String(url).replace(/^\/+/, "").split("?")[0];
        const db = loadDB();

        if (cleanUrl === "get-computers") {
            return { status: 200, body: db.computers };
        }

        if (cleanUrl === "get-users") {
            return { status: 200, body: db.users };
        }

        if (cleanUrl === "get-schedule") {
            const pcId = Number(data?.pcId);
            const date = String(data?.date || "");
            const rows = db.schedules.filter(
                (s) => Number(s.computador_patrimonio) === pcId && s.data === date
            );
            return { status: 200, body: rows };
        }

        if (cleanUrl === "get-class") {
            const daysOfWeek = [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado",
            ];
            const dayIndex = new Date().getDay();
            let day = daysOfWeek[dayIndex];
            // If viewed on weekend, show sample weekday classes so yellow slots appear in demo
            if (day === "Domingo" || day === "Sábado") {
                day = "Terça-feira";
            }
            const rows = db.classes.filter(
                (c) => c.dia_semana === day && Number(c.ativo) === 1
            );
            return { status: 200, body: rows };
        }

        if (cleanUrl === "get-class-admin") {
            const day = data?.day;
            const rows = db.classes.filter((c) => c.dia_semana === day);
            return { status: 200, body: rows };
        }

        if (cleanUrl === "add-user") {
            const email = data?.email;
            if (email && !db.users.some((u) => u.email === email)) {
                db.users.push({ email: email, ocupacao: "Aluno" });
                saveDB(db);
            }
            return { status: 200, body: { success: true } };
        }

        if (cleanUrl === "delete-user") {
            const email = data?.email;
            db.users = db.users.filter((u) => u.email !== email);
            saveDB(db);
            return {
                status: 200,
                body: { success: true, message: "Usuário removido com sucesso." },
            };
        }

        if (cleanUrl === "delete-class") {
            const email = data?.email;
            const start = Number(data?.id_inicio);
            const end = Number(data?.id_fim);
            const day = data?.dia_semana;
            db.classes = db.classes.filter(
                (c) =>
                    !(
                        c.email === email &&
                        Number(c.id_inicio) === start &&
                        Number(c.id_fim) === end &&
                        c.dia_semana === day
                    )
            );
            saveDB(db);
            return {
                status: 200,
                body: { success: true, message: "Aula removida com sucesso." },
            };
        }

        if (cleanUrl === "alter-class") {
            const email = data?.email;
            const start = Number(data?.id_inicio);
            const end = Number(data?.id_fim);
            const day = data?.dia_semana;
            const active = Number(data?.ativo);
            db.classes.forEach((c) => {
                if (
                    c.email === email &&
                    Number(c.id_inicio) === start &&
                    Number(c.id_fim) === end &&
                    c.dia_semana === day
                ) {
                    c.ativo = active;
                }
            });
            saveDB(db);
            return {
                status: 200,
                body: { success: true, message: "Aula alterada com sucesso." },
            };
        }

        if (cleanUrl === "alter-occupation") {
            const email = data?.email;
            const ocupation = data?.ocupation;
            db.users.forEach((u) => {
                if (u.email === email) {
                    u.ocupacao = ocupation;
                }
            });
            saveDB(db);
            return {
                status: 200,
                body: { success: true, message: "Ocupação atualizada com sucesso." },
            };
        }

        if (cleanUrl === "schedule") {
            const email = data?.email;
            const pcId = Number(data?.pcId);
            const start = Number(data?.start);
            const end = Number(data?.end);
            const date = String(data?.date || getFormattedDate(true));
            db.schedules.push({
                id_Agendamento: db.nextScheduleId++,
                computador_patrimonio: pcId,
                email: email,
                id_inicio: start,
                id_fim: end,
                data: date,
            });
            saveDB(db);
            return {
                status: 200,
                body: {
                    success: true,
                    message: `Computador ${pcId} agendado para o horario de id ${start} até ${end} no dia ${date} pelo usuário ${email}`,
                },
            };
        }

        if (cleanUrl === "schedule-class") {
            const email = data?.email;
            const start = Number(data?.start);
            const end = Number(data?.end);
            const day = data?.date;
            const desc = data?.description || "Aula";
            const validDays = [
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
            ];
            if (!validDays.includes(day)) {
                return {
                    status: 500,
                    body: { success: false, message: "Dia inválido." },
                };
            }
            db.classes.push({
                email: email,
                id_inicio: start,
                id_fim: end,
                dia_semana: day,
                descricao: desc,
                ativo: 1,
            });
            saveDB(db);
            return {
                status: 200,
                body: {
                    success: true,
                    message: `Aula agendada para o horario de id ${start} até ${end} no dia ${day} pelo usuário ${email}`,
                },
            };
        }

        if (cleanUrl === "update") {
            if (data?.password === "admin" || data?.password === "ufrrj" || data?.password === "1234") {
                return {
                    status: 200,
                    body: {
                        success: true,
                        message: "Atualização realizada com sucesso (Simulação Git Pull).",
                    },
                };
            }
            return {
                status: 200,
                body: {
                    success: false,
                    message: 'Senha incorreta. (Dica na demo: tente "admin" ou "ufrrj")',
                },
            };
        }

        return null;
    }

    // Override jQuery $.ajax and $.getJSON
    if (window.jQuery) {
        const origAjax = $.ajax;
        $.ajax = function (options) {
            const res = handleRoute(options.url, options.type || "GET", options.data);
            if (res) {
                const d = $.Deferred();
                if (res.status >= 200 && res.status < 300) {
                    if (typeof options.success === "function") {
                        options.success(res.body);
                    }
                    d.resolve(res.body);
                } else {
                    const errObj = { status: res.status, responseJSON: res.body };
                    if (typeof options.error === "function") {
                        options.error(errObj);
                    }
                    d.reject(errObj);
                }
                return d.promise();
            }
            return origAjax.apply(this, arguments);
        };

        $.getJSON = function (url, dataOrCallback, maybeCallback) {
            let data = {};
            let callback = dataOrCallback;
            if (typeof dataOrCallback !== "function") {
                data = dataOrCallback;
                callback = maybeCallback;
            }
            return $.ajax({
                url: url,
                type: "GET",
                data: data,
                success: callback,
            });
        };
    }

    // Helper for demo quick login / switching
    window.demoLoginAs = function (email, name, ocupacao, redirectPage) {
        sessionStorage.removeItem("explicit_logout");
        const db = loadDB();
        const existing = db.users.find((u) => u.email === email);
        if (!existing) {
            db.users.push({ email: email, ocupacao: ocupacao || "Aluno" });
        } else if (ocupacao) {
            existing.ocupacao = ocupacao;
        }
        saveDB(db);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        localStorage.setItem("time", String(new Date().getTime()));
        window.location.href = redirectPage || "agendamento.html";
    };

    window.demoResetDB = function () {
        localStorage.removeItem(DB_KEY);
        loadDB();
        window.location.reload();
    };

    // Inject floating account-switcher badge at top-right of all pages
    window.addEventListener("DOMContentLoaded", function () {
        // Intercept logout() so it sets explicit_logout
        const origLogout = window.logout;
        window.logout = function () {
            sessionStorage.setItem("explicit_logout", "1");
            if (typeof origLogout === "function") origLogout();
        };

        const curEmail = localStorage.getItem("email");
        const db = loadDB();
        const curUser = db.users.find((u) => u.email === curEmail);
        const roleLabel = curUser ? curUser.ocupacao : "Visitante";

        const badge = document.createElement("div");
        badge.id = "demo-switcher-badge";
        badge.style.cssText =
            "position:fixed;bottom:16px;right:16px;z-index:9999;background:rgba(20,24,29,0.96);color:#fff;padding:10px 14px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.35);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:12px;border:1px solid rgba(255,255,255,0.15);max-width:320px;";

        badge.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">
                <span style="font-weight:700;color:#8edb8e;">● Demo Interativa (SQLite Local)</span>
                <button onclick="demoResetDB()" title="Restaurar dados iniciais da demo" style="margin:0;padding:2px 6px;font-size:10px;background:#343a40;color:#ddd;border:1px solid #555;border-radius:4px;cursor:pointer;">Resetar DB</button>
            </div>
            <div style="margin-bottom:8px;color:#ccc;">
                Conta atual: <strong style="color:#fff;">${curEmail ? `${curEmail} (${roleLabel})` : "Desconectado"}</strong>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <button onclick="demoLoginAs('rafael@ufrrj.br','Rafael','Professor', window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/agendamento-lab/') ? 'agendamento.html' : window.location.pathname.split('/').pop())"
                    style="margin:0;padding:4px 8px;font-size:11px;border-radius:6px;border:none;cursor:pointer;font-weight:600;background:${curEmail === "rafael@ufrrj.br" ? "#28a745" : "#495057"};color:#fff;">
                    👨‍🏫 Prof. Rafael (Admin)
                </button>
                <button onclick="demoLoginAs('helcio@ufrrj.br','Helcio','Aluno', (window.location.pathname.endsWith('admin.html') || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/agendamento-lab/')) ? 'agendamento.html' : window.location.pathname.split('/').pop())"
                    style="margin:0;padding:4px 8px;font-size:11px;border-radius:6px;border:none;cursor:pointer;font-weight:600;background:${curEmail === "helcio@ufrrj.br" ? "#007bff" : "#495057"};color:#fff;">
                    🎓 Aluno Helcio
                </button>
            </div>
        `;
        document.body.appendChild(badge);
    });
})();
