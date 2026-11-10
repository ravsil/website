// ============================================================================
// BDV e-commerce© — Client-Side SPA & Mock Backend Engine (AdonisJS v6 + Lucid)
// ============================================================================

const STORAGE_KEY = "bdv_ecommerce_db_v1";

const INITIAL_PRODUCTS = [
  {
    id: 16,
    name: "Jaqueta Bomber Oversized Preta",
    category: "Jaquetas & Casacos",
    price: 349.90,
    stock: 14,
    description: "Jaqueta bomber confeccionada em tecido técnico estruturado resistente à água. Gola canelada, fechamento frontal por zíper metálico e bolsos laterais com lapela.",
    images: [
      { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 15,
    name: "Sobretudo Lã Batida Minimalista",
    category: "Jaquetas & Casacos",
    price: 589.00,
    stock: 8,
    description: "Casaco longo de corte reto em mistura de lã macia. Lapela clássica entalhada, mangas compridas e forro acetinado interno para máximo conforto térmico.",
    images: [
      { url: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 14,
    name: "Camisa Linho Puro Off-White",
    category: "Camisas",
    price: 219.90,
    stock: 28,
    description: "Camisa relaxada 100% linho natural respirável. Colarinho italiano, abotoamento frontal em madrepérola e caimento leve ideal para meia-estação.",
    images: [
      { url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 13,
    name: "Vestido Midi Cetim Noir",
    category: "Vestidos",
    price: 299.90,
    stock: 19,
    description: "Vestido midi fluido com acabamento acetinado de toque sedoso. Decote drapeado elegante e alças finas ajustáveis com corte enviesado.",
    images: [
      { url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 12,
    name: "Calça Alfaiataria Wide Leg Grafite",
    category: "Calças",
    price: 269.00,
    stock: 22,
    description: "Calça de cintura alta com pregas frontais duplas e perna ampla fluida. Fechamento por colchete oculto e tecido encorpado de viscose.",
    images: [
      { url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 11,
    name: "Tênis Couro Urbano Monochrome",
    category: "Calçados",
    price: 389.90,
    stock: 16,
    description: "Sneaker casual minimalista em couro legítimo fosco com solado caixa alta costurado em borracha vulcanizada e palmilha anatômica.",
    images: [
      { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 10,
    name: "Blazer Estruturado Cropped",
    category: "Jaquetas & Casacos",
    price: 429.00,
    stock: 11,
    description: "Blazer de alfaiataria contemporânea com ombreiras sutis, corte levemente curto e abotoamento duplo frontal em tom ônix.",
    images: [
      { url: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 9,
    name: "Camiseta Heavyweight Boxy Fit",
    category: "Camisas",
    price: 129.90,
    stock: 64,
    description: "Camiseta em algodão penteado de alta gramatura (280g/m²). Modelagem boxy ampla, gola ribana de 2,5cm que não deforma.",
    images: [
      { url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 8,
    name: "Jaqueta Jeans Vintage Estonada",
    category: "Jaquetas & Casacos",
    price: 319.00,
    stock: 18,
    description: "Jaqueta trucker em denim 100% algodão pesado com lavagem estonada autêntica, costuras contrastantes e botões de cobre envelhecido.",
    images: [
      { url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 7,
    name: "Calça Cargo Utilitária Sarja",
    category: "Calças",
    price: 249.90,
    stock: 31,
    description: "Calça cargo em sarja peletizada de alta durabilidade. Possui seis bolsos funcionais com fole, ajuste na barra e corte reto.",
    images: [
      { url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 6,
    name: "Suéter Tricô Gola Alta Merino",
    category: "Camisas",
    price: 279.00,
    stock: 25,
    description: "Suéter de malha fina em lã merino selecionada. Toque ultra macio, punhos canelados e isolamento térmico leve sem volume excessivo.",
    images: [
      { url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 5,
    name: "Vestido Tricô Canelado Outono",
    category: "Vestidos",
    price: 259.90,
    stock: 15,
    description: "Vestido de manga longa em tricô canelado de elasticidade confortável, modelagem ajustada que valoriza a silhueta e fenda lateral.",
    images: [
      { url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 4,
    name: "Bota Chelsea Couro Preta",
    category: "Calçados",
    price: 459.00,
    stock: 9,
    description: "Bota Chelsea clássica em couro bovino polido, elásticos laterais reforçados, puxador traseiro em gorgurão e solado tratorado antiderrapante.",
    images: [
      { url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 3,
    name: "Camisa Social Oxford Slim",
    category: "Camisas",
    price: 189.90,
    stock: 42,
    description: "Camisa em tecido Oxford de algodão encorpado. Colarinho button-down clássico, corte slim levemente acinturado e fácil passadoria.",
    images: [
      { url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 2,
    name: "Calça Jeans Raw Denim Selvedge",
    category: "Calças",
    price: 329.90,
    stock: 20,
    description: "Jeans corte reto em denim índigo escuro 13oz sem lavagem química. Cinco bolsos tradicionais, rebites metálicos e costura reforçada.",
    images: [
      { url: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    id: 1,
    name: "Trench Coat Impermeável Clássico",
    category: "Jaquetas & Casacos",
    price: 649.00,
    stock: 6,
    description: "Trench coat duplo abotoamento em gabardine de algodão repelente à água. Acompanha cinto com fivela forrada e ajuste nos punhos.",
    images: [
      { url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80" },
      { url: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=80" }
    ]
  }
];

const INITIAL_USERS = [
  {
    id: 1,
    username: "Admin BDV",
    email: "admin@bdv.com",
    password: "admin",
    age: 28,
    isAdmin: true,
    pfp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 2,
    username: "Rafael Silva",
    email: "rafael@bdv.com",
    password: "123",
    age: 22,
    isAdmin: false,
    pfp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 3,
    username: "Marina Costa",
    email: "marina@bdv.com",
    password: "123",
    age: 25,
    isAdmin: false,
    pfp: null
  }
];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const init = {
        products: INITIAL_PRODUCTS,
        users: INITIAL_USERS,
        currentUser: null,
        userCarts: {
          "2": [{ id: 101, productId: 16, quantity: 1 }]
        },
        nextProductId: 17,
        nextUserId: 4,
        nextCartItemId: 102
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
      return init;
    }
    return JSON.parse(raw);
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
    return loadState();
  }
}

function saveState(st) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
}

let state = loadState();
let currentSearchQuery = "";
let currentCategory = "Todos";
let currentPage = 1;
const PAGE_LIMIT = 12;
let galleryImages = [];
let galleryIndex = 0;

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatBRL(val) {
  return Number(val || 0).toFixed(2);
}

function getGuestCart() {
  try {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  } catch (e) {
    return [];
  }
}

function saveGuestCart(items) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

function getCartCount() {
  if (state.currentUser) {
    const items = state.userCarts[String(state.currentUser.id)] || [];
    return items.reduce((acc, it) => acc + Number(it.quantity || 0), 0);
  } else {
    const items = getGuestCart();
    return items.reduce((acc, it) => acc + Number(it.quantity || 0), 0);
  }
}

function showFlash(type, message) {
  const container = document.getElementById("flash-container");
  if (!container) return;
  const bg =
    type === "error"
      ? "bg-red-600 text-white"
      : type === "cart_merged"
      ? "bg-indigo-900 text-white"
      : "bg-black text-white";
  container.innerHTML = `
    <div class="${bg} px-4 py-3 shadow-bottom flex items-center justify-between text-sm animate-fade-in-start">
      <div class="flex items-center gap-2">
        <span class="font-bold uppercase text-xs px-2 py-0.5 bg-white/20 rounded">${
          type === "error" ? "Erro" : type === "cart_merged" ? "Carrinho Sincronizado" : "Aviso"
        }</span>
        <span>${escapeHtml(message)}</span>
      </div>
      <button onclick="document.getElementById('flash-container').innerHTML=''" class="text-white/80 hover:text-white font-bold ml-4">&times;</button>
    </div>
  `;
}

// Merge Guest Cart from localStorage ('cartItems') into authenticated user's cart
// Exact replica of UsersController.mergeGuestCart + flashMessages.get('cart_merged')
function mergeGuestCartIntoUser(user) {
  const guestItems = getGuestCart();
  if (!Array.isArray(guestItems) || guestItems.length === 0) return false;

  const uid = String(user.id);
  if (!state.userCarts[uid]) state.userCarts[uid] = [];

  let mergedCount = 0;
  for (const it of guestItems) {
    const product = state.products.find((p) => p.id === Number(it.id));
    if (!product) continue;
    let qty = Number(it.quantity || 1);
    if (isNaN(qty) || qty < 1) qty = 1;
    if (product.stock < qty) {
      qty = Number(product.stock);
      if (qty <= 0) continue;
    }

    const existing = state.userCarts[uid].find((c) => c.productId === product.id);
    if (existing) {
      existing.quantity = Math.min(product.stock, Number(existing.quantity) + qty);
    } else {
      state.userCarts[uid].push({
        id: state.nextCartItemId++,
        productId: product.id,
        quantity: qty
      });
    }
    mergedCount += qty;
  }

  // Clear guestCart from localStorage just like app.edge flashMessages.get('cart_merged')
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartTotal");
  saveState(state);
  return mergedCount > 0;
}

function cartSvgHtml(classes = "w-6 h-6") {
  return `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="${classes}" fill="currentColor">
    <circle cx="16.5" cy="18.5" r="1.5"/>
    <circle cx="9.5" cy="18.5" r="1.5"/>
    <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
  </svg>`;
}

function renderHeader() {
  const right = document.getElementById("header-right");
  if (!right) return;

  const count = getCartCount();
  const countBadge =
    count > 0
      ? `<span class=" -top-1.5 -right-1.5 bg-white text-black text-[11px] font-extrabold rounded-full w-5 h-5 flex items-center justify-center border border-black">${count}</span>`
      : "";

  if (state.currentUser) {
    const u = state.currentUser;
    const pfpHtml = u.pfp
      ? `<img class="w-8 h-8 rounded-full object-cover border border-zinc-600" src="${escapeHtml(u.pfp)}" alt="Profile">`
      : `<div class="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center font-bold text-xs border border-zinc-600">${escapeHtml(u.username.charAt(0).toUpperCase())}</div>`;

    right.innerHTML = `
      ${
        u.isAdmin
          ? `<a href="#/admin" onclick="navigate('/admin'); return false;" class="text-xs md:text-sm bg-white text-black font-semibold px-2.5 py-1 border border-white hover:bg-zinc-200 transition">Painel Admin</a>`
          : ""
      }
      <div class="flex items-center gap-2">
        ${pfpHtml}
        <span class="text-white text-xs md:text-sm leading-tight hidden sm:inline">
          Olá, <br> <b>${escapeHtml(u.username)}</b>
        </span>
      </div>
      <a href="#/cart" onclick="navigate('/cart'); return false;" class="relative flex items-center text-white p-1 hover:scale-105 transition" title="Seu Carrinho">
        ${cartSvgHtml("w-7 h-7 text-white")}
        ${countBadge}
      </a>
      <div class="relative">
        <button id="customDropdownButton" type="button" onclick="toggleUserDropdown(event)" class="text-white p-1 cursor-pointer flex items-center">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div id="customDropdownMenu" class="hidden origin-top-right absolute top-full right-0 mt-2 w-44 z-50 shadow-lg border border-zinc-700 bg-black text-white">
          <a href="#/profile/edit" onclick="navigate('/profile/edit'); return false;" class="block px-4 py-2.5 text-sm hover:bg-zinc-800 border-b border-zinc-800">Editar Perfil</a>
          ${
            u.isAdmin
              ? `<a href="#/admin" onclick="navigate('/admin'); return false;" class="block px-4 py-2.5 text-sm hover:bg-zinc-800 border-b border-zinc-800">Dashboard Admin</a>`
              : ""
          }
          <button onclick="logoutUser()" class="w-full text-left block px-4 py-2.5 text-sm hover:bg-zinc-800 text-red-300 cursor-pointer">Sair</button>
        </div>
      </div>
    `;
  } else {
    right.innerHTML = `
      <a href="#/login" onclick="navigate('/login'); return false;" class="text-white border border-white p-1 md:p-1.5 px-3 text-xs md:text-sm hover:bg-white hover:text-black transition">Entrar</a>
      <a href="#/cart" onclick="navigate('/cart'); return false;" class="relative flex items-center ml-1 p-1 text-white hover:scale-105 transition" title="Carrinho (Visitante)">
        ${cartSvgHtml("w-7 h-7 text-white")}
        ${countBadge}
      </a>
    `;
  }

  // Update bottom role switcher active state
  const gBtn = document.getElementById("badge-btn-guest");
  const cBtn = document.getElementById("badge-btn-customer");
  const aBtn = document.getElementById("badge-btn-admin");
  if (gBtn && cBtn && aBtn) {
    [gBtn, cBtn, aBtn].forEach((b) => (b.className = "px-2 py-1 rounded border border-zinc-600 hover:bg-zinc-800 transition cursor-pointer"));
    if (!state.currentUser) {
      gBtn.className = "px-2 py-1 rounded bg-white text-black font-bold border border-white cursor-pointer";
    } else if (state.currentUser.isAdmin) {
      aBtn.className = "px-2 py-1 rounded bg-white text-black font-bold border border-white cursor-pointer";
    } else {
      cBtn.className = "px-2 py-1 rounded bg-white text-black font-bold border border-white cursor-pointer";
    }
  }
}

window.toggleUserDropdown = function (ev) {
  ev.stopPropagation();
  const menu = document.getElementById("customDropdownMenu");
  if (menu) menu.classList.toggle("hidden");
};

window.addEventListener("click", () => {
  const menu = document.getElementById("customDropdownMenu");
  if (menu && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});

window.toggleMobileSearch = function () {
  const dd = document.getElementById("mobile-search-dropdown");
  if (dd) {
    dd.classList.toggle("hidden");
    const inp = document.getElementById("mobile-search-input");
    if (!dd.classList.contains("hidden") && inp) inp.focus();
  }
};

window.clearSearch = function () {
  currentSearchQuery = "";
  const desktopInput = document.getElementById("product-search");
  const mobileInput = document.getElementById("mobile-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  if (desktopInput) desktopInput.value = "";
  if (mobileInput) mobileInput.value = "";
  if (clearBtn) clearBtn.classList.add("hidden");
  currentPage = 1;
  navigate("/");
};

// ============================================================================
// Router & Views
// ============================================================================
window.navigate = function (path) {
  window.location.hash = path;
};

function handleRoute() {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  renderHeader();

  if (hash === "/" || hash.startsWith("/?page=")) {
    const pageMatch = hash.match(/page=(\d+)/);
    if (pageMatch) currentPage = parseInt(pageMatch[1], 10) || 1;
    renderHomeView();
    return;
  }

  const detailMatch = hash.match(/^\/products\/(\d+)\/detail$/);
  if (detailMatch) {
    renderProductDetailView(Number(detailMatch[1]));
    return;
  }

  if (hash === "/cart") {
    renderCartView();
    return;
  }

  if (hash === "/login") {
    renderLoginView();
    return;
  }

  if (hash === "/register") {
    renderRegisterView();
    return;
  }

  if (hash === "/profile/edit") {
    renderProfileView();
    return;
  }

  if (hash === "/admin") {
    renderAdminDashboardView();
    return;
  }

  if (hash === "/admin/products") {
    renderAdminProductsIndexView();
    return;
  }

  if (hash === "/admin/products/create") {
    renderAdminProductFormView(null);
    return;
  }

  const editProdMatch = hash.match(/^\/admin\/products\/(\d+)\/edit$/);
  if (editProdMatch) {
    renderAdminProductFormView(Number(editProdMatch[1]));
    return;
  }

  const showProdMatch = hash.match(/^\/admin\/products\/(\d+)$/);
  if (showProdMatch) {
    renderAdminProductShowView(Number(showProdMatch[1]));
    return;
  }

  if (hash === "/admin/users") {
    renderAdminUsersView();
    return;
  }

  if (hash.startsWith("/checkout/success")) {
    const sid = hash.split("session_id=")[1] || "cs_test_bdv_" + Date.now();
    renderCheckoutSuccessView(sid);
    return;
  }

  if (hash === "/checkout/cancel") {
    renderCheckoutCancelView();
    return;
  }

  renderHomeView();
}

window.addEventListener("hashchange", handleRoute);

// ============================================================================
// 1. HOME / CATALOG VIEW (matches home.edge + paginator.edge + search)
// ============================================================================
function getFilteredProducts() {
  const q = currentSearchQuery.trim().toLowerCase();
  return [...state.products]
    .sort((a, b) => b.id - a.id)
    .filter((p) => {
      const matchCat = currentCategory === "Todos" || p.category === currentCategory;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
}

window.setCategoryFilter = function (cat) {
  currentCategory = cat;
  currentPage = 1;
  renderHomeView();
};

window.goToPage = function (p) {
  currentPage = p;
  renderHomeView();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function renderHomeView() {
  const main = document.getElementById("app-main");
  const filtered = getFilteredProducts();
  const totalItems = filtered.length;
  const lastPage = Math.max(1, Math.ceil(totalItems / PAGE_LIMIT));
  if (currentPage > lastPage) currentPage = lastPage;

  const startIdx = (currentPage - 1) * PAGE_LIMIT;
  const paginated = filtered.slice(startIdx, startIdx + PAGE_LIMIT);

  const categories = ["Todos", "Jaquetas & Casacos", "Camisas", "Calças", "Vestidos", "Calçados"];
  const categoryBarHtml = categories
    .map(
      (cat) => `
      <button onclick="setCategoryFilter('${cat}')"
        class="px-3 py-1.5 text-xs md:text-sm border transition cursor-pointer ${
          currentCategory === cat
            ? "bg-black text-white border-black font-semibold shadow-xs"
            : "bg-white text-black border-zinc-300 hover:border-black"
        }">
        ${escapeHtml(cat)}
      </button>
    `
    )
    .join("");

  let cardsHtml = "";
  if (paginated.length === 0) {
    cardsHtml = `
      <div class="bg-white p-8 shadow-bottom text-black text-center mt-4">
        <p class="text-lg font-semibold">Nenhum produto encontrado.</p>
        <p class="text-xs text-gray-500 mt-1">Tente limpar o filtro de busca ou selecionar outra categoria.</p>
        <button onclick="clearSearch(); setCategoryFilter('Todos');" class="mt-4 px-4 py-2 bg-black text-white text-xs">Ver Todos os Produtos</button>
      </div>
    `;
  } else {
    const gridItems = paginated
      .map((product) => {
        const firstImage = product.images && product.images[0];
        const imgTag =
          firstImage && firstImage.url
            ? `<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="${escapeHtml(firstImage.url)}" alt="${escapeHtml(product.name)}">`
            : `<div class="text-gray-400">Sem imagem</div>`;

        const stockBadge =
          product.stock <= 0
            ? `<span class="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase">Esgotado</span>`
            : product.stock <= 8
            ? `<span class="absolute top-2 right-2 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5">Restam ${product.stock}</span>`
            : "";

        return `
          <div class="block bg-white overflow-hidden shadow-bottom hover:shadow-md transition duration-200 ease-in text-black group product-card flex flex-col justify-between">
            <div class="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden relative">
              <a href="#/products/${product.id}/detail" onclick="navigate('/products/${product.id}/detail'); return false;" class="w-full h-full block">
                ${imgTag}
              </a>
              ${stockBadge}
            </div>

            <div class="p-3 flex flex-col gap-2 flex-1 justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">${escapeHtml(product.category || "Coleção")}</span>
                <a href="#/products/${product.id}/detail" onclick="navigate('/products/${product.id}/detail'); return false;">
                  <h2 class="text-sm md:text-base font-semibold truncate hover:underline" title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</h2>
                </a>
              </div>

              <div class="flex items-center justify-between mt-1">
                <div class="text-lg font-bold text-gray-900">R$ ${formatBRL(product.price)}</div>
                <button onclick="quickAddToCart(${product.id}, 1)" class="p-1.5 hover:bg-gray-100 rounded transition cursor-pointer" title="Adicionar ao Carrinho">
                  ${cartSvgHtml("w-6 h-6 text-black")}
                </button>
              </div>

              <p class="text-xs text-gray-500 line-clamp-2">${escapeHtml(product.description)}</p>
            </div>
          </div>
        `;
      })
      .join("");

    cardsHtml = `
      <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        ${gridItems}
      </div>
    `;
  }

  // Paginator HTML matching paginator.edge
  let paginatorHtml = "";
  if (lastPage > 1) {
    let pageButtons = "";
    if (currentPage > 1) {
      pageButtons += `<button onclick="goToPage(${currentPage - 1})" class="w-8 h-8 flex items-center justify-center border bg-white rounded hover:bg-gray-100 transition mr-2 cursor-pointer">&lsaquo;</button>`;
    }
    for (let p = 1; p <= lastPage; p++) {
      pageButtons += `<button onclick="goToPage(${p})" class="w-8 h-8 flex items-center justify-center border rounded cursor-pointer ${
        p === currentPage ? "bg-black text-white border-black font-bold" : "bg-white hover:bg-gray-100"
      }">${p}</button>`;
    }
    if (currentPage < lastPage) {
      pageButtons += `<button onclick="goToPage(${currentPage + 1})" class="w-8 h-8 flex items-center justify-center border bg-white rounded hover:bg-gray-100 transition ml-2 cursor-pointer">&rsaquo;</button>`;
    }
    paginatorHtml = `
      <div id="paginator-wrapper" class="flex justify-center items-center gap-1 mt-6 select-none font-medium text-sm flex-wrap">
        ${pageButtons}
      </div>
      <div class="text-center text-xs text-gray-500 mt-2">
        Página ${currentPage} de ${lastPage} (${totalItems} produtos)
      </div>
    `;
  }

  main.innerHTML = `
    <div class="w-full max-w-7xl mx-auto p-4">
      <div class="flex flex-col gap-3">
        <h1 class="text-2xl md:text-4xl place-self-center font-semibold tracking-tight mt-1">Produtos</h1>
        <div class="flex flex-wrap justify-center gap-2 mt-1">
          ${categoryBarHtml}
        </div>
        ${
          currentSearchQuery
            ? `<div class="text-center text-xs text-zinc-600">Exibindo resultados para <b>"${escapeHtml(currentSearchQuery)}"</b> (${totalItems} encontrados)</div>`
            : ""
        }
        ${cardsHtml}
        ${paginatorHtml}
      </div>
    </div>
  `;
}

// ============================================================================
// 2. PRODUCT DETAIL VIEW (matches products/detail.edge + productintinput.edge)
// ============================================================================
window.changeDetailQty = function (productId, delta) {
  const el = document.getElementById(`quantity_${productId}`);
  if (!el) return;
  let v = parseInt(el.value || "1", 10) + delta;
  if (isNaN(v) || v < 1) v = 1;
  el.value = v;
};

window.selectDetailImage = function (idx) {
  galleryIndex = idx;
  const img = document.getElementById("mainProductImage");
  if (img && galleryImages[galleryIndex]) {
    img.src = galleryImages[galleryIndex];
  }
};

window.prevDetailImage = function () {
  if (!galleryImages.length) return;
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  selectDetailImage(galleryIndex);
};

window.nextDetailImage = function () {
  if (!galleryImages.length) return;
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  selectDetailImage(galleryIndex);
};

function renderProductDetailView(productId) {
  const main = document.getElementById("app-main");
  const product = state.products.find((p) => p.id === productId);

  if (!product) {
    main.innerHTML = `
      <div class="max-w-3xl mx-auto mt-8 bg-white p-6 rounded shadow text-center">
        <h2 class="text-xl font-semibold mb-2">Produto não encontrado</h2>
        <p class="text-sm text-gray-600 mb-4">O produto que você está tentando ver não existe ou foi removido.</p>
        <button onclick="navigate('/')" class="px-4 py-2 bg-black text-white">Voltar aos produtos</button>
      </div>
    `;
    return;
  }

  galleryImages = (product.images || []).map((i) => i.url);
  galleryIndex = 0;
  const mainUrl = galleryImages[0] || "";

  const thumbsHtml = galleryImages
    .map(
      (url, idx) => `
      <div class="w-20 h-20 rounded border border-zinc-300 hover:border-black overflow-hidden shrink-0 cursor-pointer" onclick="selectDetailImage(${idx})">
        <img src="${escapeHtml(url)}" class="w-full h-full object-cover thumb-image" alt="Thumbnail">
      </div>
    `
    )
    .join("");

  main.innerHTML = `
    <div class="bg-white p-6 text-black shadow-lg max-w-5xl w-full mx-4 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- image gallery -->
        <div class="md:col-span-7 flex flex-col gap-4">
          <div class="relative w-full h-[420px] md:h-[480px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
            <img id="mainProductImage" src="${escapeHtml(mainUrl)}" class="w-full h-full object-cover" alt="${escapeHtml(product.name)}">

            <button aria-label="Previous image" onclick="prevDetailImage()" class="inline-flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <button aria-label="Next image" onclick="nextDetailImage()" class="inline-flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div class="flex gap-3 overflow-x-auto py-2">
            ${thumbsHtml}
          </div>
        </div>

        <div class="md:col-span-5 flex flex-col gap-4 place-items-center md:place-items-start">
          <span class="text-xs uppercase tracking-widest text-zinc-500 font-bold">${escapeHtml(product.category || "BDV Collection")}</span>
          <h1 class="text-xl md:text-2xl font-bold leading-tight">${escapeHtml(product.name)}</h1>

          <div class="text-3xl text-yellow-600 font-bold">R$ ${formatBRL(product.price)}</div>

          <p class="text-sm text-gray-700 mt-2 leading-relaxed">${escapeHtml(product.description)}</p>

          <div class="mt-2 text-sm">
            <p><b>Estoque:</b> <span class="${product.stock > 0 ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}">${
              product.stock > 0 ? product.stock + " disponíveis" : "Esgotado"
            }</span></p>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <div class="flex items-center border border-zinc-400 overflow-hidden">
              <button type="button" aria-label="Diminuir quantidade" class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg cursor-pointer" onclick="changeDetailQty(${product.id}, -1)">-</button>
              <input id="quantity_${product.id}" type="number" name="quantity" value="1" min="1" class="w-16 text-center px-2 py-2 outline-none" />
              <button type="button" aria-label="Aumentar quantidade" class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg cursor-pointer" onclick="changeDetailQty(${product.id}, 1)">+</button>
            </div>

            <button onclick="addDetailProductToCart(${product.id})"
              ${product.stock <= 0 ? "disabled" : ""}
              class="text-center px-5 py-3 bg-black place-self-center shadow-sm shadow-zinc-600/50 hover:shadow-md hover:scale-[1.01] transition duration-150 ease-in text-white cursor-pointer disabled:opacity-40">
              <div class="t-underline">Adicionar ao Carrinho</div>
            </button>
          </div>

          <div class="mt-3 text-xs text-gray-600">
            <p>Compra segura • Devolução em 30 dias • Atendimento 24/7</p>
          </div>

          <div class="mt-4 flex gap-4">
            <a href="#/" onclick="navigate('/'); return false;" class="text-sm text-blue-600 hover:underline">&larr; Voltar ao Catálogo</a>
            ${
              state.currentUser && state.currentUser.isAdmin
                ? `<a href="#/admin/products/${product.id}" onclick="navigate('/admin/products/${product.id}'); return false;" class="text-sm text-zinc-700 font-semibold hover:underline">⚙ Gerenciar Estoque (Admin)</a>`
                : ""
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

window.addDetailProductToCart = function (productId) {
  const inp = document.getElementById(`quantity_${productId}`);
  let qty = parseInt(inp?.value || "1", 10);
  if (isNaN(qty) || qty < 1) qty = 1;
  quickAddToCart(productId, qty);
};

// ============================================================================
// 3. CART LOGIC & VIEW (Guest localStorage & Authenticated DB Cart)
// ============================================================================
window.quickAddToCart = function (productId, quantity = 1) {
  const product = state.products.find((p) => p.id === Number(productId));
  if (!product) {
    showFlash("error", "Produto não encontrado");
    return;
  }
  if (product.stock < quantity) {
    showFlash("error", `Quantidade indisponível no estoque para "${product.name}"`);
    return;
  }

  if (state.currentUser) {
    const uid = String(state.currentUser.id);
    if (!state.userCarts[uid]) state.userCarts[uid] = [];
    const existing = state.userCarts[uid].find((c) => c.productId === product.id);
    if (existing) {
      if (existing.quantity + quantity > product.stock) {
        showFlash("error", "Quantidade total no carrinho excede o estoque disponível");
        return;
      }
      existing.quantity += quantity;
    } else {
      state.userCarts[uid].push({
        id: state.nextCartItemId++,
        productId: product.id,
        quantity: quantity
      });
    }
    saveState(state);
    renderHeader();
    showFlash("success", `"${product.name}" adicionado ao seu carrinho!`);
  } else {
    // Guest cart stored in localStorage ('cartItems') just like home.edge / detail.edge
    const cartItems = getGuestCart();
    const existingIdx = cartItems.findIndex((i) => Number(i.id) === product.id);
    if (existingIdx !== -1) {
      cartItems[existingIdx].quantity += quantity;
    } else {
      cartItems.push({ id: product.id, quantity: quantity });
    }
    saveGuestCart(cartItems);
    renderHeader();
    showFlash("success", `"${product.name}" adicionado ao carrinho de visitante! (Faça login para mesclar automaticamente)`);
  }
};

window.updateCartItemQty = function (productId, newQty) {
  newQty = parseInt(newQty, 10);
  const product = state.products.find((p) => p.id === Number(productId));
  if (!product) return;

  if (newQty <= 0) {
    removeCartItem(productId);
    return;
  }

  if (newQty > product.stock) {
    showFlash("error", `Estoque máximo disponível para ${product.name}: ${product.stock} unidades.`);
    newQty = product.stock;
  }

  if (state.currentUser) {
    const uid = String(state.currentUser.id);
    const item = (state.userCarts[uid] || []).find((c) => c.productId === product.id);
    if (item) {
      item.quantity = newQty;
      saveState(state);
      showFlash("success", "Quantidade atualizada.");
    }
  } else {
    const items = getGuestCart();
    const idx = items.findIndex((i) => Number(i.id) === product.id);
    if (idx !== -1) {
      items[idx].quantity = newQty;
      saveGuestCart(items);
    }
  }
  renderHeader();
  renderCartView();
};

window.removeCartItem = function (productId) {
  if (state.currentUser) {
    const uid = String(state.currentUser.id);
    state.userCarts[uid] = (state.userCarts[uid] || []).filter((c) => c.productId !== Number(productId));
    saveState(state);
  } else {
    const items = getGuestCart().filter((i) => Number(i.id) !== Number(productId));
    saveGuestCart(items);
  }
  renderHeader();
  renderCartView();
};

function getResolvedCartItems() {
  if (state.currentUser) {
    const raw = state.userCarts[String(state.currentUser.id)] || [];
    return raw
      .map((item) => {
        const product = state.products.find((p) => p.id === Number(item.productId));
        return product ? { cartId: item.id, product, quantity: Number(item.quantity) } : null;
      })
      .filter(Boolean);
  } else {
    const raw = getGuestCart();
    return raw
      .map((item) => {
        const product = state.products.find((p) => p.id === Number(item.id));
        return product ? { cartId: item.id, product, quantity: Number(item.quantity) } : null;
      })
      .filter(Boolean);
  }
}

function renderCartView() {
  const main = document.getElementById("app-main");
  const resolved = getResolvedCartItems();
  const isGuest = !state.currentUser;

  let total = 0;
  resolved.forEach((it) => {
    total += Number(it.product.price) * it.quantity;
  });

  if (resolved.length === 0) {
    main.innerHTML = `
      <div class="bg-white p-6 text-black shadow-lg w-11/12 max-w-5xl mx-auto mt-6">
        <h2 class="text-2xl font-bold mb-6 border-b pb-3 text-center">Seu Carrinho</h2>
        <div class="py-10 text-center text-gray-500 text-lg">Seu carrinho está vazio.</div>
        <div class="text-center mt-2">
          <button onclick="navigate('/')" class="px-5 py-2.5 bg-black text-white text-sm cursor-pointer">Explorar Produtos</button>
        </div>
      </div>
    `;
    return;
  }

  const rowsHtml = resolved
    .map((item) => {
      const imgUrl = item.product.images?.[0]?.url || "";
      const subtotal = Number(item.product.price) * item.quantity;
      return `
        <tr class="hover:bg-gray-50 transition border-b border-gray-200">
          <td class="py-4 px-2 flex items-center gap-4">
            <img src="${escapeHtml(imgUrl)}" class="w-16 h-16 object-cover shadow-sm shrink-0" alt="${escapeHtml(item.product.name)}" />
            <div>
              <a href="#/products/${item.product.id}/detail" onclick="navigate('/products/${item.product.id}/detail'); return false;" class="font-medium hover:underline">${escapeHtml(item.product.name)}</a>
              <p class="text-xs text-gray-500">Estoque: ${item.product.stock} un.</p>
            </div>
          </td>
          <td class="py-4 px-2">R$ ${formatBRL(item.product.price)}</td>
          <td class="py-4 px-2">
            <div class="flex gap-2 items-center">
              <input id="cart_qty_${item.product.id}" type="number" min="1" max="${item.product.stock}" value="${item.quantity}"
                onchange="updateCartItemQty(${item.product.id}, this.value)"
                class="w-20 border border-gray-300 px-2 py-1 shadow-xs focus:border-black focus:outline-none" />
              <button onclick="updateCartItemQty(${item.product.id}, document.getElementById('cart_qty_${item.product.id}').value)"
                class="px-3 py-1 bg-blue-600 text-white text-xs md:text-sm shadow hover:bg-blue-700 transition transform hover:scale-105 cursor-pointer">
                Atualizar
              </button>
            </div>
          </td>
          <td class="py-4 px-2 font-medium">R$ ${formatBRL(subtotal)}</td>
          <td class="py-4 px-2 text-right">
            <button onclick="removeCartItem(${item.product.id})"
              class="px-3 py-1 bg-red-600 text-white text-xs md:text-sm shadow hover:bg-red-700 transition transform hover:scale-105 cursor-pointer">
              Remover
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  const guestBanner = isGuest
    ? `
      <div class="mb-4 bg-zinc-100 border-l-4 border-black p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm">
        <span>🛒 <b>Carrinho de Visitante (localStorage):</b> Ao entrar na sua conta, estes itens serão mesclados automaticamente via cookie <code>guestCart</code>!</span>
        <button onclick="navigate('/login')" class="px-3 py-1.5 bg-black text-white text-xs font-semibold shrink-0 cursor-pointer">Entrar &amp; Mesclar Carrinho</button>
      </div>
    `
    : "";

  const checkoutActionHtml = !isGuest
    ? `
      <div class="text-right mt-6">
        <button onclick="openStripeCheckout()" class="px-6 py-3 bg-black text-white text-base md:text-lg shadow transition transform hover:scale-105 cursor-pointer">
          Finalizar Compra (Stripe)
        </button>
      </div>
    `
    : `
      <div class="text-right mt-6">
        <button onclick="navigate('/login')" class="px-6 py-3 bg-black text-white text-base shadow transition transform hover:scale-105 cursor-pointer">
          Fazer Login para Finalizar Compra
        </button>
      </div>
    `;

  main.innerHTML = `
    <div class="bg-white p-6 text-black shadow-lg w-11/12 max-w-5xl mx-auto mt-6">
      <h2 class="text-2xl font-bold mb-6 border-b pb-3 text-center">Seu Carrinho</h2>
      ${guestBanner}
      <div class="overflow-x-auto">
        <table class="w-full table-auto text-left border-collapse">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="py-3 px-2 font-semibold">Produto</th>
              <th class="py-3 px-2 font-semibold">Preço</th>
              <th class="py-3 px-2 font-semibold">Qtd.</th>
              <th class="py-3 px-2 font-semibold">Subtotal</th>
              <th class="py-3 px-2"></th>
            </tr>
          </thead>
          <tbody class="divide-y">
            ${rowsHtml}
          </tbody>
        </table>
      </div>

      <div class="text-right mt-6">
        <strong class="text-xl font-semibold">Total: R$ ${formatBRL(total)}</strong>
      </div>

      ${checkoutActionHtml}
    </div>
  `;
}

// ============================================================================
// 4. STRIPE CHECKOUT MODAL & SUCCESS / CANCEL VIEWS (matches payment_controller.ts)
// ============================================================================
window.openStripeCheckout = function () {
  if (!state.currentUser) {
    showFlash("error", "Faça login para iniciar o checkout.");
    navigate("/login");
    return;
  }

  const items = getResolvedCartItems();
  if (!items.length) {
    showFlash("error", "Seu carrinho está vazio.");
    return;
  }

  let total = 0;
  let totalQty = 0;
  for (const item of items) {
    if (item.quantity > item.product.stock) {
      showFlash("error", `Quantidade insuficiente em estoque para ${item.product.name}`);
      return;
    }
    total += Number(item.product.price) * item.quantity;
    totalQty += item.quantity;
  }

  document.getElementById("stripe-items-summary").textContent = `${totalQty} item(ns) • Cliente: ${state.currentUser.username}`;
  document.getElementById("stripe-total-amount").textContent = `R$ ${formatBRL(total)}`;
  document.getElementById("stripe-email").value = state.currentUser.email;
  document.getElementById("stripe-modal").classList.remove("hidden");
};

window.closeStripeModal = function () {
  document.getElementById("stripe-modal").classList.add("hidden");
};

window.cancelStripeCheckout = function () {
  closeStripeModal();
  navigate("/checkout/cancel");
};

window.handleStripePayment = function (ev) {
  ev.preventDefault();
  if (!state.currentUser) return;

  const items = getResolvedCartItems();
  for (const item of items) {
    const prod = state.products.find((p) => p.id === item.product.id);
    if (!prod || prod.stock < item.quantity) {
      closeStripeModal();
      showFlash("error", `Estoque insuficiente para ${item.product.name}`);
      return;
    }
  }

  // Deduct stock and clear user's cart just like PaymentController.success()
  for (const item of items) {
    const prod = state.products.find((p) => p.id === item.product.id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.quantity);
    }
  }
  state.userCarts[String(state.currentUser.id)] = [];
  saveState(state);

  const sessionId = "cs_test_a1B2c3D4_" + Math.random().toString(36).substring(2, 10);
  closeStripeModal();
  renderHeader();
  showFlash("success", "Pagamento confirmado — estoque atualizado e carrinho limpo");
  navigate(`/checkout/success?session_id=${sessionId}`);
};

function renderCheckoutSuccessView(sessionId) {
  const main = document.getElementById("app-main");
  main.innerHTML = `
    <div class="bg-white p-8 text-black shadow-bottom w-11/12 max-w-2xl mx-auto mt-10 animate-fade-in-start">
      <div class="flex items-center gap-3 mb-3">
        <span class="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">✓</span>
        <h2 class="text-2xl font-bold">Pagamento realizado com sucesso</h2>
      </div>
      <p class="mt-2 text-gray-700">Obrigado pela sua compra! Seu pagamento foi processado via Stripe e o estoque dos produtos foi atualizado automaticamente.</p>
      <p class="mt-3 text-xs font-mono bg-gray-100 p-2 border border-gray-200 text-gray-600">Sessão Stripe: ${escapeHtml(sessionId)}</p>
      <div class="mt-6">
        <a href="#/" onclick="navigate('/'); return false;" class="inline-block px-5 py-2.5 bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition">Voltar ao início</a>
      </div>
    </div>
  `;
}

function renderCheckoutCancelView() {
  const main = document.getElementById("app-main");
  main.innerHTML = `
    <div class="bg-white p-8 text-black shadow-bottom w-11/12 max-w-2xl mx-auto mt-10 animate-fade-in-start">
      <h2 class="text-2xl font-bold text-red-600">Pagamento Cancelado</h2>
      <p class="mt-3 text-gray-700">A sessão de checkout do Stripe foi cancelada. Seus itens continuam salvos no carrinho.</p>
      <div class="mt-6 flex gap-3">
        <button onclick="navigate('/cart')" class="px-5 py-2.5 bg-black text-white text-sm cursor-pointer">Voltar ao Carrinho</button>
        <button onclick="navigate('/')" class="px-5 py-2.5 border border-black text-black text-sm cursor-pointer">Continuar Comprando</button>
      </div>
    </div>
  `;
}

// ============================================================================
// 5. AUTHENTICATION & PROFILE VIEWS (matches login.edge, create.edge, profile.edge)
// ============================================================================
function renderLoginView() {
  const main = document.getElementById("app-main");
  main.innerHTML = `
    <div class="w-full flex flex-col lg:flex-row min-h-[78vh] bg-gray-200">
      <div class="w-1/2 torto-wrap min-h-[78vh] animate-slide-in hidden lg:flex">
        <a href="#/" onclick="navigate('/'); return false;" class="bg-black torto w-full h-full flex">
          <p class="text-white place-self-start lg:text-2xl xl:text-3xl border-2 border-white p-2 px-4 mt-28 lg:ml-10 xl:ml-20">
            BDV e-commerce<sup>©</sup>
          </p>
        </a>
      </div>

      <div class="flex w-full lg:w-1/2 justify-center items-center flex-col p-4">
        <div class="p-6 bg-white text-black animate-fade-in-start shadow-bottom w-full max-w-md">
          <h2 class="text-xl font-bold mb-1">Entrar na Conta</h2>
          <p class="text-xs text-gray-500 mb-4">Use um dos acessos rápidos abaixo ou digite suas credenciais</p>

          <div class="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-gray-200">
            <button type="button" onclick="quickSwitchRole('customer')" class="p-2 text-xs bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-left cursor-pointer">
              <div class="font-bold">👤 Cliente Demo</div>
              <div class="text-gray-500 truncate">rafael@bdv.com</div>
            </button>
            <button type="button" onclick="quickSwitchRole('admin')" class="p-2 text-xs bg-zinc-900 hover:bg-black text-white border border-black text-left cursor-pointer">
              <div class="font-bold">🔑 Admin Demo</div>
              <div class="text-zinc-300 truncate">admin@bdv.com</div>
            </button>
          </div>

          <form onsubmit="submitLoginForm(event)" class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-semibold">E-mail</label>
              <input id="login-email" type="email" required value="rafael@bdv.com" placeholder="email ..."
                class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-semibold">Senha</label>
              <input id="login-password" type="password" required value="123" placeholder="senha ..."
                class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
            </div>
            <button type="submit" class="mt-2 text-center px-4 py-3 bg-black shadow-sm hover:scale-[1.01] transition text-white cursor-pointer">
              <div class="t-underline">Login</div>
            </button>
            <p class="place-self-center text-sm mt-2">
              Não possui uma conta?
              <a href="#/register" onclick="navigate('/register'); return false;" class="text-blue-600 hover:underline">Registre-se aqui</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  `;
}

window.submitLoginForm = function (ev) {
  ev.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const user = state.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    showFlash("error", "Email ou senha inválidos");
    return;
  }
  state.currentUser = user;
  const merged = mergeGuestCartIntoUser(user);
  saveState(state);
  renderHeader();
  if (merged) {
    showFlash("cart_merged", "Itens do seu carrinho de visitante foram mesclados à sua conta (cart_merged = 1)!");
  } else {
    showFlash("success", `Bem-vindo de volta, ${user.username}!`);
  }
  navigate("/");
};

function renderRegisterView() {
  const main = document.getElementById("app-main");
  main.innerHTML = `
    <div class="w-full flex flex-col lg:flex-row min-h-[78vh] bg-gray-200">
      <div class="w-1/2 torto-wrap min-h-[78vh] animate-slide-in hidden lg:flex">
        <a href="#/" onclick="navigate('/'); return false;" class="bg-black torto w-full h-full flex">
          <p class="text-white place-self-start lg:text-2xl xl:text-3xl border-2 border-white p-2 px-4 mt-28 lg:ml-10 xl:ml-20">
            BDV e-commerce<sup>©</sup>
          </p>
        </a>
      </div>

      <div class="flex w-full lg:w-1/2 justify-center items-center flex-col p-4">
        <div class="p-6 bg-white text-black animate-fade-in-start shadow-bottom w-full max-w-md">
          <h2 class="text-xl font-bold mb-3">Criar Conta</h2>
          <form onsubmit="submitRegisterForm(event)" class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-semibold">Nome do Usuário</label>
              <input id="reg-username" type="text" required placeholder="nome ..."
                class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-semibold">Idade</label>
              <input id="reg-age" type="number" required value="22" min="16" placeholder="idade ..."
                class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-semibold">E-mail</label>
              <input id="reg-email" type="email" required placeholder="email ..."
                class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-semibold">Senha</label>
              <input id="reg-password" type="password" required placeholder="senha ..."
                class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
            </div>
            <button type="submit" class="mt-2 text-center px-4 py-3 bg-black shadow-sm hover:scale-[1.01] transition text-white cursor-pointer">
              <div class="t-underline">Criar Usuário</div>
            </button>
            <p class="place-self-center text-sm mt-2">
              Já possui uma conta?
              <a href="#/login" onclick="navigate('/login'); return false;" class="text-blue-600 hover:underline">Faça login aqui</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  `;
}

window.submitRegisterForm = function (ev) {
  ev.preventDefault();
  const username = document.getElementById("reg-username").value.trim();
  const age = Number(document.getElementById("reg-age").value || 20);
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;

  if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    showFlash("error", "Email já cadastrado");
    return;
  }

  const newUser = {
    id: state.nextUserId++,
    username,
    email,
    password,
    age,
    isAdmin: false,
    pfp: null
  };
  state.users.push(newUser);
  state.currentUser = newUser;
  const merged = mergeGuestCartIntoUser(newUser);
  saveState(state);
  renderHeader();
  if (merged) {
    showFlash("cart_merged", "Conta criada e carrinho de visitante sincronizado automaticamente!");
  } else {
    showFlash("success", "Conta criada e logado com sucesso!");
  }
  navigate("/");
};

function renderProfileView() {
  if (!state.currentUser) {
    navigate("/login");
    return;
  }
  const u = state.currentUser;
  const main = document.getElementById("app-main");
  main.innerHTML = `
    <div class="flex w-full justify-center">
      <div class="place-self-center m-6 p-6 bg-white text-black shadow-bottom w-11/12 max-w-lg">
        <h1 class="text-2xl font-bold mb-4">Editar Perfil</h1>
        ${
          u.pfp
            ? `<div class="mb-4"><p class="font-bold mb-2">Foto Atual</p><img class="w-20 h-20 rounded-full object-cover border" src="${escapeHtml(u.pfp)}" alt="Profile"></div>`
            : ""
        }
        <form onsubmit="submitProfileForm(event)" class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Nome do Usuário</label>
            <input id="prof-username" type="text" required value="${escapeHtml(u.username)}"
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Idade</label>
            <input id="prof-age" type="number" required value="${escapeHtml(u.age || 22)}"
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">E-mail</label>
            <input id="prof-email" type="email" required value="${escapeHtml(u.email)}"
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">URL da Foto de Perfil (opcional)</label>
            <input id="prof-pfp" type="url" value="${escapeHtml(u.pfp || "")}" placeholder="https://images.unsplash.com/..."
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <button type="submit" class="text-center px-4 py-3 bg-black text-white shadow-sm hover:scale-[1.01] transition cursor-pointer">
            <div class="t-underline">Atualizar Perfil</div>
          </button>
        </form>
      </div>
    </div>
  `;
}

window.submitProfileForm = function (ev) {
  ev.preventDefault();
  if (!state.currentUser) return;
  const username = document.getElementById("prof-username").value.trim();
  const age = Number(document.getElementById("prof-age").value || 22);
  const email = document.getElementById("prof-email").value.trim();
  const pfp = document.getElementById("prof-pfp").value.trim() || null;

  state.currentUser.username = username;
  state.currentUser.age = age;
  state.currentUser.email = email;
  state.currentUser.pfp = pfp;

  const idx = state.users.findIndex((u) => u.id === state.currentUser.id);
  if (idx !== -1) state.users[idx] = { ...state.currentUser };
  saveState(state);
  renderHeader();
  showFlash("success", "Perfil atualizado com sucesso!");
  renderProfileView();
};

window.logoutUser = function () {
  state.currentUser = null;
  saveState(state);
  renderHeader();
  showFlash("success", "Você saiu da sua conta.");
  navigate("/login");
};

// ============================================================================
// 6. ADMIN VIEWS (matches admin.edge, products/index, products/create, products/show, users/index)
// ============================================================================
function ensureAdminAccess() {
  if (!state.currentUser || !state.currentUser.isAdmin) {
    showFlash("error", "Acesso restrito a administradores. Alternando automaticamente para conta Admin na demo!");
    const adminUser = state.users.find((u) => u.isAdmin) || INITIAL_USERS[0];
    state.currentUser = adminUser;
    saveState(state);
    renderHeader();
  }
}

function renderAdminDashboardView() {
  ensureAdminAccess();
  const main = document.getElementById("app-main");
  main.innerHTML = `
    <div class="w-full max-w-4xl mx-auto p-6 mt-8 flex flex-col items-center">
      <h1 class="text-2xl md:text-3xl font-bold mb-6">Painel de Administração — BDV e-commerce<sup>©</sup></h1>
      <div class="bg-white text-black flex flex-col gap-4 p-6 shadow-bottom w-full max-w-sm">
        <a href="#/admin/products/create" onclick="navigate('/admin/products/create'); return false;"
          class="bg-white text-black text-center border border-black p-3 shadow-sm shadow-zinc-600/50 md:text-lg hover:shadow-md hover:scale-[1.01] transition duration-150 ease-in font-medium">
          Cadastrar Produto
        </a>
        <a href="#/admin/users" onclick="navigate('/admin/users'); return false;"
          class="bg-white text-black text-center border border-black p-3 shadow-sm shadow-zinc-600/50 md:text-lg hover:shadow-md hover:scale-[1.01] transition duration-150 ease-in font-medium">
          Listar Usuários (${state.users.length})
        </a>
        <a href="#/admin/products" onclick="navigate('/admin/products'); return false;"
          class="bg-white text-black text-center border border-black p-3 shadow-sm shadow-zinc-600/50 md:text-lg hover:shadow-md hover:scale-[1.01] transition duration-150 ease-in font-medium">
          Listar &amp; Gerenciar Produtos (${state.products.length})
        </a>
      </div>
    </div>
  `;
}

function renderAdminProductsIndexView() {
  ensureAdminAccess();
  const main = document.getElementById("app-main");
  const sorted = [...state.products].sort((a, b) => b.id - a.id);

  const listHtml = sorted
    .map((product) => {
      const firstImg = product.images?.[0]?.url || "";
      return `
        <div class="flex flex-col gap-3 bg-white p-4 text-black shadow-bottom w-11/12 max-w-4xl">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <a href="#/admin/products/${product.id}" onclick="navigate('/admin/products/${product.id}'); return false;" class="flex items-center gap-4 hover:opacity-80 transition">
              <img class="w-16 h-16 object-cover border shrink-0" src="${escapeHtml(firstImg)}" alt="${escapeHtml(product.name)}">
              <div class="text-sm md:text-base">
                <p><b>Nome:</b> ${escapeHtml(product.name)}</p>
                <p><b>Preço:</b> R$ ${formatBRL(product.price)} • <b>Estoque:</b> <span class="font-bold ${product.stock > 0 ? "text-green-700" : "text-red-600"}">${product.stock} un.</span></p>
                <p class="text-xs text-gray-500 line-clamp-1">${escapeHtml(product.description)}</p>
              </div>
            </a>
            <div class="flex flex-wrap items-center gap-2 shrink-0">
              <button onclick="adjustStock(${product.id}, 1)" class="px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 cursor-pointer" title="StocksController.addStock">+1 Estoque</button>
              <button onclick="adjustStock(${product.id}, -1)" class="px-2.5 py-1 bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 cursor-pointer" title="StocksController.reduceStock">-1 Estoque</button>
              <a class="bg-yellow-500 text-white px-3 py-1 text-xs font-semibold shadow-xs" href="#/admin/products/${product.id}/edit" onclick="navigate('/admin/products/${product.id}/edit'); return false;">Editar</a>
              <button onclick="deleteProductAdmin(${product.id})" class="text-white bg-black py-1 px-3 text-xs font-semibold shadow-xs cursor-pointer">deletar</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  main.innerHTML = `
    <div class="flex flex-col gap-4 w-full items-center mt-6">
      <div class="w-11/12 max-w-4xl flex items-center justify-between">
        <h1 class="text-xl md:text-3xl font-bold">Products (Admin)</h1>
        <div class="flex gap-2">
          <button onclick="navigate('/admin/products/create')" class="px-4 py-2 bg-black text-white text-xs md:text-sm font-semibold cursor-pointer">+ Cadastrar Produto</button>
          <button onclick="navigate('/admin')" class="px-4 py-2 border border-black text-black bg-white text-xs md:text-sm cursor-pointer">Voltar</button>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-center justify-center w-full">
        ${listHtml}
      </div>
    </div>
  `;
}

window.adjustStock = function (productId, delta, rerenderShow = false) {
  const prod = state.products.find((p) => p.id === Number(productId));
  if (!prod) return;
  prod.stock = Math.max(0, Number(prod.stock) + delta);
  saveState(state);
  if (rerenderShow) {
    renderAdminProductShowView(productId);
  } else {
    renderAdminProductsIndexView();
  }
};

window.deleteProductAdmin = function (productId) {
  state.products = state.products.filter((p) => p.id !== Number(productId));
  saveState(state);
  showFlash("success", "Produto removido com sucesso.");
  renderAdminProductsIndexView();
};

function renderAdminProductShowView(productId) {
  ensureAdminAccess();
  const main = document.getElementById("app-main");
  const product = state.products.find((p) => p.id === Number(productId));
  if (!product) {
    navigate("/admin/products");
    return;
  }

  const firstImg = product.images?.[0]?.url || "";
  main.innerHTML = `
    <div class="max-w-4xl w-11/12 mx-auto bg-white rounded-lg p-6 shadow-md text-gray-900 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-1">
          <div class="rounded overflow-hidden border">
            <img src="${escapeHtml(firstImg)}" class="w-full h-64 object-cover" alt="${escapeHtml(product.name)}">
          </div>
        </div>

        <div class="md:col-span-2">
          <h2 class="text-2xl font-semibold mb-2">${escapeHtml(product.name)}</h2>
          <p class="text-lg text-gray-700 mb-4"><span class="font-medium">Preço:</span> R$ ${formatBRL(product.price)}</p>
          <p class="text-sm text-gray-600 mb-4"><span class="font-medium">Descrição:</span> ${escapeHtml(product.description)}</p>
          <p class="mb-4"><span class="font-medium">Estoque:</span> <span class="inline-block ml-2 px-3 py-1 bg-gray-100 rounded font-bold">${product.stock}</span></p>

          <div class="flex flex-wrap gap-3 mt-6">
            <a href="#/admin/products/${product.id}/edit" onclick="navigate('/admin/products/${product.id}/edit'); return false;" class="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Editar</a>
            <a href="#/admin/products" onclick="navigate('/admin/products'); return false;" class="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Voltar</a>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <button onclick="adjustStock(${product.id}, 1, true)" class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
              Adicionar 1 ao Estoque
            </button>
            <button onclick="adjustStock(${product.id}, -1, true)" class="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer">
              Reduzir 1 do Estoque
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminProductFormView(productId) {
  ensureAdminAccess();
  const main = document.getElementById("app-main");
  const product = productId ? state.products.find((p) => p.id === productId) : null;

  main.innerHTML = `
    <div class="flex w-full justify-center">
      <div class="place-self-center m-8 p-6 bg-white text-black shadow-bottom w-11/12 max-w-lg">
        <h2 class="text-xl font-bold mb-4">${product ? "Editar Produto" : "Cadastrar Novo Produto"}</h2>
        <form onsubmit="submitAdminProductForm(event, ${product ? product.id : "null"})" class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Nome</label>
            <input id="prod-name" type="text" required value="${escapeHtml(product?.name || "")}" placeholder="nome ..."
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Categoria</label>
            <select id="prod-category" class="p-2 text-black bg-gray-100 border-2 focus:outline-none">
              ${["Jaquetas & Casacos", "Camisas", "Calças", "Vestidos", "Calçados"]
                .map(
                  (c) => `<option value="${c}" ${product?.category === c ? "selected" : ""}>${c}</option>`
                )
                .join("")}
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Preço (R$)</label>
            <input id="prod-price" type="number" step="0.01" required value="${escapeHtml(product?.price || "199.90")}" placeholder="preço ..."
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Descrição</label>
            <textarea id="prod-desc" rows="3" required placeholder="descrição ..."
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none">${escapeHtml(product?.description || "")}</textarea>
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Estoque</label>
            <input id="prod-stock" type="number" required value="${escapeHtml(product?.stock ?? 15)}" placeholder="estoque ..."
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">URL da Imagem Principal</label>
            <input id="prod-img" type="url" required value="${escapeHtml(product?.images?.[0]?.url || "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80")}"
              class="p-2 text-black bg-gray-100 border-2 inset-shadow-xs focus:outline-none" />
          </div>
          <div class="flex gap-2 mt-2">
            <button type="submit" class="text-center px-5 py-3 bg-black text-white shadow-sm hover:scale-[1.01] transition cursor-pointer">
              <div class="t-underline">${product ? "Atualizar Produto" : "Criar Produto"}</div>
            </button>
            <button type="button" onclick="navigate('/admin/products')" class="px-4 py-3 border border-black text-black cursor-pointer">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

window.submitAdminProductForm = function (ev, productId) {
  ev.preventDefault();
  const name = document.getElementById("prod-name").value.trim();
  const category = document.getElementById("prod-category").value;
  const price = parseFloat(document.getElementById("prod-price").value) || 0;
  const description = document.getElementById("prod-desc").value.trim();
  const stock = parseInt(document.getElementById("prod-stock").value, 10) || 0;
  const imgUrl = document.getElementById("prod-img").value.trim();

  if (productId) {
    const prod = state.products.find((p) => p.id === Number(productId));
    if (prod) {
      prod.name = name;
      prod.category = category;
      prod.price = price;
      prod.description = description;
      prod.stock = stock;
      if (imgUrl) prod.images = [{ url: imgUrl }, ...(prod.images.slice(1) || [])];
    }
    saveState(state);
    showFlash("success", "Produto atualizado com sucesso!");
    navigate(`/admin/products/${productId}`);
  } else {
    const newProd = {
      id: state.nextProductId++,
      name,
      category,
      price,
      description,
      stock,
      images: [{ url: imgUrl }]
    };
    state.products.push(newProd);
    saveState(state);
    showFlash("success", "Novo produto cadastrado no catálogo!");
    navigate(`/admin/products/${newProd.id}`);
  }
};

function renderAdminUsersView() {
  ensureAdminAccess();
  const main = document.getElementById("app-main");
  const rows = state.users
    .map(
      (u) => `
      <div class="flex flex-col gap-2 bg-white p-4 text-black shadow-bottom w-11/12 max-w-3xl">
        <div class="flex flex-row justify-between items-center">
          <p class="text-sm md:text-base">
            <b>Username:</b> ${escapeHtml(u.username)} ${u.isAdmin ? `<span class="ml-1 text-xs bg-black text-white px-2 py-0.5">ADMIN</span>` : ""}<br>
            <b>Email:</b> ${escapeHtml(u.email)} • <b>Idade:</b> ${escapeHtml(u.age || "-")}
          </p>
        </div>
      </div>
    `
    )
    .join("");

  main.innerHTML = `
    <div class="flex flex-col gap-4 w-full items-center mt-6">
      <div class="w-11/12 max-w-3xl flex items-center justify-between">
        <h1 class="text-xl md:text-3xl font-bold">Users</h1>
        <button onclick="navigate('/admin')" class="px-4 py-2 border border-black bg-white text-black text-xs md:text-sm cursor-pointer">Voltar ao Painel</button>
      </div>
      <div class="flex flex-col gap-3 items-center justify-center w-full">
        ${rows}
      </div>
    </div>
  `;
}

// ============================================================================
// Demo Role Switcher & Search Debounce Setup
// ============================================================================
window.quickSwitchRole = function (role) {
  if (role === "guest") {
    state.currentUser = null;
    saveState(state);
    renderHeader();
    showFlash("success", "Alternado para modo Visitante (Guest). Adicione produtos ao carrinho e depois faça login para testar a mesclagem automática!");
    navigate("/");
  } else if (role === "customer") {
    const cust = state.users.find((u) => !u.isAdmin) || INITIAL_USERS[1];
    state.currentUser = cust;
    const merged = mergeGuestCartIntoUser(cust);
    saveState(state);
    renderHeader();
    if (merged) {
      showFlash("cart_merged", `Logado como ${cust.username} — itens do carrinho de visitante foram mesclados (cart_merged)!`);
    } else {
      showFlash("success", `Logado como Cliente (${cust.username}).`);
    }
    navigate("/");
  } else if (role === "admin") {
    const adm = state.users.find((u) => u.isAdmin) || INITIAL_USERS[0];
    state.currentUser = adm;
    mergeGuestCartIntoUser(adm);
    saveState(state);
    renderHeader();
    showFlash("success", `Logado como Admin (${adm.email}). Painel administrativo liberado!`);
    navigate("/admin");
  }
};

window.resetEcommerceDB = function () {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartTotal");
  state = loadState();
  currentSearchQuery = "";
  currentCategory = "Todos";
  currentPage = 1;
  renderHeader();
  showFlash("success", "Banco de dados e estoques restaurados para o estado inicial.");
  navigate("/");
};

document.addEventListener("DOMContentLoaded", () => {
  const desktopSearch = document.getElementById("product-search");
  const mobileSearch = document.getElementById("mobile-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  let debounceTimer = null;

  function triggerDebouncedSearch(val) {
    if (clearBtn) {
      if (val.trim().length > 0) clearBtn.classList.remove("hidden");
      else clearBtn.classList.add("hidden");
    }
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentSearchQuery = val;
      currentPage = 1;
      if (window.location.hash && window.location.hash !== "#/") {
        navigate("/");
      } else {
        renderHomeView();
      }
    }, 250);
  }

  if (desktopSearch) {
    desktopSearch.addEventListener("input", (e) => {
      if (mobileSearch) mobileSearch.value = e.target.value;
      triggerDebouncedSearch(e.target.value);
    });
  }

  if (mobileSearch) {
    mobileSearch.addEventListener("input", (e) => {
      if (desktopSearch) desktopSearch.value = e.target.value;
      triggerDebouncedSearch(e.target.value);
    });
  }

  handleRoute();
});
