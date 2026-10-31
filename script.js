// ============================================
// GAZALA RESTAURANT — Complete JavaScript
// ============================================

// ============================================
// 1. MENU DATA  (with images)
// ============================================
const MENU = [
  // Starters
  { name: "Paneer Tikka",     price: 220, emoji: "🧆", cat: "starter",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80" },
  { name: "Chicken Tikka",    price: 280, emoji: "🍗", cat: "starter",
    img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80" },
  { name: "Veg Spring Roll",  price: 160, emoji: "🌯", cat: "starter",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { name: "Fish Amritsari",   price: 320, emoji: "🐟", cat: "starter",
    img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=80" },
  { name: "Hara Bhara Kabab", price: 190, emoji: "🥬", cat: "starter",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80" },

  // Main
  { name: "Chicken Biryani",  price: 250, emoji: "🍛", cat: "main",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80" },
  { name: "Mutton Korma",     price: 340, emoji: "🥘", cat: "main",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80" },
  { name: "Dal Makhani",      price: 200, emoji: "🍲", cat: "main",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80" },
  { name: "Veg Pulao",        price: 180, emoji: "🍚", cat: "main",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80" },
  { name: "Butter Chicken",   price: 320, emoji: "🍗", cat: "main",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80" },
  { name: "Paneer Butter Masala", price: 240, emoji: "🧀", cat: "main",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80" },
  { name: "Tandoori Chicken", price: 350, emoji: "🍖", cat: "main",
    img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80" },
  { name: "Fish Curry",       price: 300, emoji: "🐟", cat: "main",
    img: "https://images.unsplash.com/photo-1626500155523-6a5b1c2e9c9b?w=600&q=80" },

  // Breads
  { name: "Butter Naan",      price: 60,  emoji: "🫓", cat: "bread",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80" },
  { name: "Garlic Naan",      price: 80,  emoji: "🧄", cat: "bread",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80" },
  { name: "Tandoori Roti",    price: 40,  emoji: "🫓", cat: "bread",
    img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&q=80" },
  { name: "Laccha Paratha",   price: 70,  emoji: "🥖", cat: "bread",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80" },

  // Drinks
  { name: "Masala Chai",      price: 40,  emoji: "☕", cat: "drink",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80" },
  { name: "Mango Lassi",      price: 80,  emoji: "🥤", cat: "drink",
    img: "https://images.unsplash.com/photo-1571006682880-9e7c5f6a7c1a?w=600&q=80" },
  { name: "Fresh Lime Soda",  price: 60,  emoji: "🍋", cat: "drink",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80" },
  { name: "Cold Coffee",      price: 120, emoji: "🥛", cat: "drink",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" },
  { name: "Mineral Water",    price: 30,  emoji: "💧", cat: "drink",
    img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80" },

  // Desserts
  { name: "Gulab Jamun",      price: 90,  emoji: "🍮", cat: "dessert",
    img: "https://images.unsplash.com/photo-1601303516534-bf0b1b2f9c5f?w=600&q=80" },
  { name: "Rasmalai",         price: 110, emoji: "🍥", cat: "dessert",
    img: "https://images.unsplash.com/photo-1601303516534-bf0b1b2f9c5f?w=600&q=80" },
  { name: "Kulfi",            price: 80,  emoji: "🍦", cat: "dessert",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80" },
  { name: "Gajar Halwa",      price: 100, emoji: "🥕", cat: "dessert",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80" },
];

// ============================================
// 2. CART STATE (localStorage)
// ============================================
let cart = {};
let orderType = "dine";
let orderCount = 1000;

function loadCart() {
  try { cart = JSON.parse(localStorage.getItem("gazala_cart") || "{}"); }
  catch { cart = {}; }
}

function saveCart() {
  localStorage.setItem("gazala_cart", JSON.stringify(cart));
  updateCartBadge();
}

function getCartCount() {
  return Object.values(cart).reduce((s, q) => s + q, 0);
}

function getCartTotal() {
  let total = 0;
  for (const i in cart) total += MENU[i].price * cart[i];
  return total;
}

// ============================================
// 3. OPENING ANIMATION
// ============================================
function playOpening() {
  const opening = document.getElementById("opening");
  if (!opening) return;
  setTimeout(() => {
    opening.classList.add("open");
    setTimeout(() => opening.style.display = "none", 1300);
  }, 2200);
}

// ============================================
// 4. NAVBAR SCROLL
// ============================================
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });
}

// ============================================
// 5. ACTIVE NAV LINK
// ============================================
function setupNavLinks() {
  const links = document.querySelectorAll(".nav-link");
  const sections = [...links].map(l => document.querySelector(l.getAttribute("href")));

  window.addEventListener("scroll", () => {
    let current = 0;
    sections.forEach((sec, i) => {
      if (sec && window.scrollY >= sec.offsetTop - 150) current = i;
    });
    links.forEach((l, i) => l.classList.toggle("active", i === current));
  });
}

// ============================================
// 6. 3D HERO BACKGROUND (Three.js particles)
// ============================================
let heroAnimId;
function init3DHero() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Golden particle field
  const particlesGeo = new THREE.BufferGeometry();
  const count = 800;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const particlesMat = new THREE.PointsMaterial({
    color: 0xffd700,
    size: 0.08,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // Floating golden torus knots
  const knots = [];
  for (let i = 0; i < 3; i++) {
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.4, 0.12, 64, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffd700,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })
    );
    knot.position.set((i - 1) * 3.5, Math.random() * 2 - 1, -2 - i);
    scene.add(knot);
    knots.push(knot);
  }

  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
  });

  const clock = new THREE.Clock();
  function animate() {
    heroAnimId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    particles.rotation.y = t * 0.05 + mouseX * 0.3;
    particles.rotation.x = mouseY * 0.3;

    knots.forEach((k, i) => {
      k.rotation.x = t * (0.3 + i * 0.1);
      k.rotation.y = t * (0.4 + i * 0.1);
      k.position.y += Math.sin(t + i) * 0.002;
    });

    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ============================================
// 7. MENU RENDERING
// ============================================
let currentCat = "all";

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  const filtered = currentCat === "all" ? MENU : MENU.filter(m => m.cat === currentCat);

  grid.innerHTML = filtered.map(item => {
    const idx = MENU.indexOf(item);
    const qty = cart[idx] || 0;
    const vegBadge = item.veg
      ? '<span class="veg-badge veg">🟢</span>'
      : '<span class="veg-badge nonveg">🔴</span>';

    return `
      <div class="menu-card reveal">
        <div class="menu-card-image" style="background-image: url('${item.img}');">
          ${vegBadge}
        </div>
        <div class="menu-card-body">
          <h3>${item.name}</h3>
          <p class="cat-label">${item.cat}</p>
          <div class="menu-card-footer">
            <span class="price gold">₹${item.price}</span>
            <div class="qty-controls">
              <button class="qty-btn" ${qty === 0 ? "disabled" : ""} onclick="changeQty(${idx}, -1)">−</button>
              <span class="qty">${qty}</span>
              <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  setupReveal();
}

function changeQty(idx, delta) {
  cart[idx] = (cart[idx] || 0) + delta;
  if (cart[idx] <= 0) delete cart[idx];
  saveCart();
  renderMenu();
  renderOrderItems();
  renderCart();
  showToast(delta > 0 ? "Item added to cart ✓" : "Item removed");
}

// ============================================
// 8. CATEGORY TABS
// ============================================
function setupCategoryTabs() {
  document.querySelectorAll(".cat-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.cat;
      renderMenu();
    });
  });
}

// ============================================
// 9. 3D FOOD EXPERIENCE
// ============================================
function setupFood3D() {
  document.querySelectorAll(".food-pick").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".food-pick").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const emojiEl = document.getElementById("food3d-emoji");
      if (!emojiEl) return;

      emojiEl.style.transform = "scale(0) rotateY(180deg)";
      setTimeout(() => {
        emojiEl.textContent = btn.dataset.emoji;
        document.getElementById("food3d-name").textContent = btn.dataset.name;
        document.getElementById("food3d-price").textContent = btn.dataset.price;
        emojiEl.style.transform = "scale(1) rotateY(0deg)";
      }, 250);
    });
  });
}

// ============================================
// 10. ORDER ITEMS RENDER
// ============================================
function renderOrderItems() {
  const list = document.getElementById("order-items-list");
  if (!list) return;

  list.innerHTML = MENU.map((item, idx) => {
    const qty = cart[idx] || 0;
    return `
      <div class="order-item-row">
        <div class="order-item-emoji">${item.emoji}</div>
        <div class="order-item-info">
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-price">₹${item.price}</div>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" ${qty === 0 ? "disabled" : ""} onclick="changeQty(${idx}, -1)">−</button>
          <span class="qty">${qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================
// 11. CART RENDER
// ============================================
function renderCart() {
  const content = document.getElementById("cart-content");
  const summary = document.getElementById("cart-summary");
  if (!content || !summary) return;

  const keys = Object.keys(cart);

  if (keys.length === 0) {
    content.innerHTML = `<p class="empty-msg">🛒 Your cart is empty</p>`;
    summary.style.display = "none";
    return;
  }

  content.innerHTML = keys.map(idx => {
    const item = MENU[idx];
    return `
      <div class="cart-line">
        <span class="cart-line-name">${item.emoji} ${item.name} × ${cart[idx]}</span>
        <span class="cart-line-price">₹${item.price * cart[idx]}</span>
        <button class="remove-btn" onclick="removeFromCart(${idx})">✕</button>
      </div>
    `;
  }).join("");

  summary.style.display = "block";
  const subtotal = getCartTotal();
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  document.getElementById("cart-sub").textContent = subtotal;
  document.getElementById("cart-gst").textContent = gst;
  document.getElementById("cart-total").textContent = total;
}

function removeFromCart(idx) {
  delete cart[idx];
  saveCart();
  renderMenu();
  renderOrderItems();
  renderCart();
  showToast("Item removed");
}

// ============================================
// 12. ORDER TYPE TOGGLE
// ============================================
function setupOrderType() {
  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      orderType = btn.dataset.type;

      const tablePicker = document.getElementById("order-table");
      tablePicker.style.display = orderType === "dine" ? "block" : "none";
    });
  });
}

// ============================================
// 13. PLACE ORDER
// ============================================
function setupPlaceOrder() {
  const btn = document.getElementById("place-order-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (Object.keys(cart).length === 0) {
      showToast("Cart is empty!");
      return;
    }

    const subtotal = getCartTotal();
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;
    orderCount++;

    const orderId = "GA-" + String(orderCount).padStart(4, "0");
    const tableNum = document.getElementById("order-table").value;
    const orderTypeLabel = orderType === "dine" ? `Table ${tableNum}` : "Takeaway";

    const rItems = Object.keys(cart).map(idx => {
      const m = MENU[idx];
      return `<div class="r-line"><span>${cart[idx]}× ${m.name}</span><span>₹${m.price * cart[idx]}</span></div>`;
    }).join("");

    document.getElementById("r-order").textContent = orderId;
    document.getElementById("r-type").textContent = orderTypeLabel;
    document.getElementById("r-date").textContent = new Date().toLocaleString("en-IN");
    document.getElementById("r-items").innerHTML = rItems;
    document.getElementById("r-sub").textContent = subtotal;
    document.getElementById("r-gst").textContent = gst;
    document.getElementById("r-total").textContent = total;

    document.getElementById("receipt-modal").classList.remove("hidden");
    document.body.classList.add("no-scroll");

    // Reset cart
    cart = {};
    saveCart();
    renderMenu();
    renderOrderItems();
    renderCart();
  });
}

// ============================================
// 14. CART BADGE UPDATE
// ============================================
function updateCartBadge() {
  const count = getCartCount();

  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = count;

  const floatBtn = document.getElementById("floating-cart");
  const floatCount = document.getElementById("floating-count");
  if (floatBtn && floatCount) {
    floatCount.textContent = count;
    floatBtn.classList.toggle("hidden", count === 0);
  }
}

// ============================================
// 15. SCROLL TO ORDER
// ============================================
function setupCartButton() {
  const navBtn = document.getElementById("open-cart-btn");
  const floatBtn = document.getElementById("floating-cart");

  [navBtn, floatBtn].forEach(btn => {
    if (!btn) return;
    btn.addEventListener("click", () => {
      document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ============================================
// 16. RECEIPT CLOSE
// ============================================
function setupReceiptClose() {
  const btn = document.getElementById("close-receipt");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.getElementById("receipt-modal").classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });
}

// ============================================
// 17. RESERVATION FORM
// ============================================
function setupReservation() {
  const form = document.getElementById("reserve-form");
  if (!form) return;

  // Min date = today
  const dateInput = document.getElementById("res-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("res-name").value;
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;
    const guests = document.getElementById("res-guests").value;

    showToast(`✅ Table reserved for ${name} on ${date} at ${time} (${guests} guests)`);
    form.reset();

    // Reset date
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
    }
  });
}

// ============================================
// 18. TOAST
// ============================================
let toastTimeout;
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ============================================
// 19. SCROLL REVEAL
// ============================================
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  items.forEach(el => observer.observe(el));
}

// Add reveal class to sections
function markRevealSections() {
  document.querySelectorAll(
    ".highlight-card, .menu-card, .review-card, .contact-card, .info-card, .gallery-item, .section-header"
  ).forEach(el => el.classList.add("reveal"));
}

// ============================================
// 20. INIT — Boot everything
// ============================================
function init() {
  loadCart();
  playOpening();
  setupNavbarScroll();
  setupNavLinks();
  init3DHero();
  setupCategoryTabs();
  setupFood3D();
  setupOrderType();
  setupPlaceOrder();
  setupCartButton();
  setupReceiptClose();
  setupReservation();

  renderMenu();
  renderOrderItems();
  renderCart();
  updateCartBadge();

  markRevealSections();
  setupReveal();
}

// Run when DOM ready
document.addEventListener("DOMContentLoaded", init);