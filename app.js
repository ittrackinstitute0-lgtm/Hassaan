/**
 * Apple Watches - E-Commerce & Interactive Watch Studio Engine
 */

// --- Global Configuration & Default State ---
const CONFIG = {
  defaultWhatsAppNumber: "15558675309", // Default merchant WhatsApp number (editable)
  currencySymbol: "$",
  salesTaxRate: 0.08, // 8% estimated tax
};

// --- Watch Catalog Database ---
const PRODUCTS = [
  {
    id: "ultra-2",
    title: "Apple Watch Ultra 2",
    collection: "ultra",
    badge: "Most Rugged",
    badgeType: "badge-orange",
    basePrice: 799,
    caseSize: "49mm",
    caseMaterial: "Titanium",
    defaultFinish: "natural-ti",
    availableFinishes: [
      { id: "natural-ti", name: "Natural Titanium", hex: "#c8c2b7" },
      { id: "black-ti", name: "Black Titanium", hex: "#2b2b2e" }
    ],
    defaultBand: "alpine-orange",
    availableBands: [
      { id: "alpine-orange", name: "Alpine Loop Orange", hex: "#ff6b00", style: "Alpine" },
      { id: "ocean-blue", name: "Ocean Band Deep Blue", hex: "#0066cc", style: "Ocean" },
      { id: "trail-black", name: "Trail Loop Black/Gray", hex: "#222222", style: "Trail" }
    ],
    specs: "49mm Aerospace Titanium • 3000 nits Always-On Retina • Up to 72h Battery • 100m Water & High-speed Water Sports",
    tagline: "The ultimate sports and adventure watch.",
    features: ["Dual-frequency GPS", "Depth gauge with water temp sensor", "Customizable Action button", "Siri on-device with Health query"]
  },
  {
    id: "series-10-jetblack",
    title: "Apple Watch Series 10",
    collection: "series10",
    badge: "Thinnest Ever",
    badgeType: "badge-blue",
    basePrice: 429,
    caseSize: "46mm",
    caseMaterial: "Polished Aluminum",
    defaultFinish: "jet-black",
    availableFinishes: [
      { id: "jet-black", name: "Jet Black", hex: "#0d0d0f" },
      { id: "rose-gold", name: "Rose Gold", hex: "#e8b4b8" },
      { id: "silver", name: "Silver", hex: "#e5e5ea" }
    ],
    defaultBand: "sport-midnight",
    availableBands: [
      { id: "sport-midnight", name: "Sport Band Midnight", hex: "#1c2430", style: "Sport" },
      { id: "milanese-gold", name: "Milanese Loop Gold", hex: "#d4af37", style: "Milanese" },
      { id: "braided-starlight", name: "Braided Solo Starlight", hex: "#e5dcd3", style: "Braided" }
    ],
    specs: "46mm or 42mm • Wide-Angle OLED Display • S10 SiP with 4-core Neural Engine • ECG & Sleep Apnea Notifications",
    tagline: "Thinstant classic. Our biggest display yet.",
    features: ["40% brighter wide-angle display", "Depth and water temperature sensors", "Faster 15-minute fast charging to 80%", "Sleep apnea tracking"]
  },
  {
    id: "series-10-rosegold",
    title: "Apple Watch Series 10 (Rose Gold)",
    collection: "series10",
    badge: "Popular Finish",
    badgeType: "badge-blue",
    basePrice: 399,
    caseSize: "42mm",
    caseMaterial: "Aluminum",
    defaultFinish: "rose-gold",
    availableFinishes: [
      { id: "rose-gold", name: "Rose Gold", hex: "#e8b4b8" },
      { id: "silver", name: "Silver", hex: "#e5e5ea" },
      { id: "jet-black", name: "Jet Black", hex: "#0d0d0f" }
    ],
    defaultBand: "sport-pink",
    availableBands: [
      { id: "sport-pink", name: "Sport Band Light Blush", hex: "#fbcfe8", style: "Sport" },
      { id: "braided-starlight", name: "Braided Solo Starlight", hex: "#e5dcd3", style: "Braided" },
      { id: "sport-midnight", name: "Sport Band Midnight", hex: "#1c2430", style: "Sport" }
    ],
    specs: "42mm Aluminum Case • Always-On Retina Display • Blood Oxygen & ECG • 50m Swimproof",
    tagline: "Elegant, powerful, and remarkably light.",
    features: ["Ultra-comfortable fit", "Full cycle tracking with temperature sensing", "Crash Detection & Fall Detection"]
  },
  {
    id: "watch-se",
    title: "Apple Watch SE (2nd Gen)",
    collection: "se",
    badge: "Best Value",
    badgeType: "badge-green",
    basePrice: 249,
    caseSize: "44mm",
    caseMaterial: "100% Recycled Aluminum",
    defaultFinish: "starlight",
    availableFinishes: [
      { id: "starlight", name: "Starlight", hex: "#e5dcd3" },
      { id: "midnight", name: "Midnight", hex: "#1a2332" },
      { id: "silver", name: "Silver", hex: "#e5e5ea" }
    ],
    defaultBand: "sport-starlight",
    availableBands: [
      { id: "sport-starlight", name: "Sport Band Starlight", hex: "#e5dcd3", style: "Sport" },
      { id: "sport-midnight", name: "Sport Band Midnight", hex: "#1a2332", style: "Sport" },
      { id: "ocean-blue", name: "Ocean Band Blue", hex: "#0066cc", style: "Ocean" }
    ],
    specs: "44mm Retina Display • S8 SiP • Heart Rate Notifications • Emergency SOS & Crash Detection",
    tagline: "Heavy on features. Light on price.",
    features: ["Water resistant 50 meters", "Activity rings and workout app", "Family Setup support", "Retina display up to 1000 nits"]
  },
  {
    id: "watch-hermes",
    title: "Apple Watch Hermès Grand H",
    collection: "hermes",
    badge: "Haute Couture",
    badgeType: "badge-orange",
    basePrice: 1299,
    caseSize: "46mm",
    caseMaterial: "Polished Stainless Steel",
    defaultFinish: "silver",
    availableFinishes: [
      { id: "silver", name: "Polished Silver", hex: "#f0f0f5" },
      { id: "jet-black", name: "Space Black", hex: "#111113" }
    ],
    defaultBand: "hermes-leather",
    availableBands: [
      { id: "hermes-leather", name: "Hermès Fauve Barenia Leather", hex: "#b46d38", style: "Hermès Leather" },
      { id: "hermes-kilim", name: "Hermès Kilim Single Tour Navy", hex: "#1e3a8a", style: "Kilim" },
      { id: "hermes-orange", name: "Hermès Signature Orange", hex: "#ff5e00", style: "Sport" }
    ],
    specs: "46mm Polished Stainless Steel • Sapphire Crystal Glass • Exclusive Hermès Watch Faces • Artisan Leather Band",
    tagline: "The ultimate synthesis of cutting-edge technology and Parisian craftsmanship.",
    features: ["Exclusive Hermès Maritime & Cape Cod faces", "Custom engraved Hermès caseback", "Premium presentation packaging"]
  },
  {
    id: "watch-nike",
    title: "Apple Watch Nike Series 10",
    collection: "nike",
    badge: "Athletic Edition",
    badgeType: "badge-blue",
    basePrice: 449,
    caseSize: "46mm",
    caseMaterial: "Matte Aluminum",
    defaultFinish: "jet-black",
    availableFinishes: [
      { id: "jet-black", name: "Jet Black", hex: "#0d0d0f" },
      { id: "silver", name: "Silver", hex: "#e5e5ea" }
    ],
    defaultBand: "nike-sport-band",
    availableBands: [
      { id: "nike-sport-band", name: "Nike Sport Band Pure Platinum/Black", hex: "#94a3b8", style: "Nike Perforated" },
      { id: "nike-volt", name: "Nike Sport Loop Volt/Black", hex: "#a3e635", style: "Nike Loop" },
      { id: "alpine-orange", name: "Nike Sport Loop Crimson", hex: "#ff453a", style: "Nike Loop" }
    ],
    specs: "46mm Aluminum • Nike Run Club Integration • Perforated Breathable Strap • Exclusive Nike Bounce & Globe Watch Faces",
    tagline: "Pushed further for athletes of every level.",
    features: ["Pace guidance and audio-guided runs", "Ultra-breathable fluoroelastomer strap", "Always-on high contrast metrics"]
  }
];

// Color definitions for swatches and SVG renderer
const COLOR_MAP = {
  "natural-ti": { hex: "#c8c2b7", border: "#a89f92", highlight: "#dfd9cf", label: "Natural Titanium" },
  "black-ti": { hex: "#262629", border: "#18181a", highlight: "#48484d", label: "Black Titanium" },
  "jet-black": { hex: "#0d0d0f", border: "#000000", highlight: "#323238", label: "Jet Black" },
  "rose-gold": { hex: "#e8b4b8", border: "#c89498", highlight: "#fad4d8", label: "Rose Gold" },
  "silver": { hex: "#e5e5ea", border: "#c7c7cc", highlight: "#ffffff", label: "Silver" },
  "starlight": { hex: "#e5dcd3", border: "#c5bcb3", highlight: "#faf3eb", label: "Starlight" },
  "midnight": { hex: "#161e2e", border: "#0a0e17", highlight: "#2c3b59", label: "Midnight" },

  // Band Colors
  "alpine-orange": { hex: "#ff6b00", highlight: "#ff8c33", label: "Alpine Orange" },
  "ocean-blue": { hex: "#0066cc", highlight: "#3399ff", label: "Ocean Blue" },
  "trail-black": { hex: "#222222", highlight: "#444444", label: "Trail Loop Black" },
  "sport-midnight": { hex: "#1a2332", highlight: "#2e3b52", label: "Midnight Sport" },
  "sport-pink": { hex: "#fbcfe8", highlight: "#fde2f3", label: "Light Blush" },
  "sport-starlight": { hex: "#e5dcd3", highlight: "#f5eee6", label: "Starlight Sport" },
  "milanese-gold": { hex: "#d4af37", highlight: "#f3cf55", label: "Milanese Gold" },
  "braided-starlight": { hex: "#e5dcd3", highlight: "#f2ece6", label: "Braided Starlight" },
  "hermes-leather": { hex: "#b46d38", highlight: "#cf8752", label: "Fauve Leather" },
  "hermes-kilim": { hex: "#1e3a8a", highlight: "#3b82f6", label: "Kilim Navy" },
  "hermes-orange": { hex: "#ff5e00", highlight: "#ff7f33", label: "Hermès Orange" },
  "nike-sport-band": { hex: "#94a3b8", highlight: "#cbd5e1", label: "Nike Platinum" },
  "nike-volt": { hex: "#a3e635", highlight: "#bef264", label: "Nike Volt" }
};

// --- Application State ---
const State = {
  cart: [],
  whatsAppNumber: localStorage.getItem("aw_whatsapp_number") || CONFIG.defaultWhatsAppNumber,
  activeFilter: "all",
  searchQuery: "",
  
  // Customizer Studio State
  studio: {
    modelId: "series-10-jetblack",
    caseFinish: "jet-black",
    caseSize: "46mm",
    bandId: "sport-midnight",
    faceTheme: "rings", // 'rings', 'ultra', 'modular', 'minimal'
    price: 429
  }
};

// ==========================================================================
// SVG Apple Watch Real-Time Vector Generator
// ==========================================================================
function renderWatchSVG(finishKey, bandKey, faceTheme = "rings", sizeLabel = "46mm") {
  const caseColor = COLOR_MAP[finishKey] || COLOR_MAP["jet-black"];
  const bandColor = COLOR_MAP[bandKey] || COLOR_MAP["sport-midnight"];

  // Unique watch face UI accents based on theme
  let faceContent = "";
  if (faceTheme === "ultra") {
    faceContent = `
      <!-- Ultra Sport Watch Face -->
      <circle cx="100" cy="115" r="54" fill="#080808" stroke="#ff9f0a" stroke-width="2" stroke-dasharray="4, 3" />
      <text x="100" y="85" font-family="-apple-system, sans-serif" font-size="9" fill="#ff9f0a" font-weight="700" text-anchor="middle" letter-spacing="1">ULTRA COMPASS</text>
      <text x="100" y="118" font-family="-apple-system, sans-serif" font-size="24" fill="#ffffff" font-weight="800" text-anchor="middle" class="live-clock-val">10:09</text>
      <text x="100" y="134" font-family="-apple-system, sans-serif" font-size="10" fill="#30d158" font-weight="600" text-anchor="middle">▲ 320 FT • 72°F</text>
      <path d="M 80 146 A 20 20 0 0 1 120 146" fill="none" stroke="#ff453a" stroke-width="3" stroke-linecap="round" />
    `;
  } else if (faceTheme === "modular") {
    faceContent = `
      <!-- Modular Digital Face -->
      <rect x="52" y="68" width="96" height="94" rx="12" fill="#050505" />
      <text x="60" y="84" font-family="-apple-system, sans-serif" font-size="8" fill="#ff453a" font-weight="700">WED 10</text>
      <text x="100" y="112" font-family="-apple-system, sans-serif" font-size="26" fill="#ffffff" font-weight="800" text-anchor="middle" class="live-clock-val">10:09</text>
      <rect x="58" y="124" width="84" height="24" rx="6" fill="#1c1c1e" />
      <text x="64" y="136" font-family="-apple-system, sans-serif" font-size="7.5" fill="#2997ff" font-weight="600">🏃 5.24 MI • 42 MIN</text>
      <text x="64" y="144" font-family="-apple-system, sans-serif" font-size="7" fill="#86868b">HEART RATE: 68 BPM</text>
    `;
  } else if (faceTheme === "minimal") {
    faceContent = `
      <!-- Minimalist Luxury Analog Face -->
      <circle cx="100" cy="115" r="54" fill="#0a0a0c" />
      <!-- Dial tick marks -->
      <line x1="100" y1="65" x2="100" y2="72" stroke="#ffffff" stroke-width="2" />
      <line x1="100" y1="158" x2="100" y2="165" stroke="#ffffff" stroke-width="2" />
      <line x1="50" y1="115" x2="57" y2="115" stroke="#ffffff" stroke-width="2" />
      <line x1="143" y1="115" x2="150" y2="115" stroke="#ffffff" stroke-width="2" />
      <!-- Hour & Minute hands -->
      <line x1="100" y1="115" x2="80" y2="92" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
      <line x1="100" y1="115" x2="128" y2="88" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
      <!-- Second hand (Orange) -->
      <line x1="100" y1="125" x2="100" y2="70" stroke="#ff6b00" stroke-width="1.2" stroke-linecap="round" />
      <circle cx="100" cy="115" r="3.5" fill="#ff6b00" />
      <text x="100" y="140" font-family="-apple-system, sans-serif" font-size="7" fill="#86868b" font-weight="600" text-anchor="middle">HERMÈS</text>
    `;
  } else {
    // Standard Activity Rings Face (Default)
    faceContent = `
      <!-- Activity Rings Face -->
      <rect x="50" y="65" width="100" height="100" rx="20" fill="#000000" />
      <text x="100" y="86" font-family="-apple-system, sans-serif" font-size="9" fill="#2997ff" font-weight="700" text-anchor="middle">CUPERTINO 72°</text>
      <text x="100" y="118" font-family="-apple-system, sans-serif" font-size="28" fill="#ffffff" font-weight="800" text-anchor="middle" class="live-clock-val">10:09</text>
      
      <!-- Activity Triple Rings -->
      <g transform="translate(100, 142)">
        <!-- Move (Red) -->
        <circle cx="0" cy="0" r="14" fill="none" stroke="#330c0c" stroke-width="3" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="#ff453a" stroke-width="3" stroke-dasharray="70 20" stroke-linecap="round" />
        <!-- Exercise (Green) -->
        <circle cx="0" cy="0" r="10" fill="none" stroke="#0a2a12" stroke-width="3" />
        <circle cx="0" cy="0" r="10" fill="none" stroke="#30d158" stroke-width="3" stroke-dasharray="50 15" stroke-linecap="round" />
        <!-- Stand (Blue) -->
        <circle cx="0" cy="0" r="6" fill="none" stroke="#0a2040" stroke-width="2.5" />
        <circle cx="0" cy="0" r="6" fill="none" stroke="#2997ff" stroke-width="2.5" stroke-dasharray="30 10" stroke-linecap="round" />
      </g>
    `;
  }

  return `
    <svg class="watch-svg-render" viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Case Shading Gradient -->
        <linearGradient id="caseGrad-${finishKey}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${caseColor.highlight}" />
          <stop offset="50%" stop-color="${caseColor.hex}" />
          <stop offset="100%" stop-color="${caseColor.border}" />
        </linearGradient>

        <!-- Band Top Gradient -->
        <linearGradient id="bandGrad-${bandKey}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${bandColor.hex}" />
          <stop offset="50%" stop-color="${bandColor.highlight}" />
          <stop offset="100%" stop-color="${bandColor.hex}" />
        </linearGradient>

        <!-- Glass Reflection -->
        <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.25)" />
          <stop offset="40%" stop-color="rgba(255,255,255,0.05)" />
          <stop offset="100%" stop-color="transparent" />
        </linearGradient>
      </defs>

      <!-- TOP BAND -->
      <path d="M 68 0 L 132 0 L 130 55 C 130 55 120 56 100 56 C 80 56 70 55 70 55 Z" fill="url(#bandGrad-${bandKey})" />
      <!-- Top Band Texture Ridges -->
      <line x1="72" y1="12" x2="128" y2="12" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
      <line x1="72" y1="24" x2="128" y2="24" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
      <line x1="72" y1="36" x2="128" y2="36" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />

      <!-- BOTTOM BAND -->
      <path d="M 70 175 C 70 175 80 174 100 174 C 120 174 130 175 130 175 L 132 230 L 68 230 Z" fill="url(#bandGrad-${bandKey})" />
      <!-- Bottom Band Texture Ridges -->
      <line x1="72" y1="192" x2="128" y2="192" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
      <line x1="72" y1="204" x2="128" y2="204" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
      <line x1="72" y1="216" x2="128" y2="216" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />

      <!-- DIGITAL CROWN (Right Side) -->
      <rect x="156" y="85" width="8" height="24" rx="3" fill="url(#caseGrad-${finishKey})" stroke="${caseColor.border}" stroke-width="0.8" />
      <line x1="158" y1="89" x2="162" y2="89" stroke="#111" stroke-width="1" />
      <line x1="158" y1="93" x2="162" y2="93" stroke="#111" stroke-width="1" />
      <line x1="158" y1="97" x2="162" y2="97" stroke="#111" stroke-width="1" />
      <line x1="158" y1="101" x2="162" y2="101" stroke="#111" stroke-width="1" />
      <line x1="158" y1="105" x2="162" y2="105" stroke="#111" stroke-width="1" />

      <!-- SIDE BUTTON -->
      <rect x="156" y="120" width="5" height="28" rx="2" fill="url(#caseGrad-${finishKey})" stroke="${caseColor.border}" stroke-width="0.8" />

      <!-- ACTION BUTTON (Orange on Ultra) -->
      <rect x="39" y="96" width="5" height="30" rx="2" fill="#ff6b00" stroke="#cc5500" stroke-width="0.8" />

      <!-- WATCH CASE BODY -->
      <rect x="42" y="48" width="116" height="134" rx="32" fill="url(#caseGrad-${finishKey})" stroke="${caseColor.border}" stroke-width="1.5" />

      <!-- INNER BEZEL SCREEN -->
      <rect x="47" y="53" width="106" height="124" rx="27" fill="#000000" stroke="#18181a" stroke-width="2" />

      <!-- WATCH FACE CONTENT -->
      ${faceContent}

      <!-- GLASS SHINE OVERLAY -->
      <rect x="47" y="53" width="106" height="124" rx="27" fill="url(#glassReflect)" pointer-events="none" />
    </svg>
  `;
}

// ==========================================================================
// Hero Section Initialization
// ==========================================================================
function initHero() {
  const heroS10 = document.getElementById("hero-img-series10");
  const heroU2 = document.getElementById("hero-img-ultra2");
  const heroSE = document.getElementById("hero-img-se");

  if (heroS10) heroS10.innerHTML = `<div style="width: 140px; height: 180px;">${renderWatchSVG('jet-black', 'sport-midnight', 'rings')}</div>`;
  if (heroU2) heroU2.innerHTML = `<div style="width: 160px; height: 200px;">${renderWatchSVG('natural-ti', 'alpine-orange', 'ultra')}</div>`;
  if (heroSE) heroSE.innerHTML = `<div style="width: 140px; height: 180px;">${renderWatchSVG('starlight', 'sport-starlight', 'rings')}</div>`;
}

// ==========================================================================
// Real-time Clock Sync
// ==========================================================================
function updateLiveClocks() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${hours}:${minutes}`;

  document.querySelectorAll(".live-clock-val").forEach(el => {
    el.textContent = timeStr;
  });
}

// ==========================================================================
// Interactive Watch Studio Controller
// ==========================================================================
function initStudio() {
  renderStudioPreview();
  renderStudioControls();
}

function renderStudioPreview() {
  const container = document.getElementById("studio-watch-container");
  if (!container) return;

  const currentProduct = PRODUCTS.find(p => p.id === State.studio.modelId) || PRODUCTS[0];
  
  // Calculate price with size modifiers
  let price = currentProduct.basePrice;
  if (State.studio.caseSize === "46mm" || State.studio.caseSize === "49mm") {
    price += 30;
  }
  State.studio.price = price;

  container.innerHTML = renderWatchSVG(
    State.studio.caseFinish,
    State.studio.bandId,
    State.studio.faceTheme,
    State.studio.caseSize
  );

  // Update meta texts
  const titleEl = document.getElementById("studio-preview-title");
  const detailsEl = document.getElementById("studio-preview-details");
  const priceEl = document.getElementById("studio-preview-price");

  const finishName = (COLOR_MAP[State.studio.caseFinish] || {}).label || State.studio.caseFinish;
  const bandName = (COLOR_MAP[State.studio.bandId] || {}).label || State.studio.bandId;

  if (titleEl) titleEl.textContent = currentProduct.title;
  if (detailsEl) detailsEl.textContent = `${State.studio.caseSize} • ${finishName} Case with ${bandName}`;
  if (priceEl) priceEl.textContent = `${CONFIG.currencySymbol}${price}`;

  updateLiveClocks();
}

function renderStudioControls() {
  const currentProduct = PRODUCTS.find(p => p.id === State.studio.modelId) || PRODUCTS[0];

  // 1. Model Selector
  const modelPills = document.getElementById("studio-model-selector");
  if (modelPills) {
    modelPills.innerHTML = PRODUCTS.map(p => `
      <button class="pill-option ${p.id === State.studio.modelId ? 'active' : ''}" 
              onclick="setStudioModel('${p.id}')">
        ${p.title.replace("Apple Watch ", "")}
      </button>
    `).join("");
  }

  // 2. Case Size Selector
  const sizePills = document.getElementById("studio-size-selector");
  if (sizePills) {
    const sizes = currentProduct.collection === "ultra" ? ["49mm"] : 
                  currentProduct.collection === "se" ? ["40mm", "44mm"] : ["42mm", "46mm"];
    if (!sizes.includes(State.studio.caseSize)) {
      State.studio.caseSize = sizes[0];
    }
    sizePills.innerHTML = sizes.map(s => `
      <button class="pill-option ${s === State.studio.caseSize ? 'active' : ''}" 
              onclick="setStudioSize('${s}')">
        ${s} Case
      </button>
    `).join("");
  }

  // 3. Case Color Swatches (Formatting Colors)
  const caseSwatches = document.getElementById("studio-case-swatches");
  const caseValLabel = document.getElementById("studio-case-selected-label");
  if (caseSwatches) {
    caseSwatches.innerHTML = currentProduct.availableFinishes.map(f => `
      <button class="color-swatch-btn ${f.id === State.studio.caseFinish ? 'active' : ''}"
              style="--swatch-color: ${f.hex};"
              data-name="${f.name}"
              aria-label="Select ${f.name} finish"
              onclick="setStudioFinish('${f.id}')">
      </button>
    `).join("");
  }
  if (caseValLabel) {
    const activeFinish = currentProduct.availableFinishes.find(f => f.id === State.studio.caseFinish) || currentProduct.availableFinishes[0];
    caseValLabel.textContent = activeFinish ? activeFinish.name : "";
  }

  // 4. Band Color & Style Swatches
  const bandSwatches = document.getElementById("studio-band-swatches");
  const bandValLabel = document.getElementById("studio-band-selected-label");
  if (bandSwatches) {
    bandSwatches.innerHTML = currentProduct.availableBands.map(b => `
      <button class="color-swatch-btn ${b.id === State.studio.bandId ? 'active' : ''}"
              style="--swatch-color: ${b.hex};"
              data-name="${b.name}"
              aria-label="Select ${b.name}"
              onclick="setStudioBand('${b.id}')">
      </button>
    `).join("");
  }
  if (bandValLabel) {
    const activeBand = currentProduct.availableBands.find(b => b.id === State.studio.bandId) || currentProduct.availableBands[0];
    bandValLabel.textContent = activeBand ? activeBand.name : "";
  }

  // 5. Watch Face Style Selector
  const facePills = document.getElementById("studio-face-selector");
  if (facePills) {
    const faces = [
      { id: "rings", name: "Activity Rings" },
      { id: "ultra", name: "Ultra Wayfinder" },
      { id: "modular", name: "Modular Sport" },
      { id: "minimal", name: "Luxury Analog" }
    ];
    facePills.innerHTML = faces.map(f => `
      <button class="pill-option ${f.id === State.studio.faceTheme ? 'active' : ''}"
              onclick="setStudioFace('${f.id}')">
        ${f.name}
      </button>
    `).join("");
  }
}

// Studio Control Actions
window.setStudioModel = function(modelId) {
  const p = PRODUCTS.find(prod => prod.id === modelId);
  if (!p) return;
  State.studio.modelId = modelId;
  State.studio.caseFinish = p.defaultFinish;
  State.studio.bandId = p.defaultBand;
  State.studio.caseSize = p.caseSize;
  renderStudioPreview();
  renderStudioControls();
};

window.setStudioSize = function(size) {
  State.studio.caseSize = size;
  renderStudioPreview();
  renderStudioControls();
};

window.setStudioFinish = function(finishId) {
  State.studio.caseFinish = finishId;
  renderStudioPreview();
  renderStudioControls();
};

window.setStudioBand = function(bandId) {
  State.studio.bandId = bandId;
  renderStudioPreview();
  renderStudioControls();
};

window.setStudioFace = function(faceId) {
  State.studio.faceTheme = faceId;
  renderStudioPreview();
  renderStudioControls();
};

window.addStudioWatchToCart = function() {
  const currentProduct = PRODUCTS.find(p => p.id === State.studio.modelId);
  if (!currentProduct) return;

  const item = {
    cartId: `custom-${Date.now()}`,
    productId: currentProduct.id,
    title: currentProduct.title,
    caseFinish: State.studio.caseFinish,
    caseFinishName: (COLOR_MAP[State.studio.caseFinish] || {}).label || State.studio.caseFinish,
    caseSize: State.studio.caseSize,
    bandId: State.studio.bandId,
    bandName: (COLOR_MAP[State.studio.bandId] || {}).label || State.studio.bandId,
    faceTheme: State.studio.faceTheme,
    price: State.studio.price,
    quantity: 1
  };

  addToCart(item);
  showToast(`Custom ${currentProduct.title} added to cart!`);
  openCartDrawer();
};

window.orderStudioWatchWhatsApp = function() {
  const currentProduct = PRODUCTS.find(p => p.id === State.studio.modelId);
  if (!currentProduct) return;

  const finishName = (COLOR_MAP[State.studio.caseFinish] || {}).label || State.studio.caseFinish;
  const bandName = (COLOR_MAP[State.studio.bandId] || {}).label || State.studio.bandId;

  const msg = [
    `⌚ *CUSTOM APPLE WATCH ORDER INQUIRY*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📱 *Model:* ${currentProduct.title}`,
    `📏 *Case Size:* ${State.studio.caseSize}`,
    `🎨 *Finish / Color:* ${finishName}`,
    `🎗️ *Strap / Band:* ${bandName}`,
    `🖼️ *Watch Face Theme:* ${State.studio.faceTheme.toUpperCase()}`,
    `💵 *Price:* ${CONFIG.currencySymbol}${State.studio.price}.00`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🚀 *Status:* Ready for immediate order & shipment confirmation.`,
    `Please confirm stock availability and share payment options!`
  ].join("\n");

  openWhatsAppWithMessage(msg);
};

// ==========================================================================
// Product Catalog & Filtering System
// ==========================================================================
function renderCatalog() {
  const grid = document.getElementById("products-catalog-grid");
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesFilter = State.activeFilter === "all" || p.collection === State.activeFilter;
    const query = State.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) ||
      p.specs.toLowerCase().includes(query) ||
      p.availableFinishes.some(f => f.name.toLowerCase().includes(query)) ||
      p.availableBands.some(b => b.name.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <h3>No Apple Watch models found matching "${State.searchQuery}"</h3>
        <p style="margin-top: 8px;">Try searching for "Ultra", "Series 10", "Titanium", or "Rose Gold".</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="resetCatalogFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const finish = product.availableFinishes[0];
    const band = product.availableBands[0];
    const installments = Math.round(product.basePrice / 12);

    return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-badge">
          <span class="badge ${product.badgeType}">${product.badge}</span>
        </div>

        <div class="product-card-image-wrap" onclick="openProductQuickView('${product.id}')" title="Click for details">
          <div style="width: 160px; height: 200px;">
            ${renderWatchSVG(finish.id, band.id, product.collection === "ultra" ? "ultra" : "rings")}
          </div>
        </div>

        <div class="product-card-info">
          <span class="product-card-collection">${product.collection.toUpperCase()}</span>
          <h3 class="product-card-title">${product.title}</h3>
          <p class="product-card-specs">${product.specs}</p>

          <!-- Interactive Color Swatches on Card -->
          <div class="product-card-swatches">
            <span style="font-size: 0.75rem; color: var(--text-muted); margin-right: 4px;">Finishes:</span>
            ${product.availableFinishes.map((f, i) => `
              <button class="product-card-swatch ${i === 0 ? 'active' : ''}" 
                      style="--swatch-color: ${f.hex};"
                      title="${f.name}"
                      onclick="changeCardFinish(this, '${product.id}', '${f.id}')">
              </button>
            `).join("")}
          </div>

          <div class="product-card-pricing-row">
            <div>
              <div class="product-card-price">${CONFIG.currencySymbol}${product.basePrice}</div>
              <div class="product-card-installments">From ${CONFIG.currencySymbol}${installments}/mo. for 12 mo.</div>
            </div>
          </div>

          <div class="product-card-actions">
            <button class="btn btn-primary btn-sm" onclick="quickAddToCart('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Add to Cart
            </button>
            <button class="btn btn-whatsapp-outline btn-sm" onclick="quickBuyWhatsApp('${product.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 2.083.825 3.226.825 3.183 0 5.768-2.586 5.768-5.766 0-3.18-2.585-5.767-5.768-5.767zm3.398 8.163c-.144.405-.837.774-1.17.823-.312.045-.698.077-1.127-.061-.258-.084-.593-.207-1.023-.393-1.815-.785-3.003-2.618-3.094-2.739-.091-.121-.741-.986-.741-1.88 0-.895.467-1.336.633-1.516.166-.18.362-.226.483-.226.12 0 .241.002.347.007.113.005.263-.043.41.312.152.366.52 1.27.565 1.362.045.092.076.2.015.321-.06.121-.09.196-.18.302-.09.106-.19.237-.271.319-.09.091-.184.19-.079.371.106.181.472.778 1.011 1.258.694.619 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.528.574-.709.12-.181.241-.151.407-.091.166.06 1.054.498 1.235.588.181.09.301.136.347.211.045.076.045.437-.099.842z"/></svg>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

window.changeCardFinish = function(btn, productId, finishId) {
  const card = btn.closest(".product-card");
  if (!card) return;

  card.querySelectorAll(".product-card-swatch").forEach(s => s.classList.remove("active"));
  btn.classList.add("active");

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const imgContainer = card.querySelector(".product-card-image-wrap div");
  if (imgContainer) {
    imgContainer.innerHTML = renderWatchSVG(finishId, product.defaultBand, product.collection === "ultra" ? "ultra" : "rings");
    updateLiveClocks();
  }
};

window.filterCatalog = function(category, tabBtn) {
  State.activeFilter = category;
  document.querySelectorAll(".catalog-tab-btn").forEach(btn => btn.classList.remove("active"));
  if (tabBtn) {
    tabBtn.classList.add("active");
  } else {
    const matchingBtn = document.querySelector(`.catalog-tab-btn[data-category="${category}"]`);
    if (matchingBtn) matchingBtn.classList.add("active");
  }
  renderCatalog();
};

window.searchCatalog = function(query) {
  State.searchQuery = query;
  renderCatalog();
};

window.resetCatalogFilters = function() {
  State.activeFilter = "all";
  State.searchQuery = "";
  const input = document.getElementById("catalog-search-input");
  if (input) input.value = "";
  document.querySelectorAll(".catalog-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "all");
  });
  renderCatalog();
};

// ==========================================================================
// Shopping Cart Operations & State Management
// ==========================================================================
function loadCart() {
  try {
    const saved = localStorage.getItem("aw_cart");
    State.cart = saved ? JSON.parse(saved) : [];
  } catch (e) {
    State.cart = [];
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("aw_cart", JSON.stringify(State.cart));
  updateCartUI();
}

function addToCart(item) {
  // Check if identical item (same model, finish, band, size) exists
  const existing = State.cart.find(i => 
    i.productId === item.productId &&
    i.caseFinish === item.caseFinish &&
    i.bandId === item.bandId &&
    i.caseSize === item.caseSize
  );

  if (existing) {
    existing.quantity += item.quantity || 1;
  } else {
    State.cart.push({
      cartId: item.cartId || `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      productId: item.productId,
      title: item.title,
      caseFinish: item.caseFinish,
      caseFinishName: item.caseFinishName || (COLOR_MAP[item.caseFinish] || {}).label || item.caseFinish,
      caseSize: item.caseSize,
      bandId: item.bandId,
      bandName: item.bandName || (COLOR_MAP[item.bandId] || {}).label || item.bandId,
      faceTheme: item.faceTheme || "rings",
      price: item.price,
      quantity: item.quantity || 1
    });
  }

  saveCart();
  animateCartBadge();
}

window.quickAddToCart = function(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  addToCart({
    productId: p.id,
    title: p.title,
    caseFinish: p.defaultFinish,
    caseFinishName: (COLOR_MAP[p.defaultFinish] || {}).label || p.defaultFinish,
    caseSize: p.caseSize,
    bandId: p.defaultBand,
    bandName: (COLOR_MAP[p.defaultBand] || {}).label || p.defaultBand,
    faceTheme: p.collection === "ultra" ? "ultra" : "rings",
    price: p.basePrice,
    quantity: 1
  });

  showToast(`${p.title} added to your cart!`);
  openCartDrawer();
};

window.quickBuyWhatsApp = function(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const finishName = (COLOR_MAP[p.defaultFinish] || {}).label || p.defaultFinish;
  const bandName = (COLOR_MAP[p.defaultBand] || {}).label || p.defaultBand;

  const msg = [
    `🛒 *DIRECT APPLE WATCH ORDER*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `⌚ *Model:* ${p.title}`,
    `📏 *Case Size:* ${p.caseSize}`,
    `🎨 *Finish:* ${finishName}`,
    `🎗️ *Band:* ${bandName}`,
    `💵 *Price:* ${CONFIG.currencySymbol}${p.basePrice}.00`,
    `📦 *Shipping:* Free Express Delivery`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Hi! I would like to order this watch right away. Please confirm availability and send payment instructions!`
  ].join("\n");

  openWhatsAppWithMessage(msg);
};

window.removeFromCart = function(cartId) {
  State.cart = State.cart.filter(item => item.cartId !== cartId);
  saveCart();
  showToast("Item removed from cart");
};

window.updateCartQuantity = function(cartId, delta) {
  const item = State.cart.find(i => i.cartId === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    State.cart = State.cart.filter(i => i.cartId !== cartId);
  }
  saveCart();
};

function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const totalCount = State.cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "flex" : "none";
  });

  const cartList = document.getElementById("cart-drawer-items");
  const cartEmpty = document.getElementById("cart-drawer-empty");
  const cartFooter = document.getElementById("cart-drawer-footer");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const taxEl = document.getElementById("cart-tax-val");
  const totalEl = document.getElementById("cart-total-val");

  if (!cartList) return;

  if (State.cart.length === 0) {
    cartList.innerHTML = "";
    if (cartEmpty) cartEmpty.style.display = "block";
    if (cartFooter) cartFooter.style.display = "none";
    return;
  }

  if (cartEmpty) cartEmpty.style.display = "none";
  if (cartFooter) cartFooter.style.display = "block";

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * CONFIG.salesTaxRate);
  const total = subtotal + tax;

  if (subtotalEl) subtotalEl.textContent = `${CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  if (taxEl) taxEl.textContent = `${CONFIG.currencySymbol}${tax.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `${CONFIG.currencySymbol}${total.toLocaleString()}`;

  cartList.innerHTML = State.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-thumb">
        <div style="width: 48px; height: 60px;">
          ${renderWatchSVG(item.caseFinish, item.bandId, item.faceTheme || "rings")}
        </div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-meta">
          <span>${item.caseSize} • ${item.caseFinishName}</span>
          <span>${item.bandName}</span>
        </div>
        <div class="cart-item-price">${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}</div>
        
        <div class="cart-item-quantity-controls">
          <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', -1)" aria-label="Decrease quantity">−</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity('${item.cartId}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="removeFromCart('${item.cartId}')" title="Remove item" aria-label="Remove item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join("");
}

function animateCartBadge() {
  document.querySelectorAll(".cart-count-badge").forEach(badge => {
    badge.classList.remove("bounce");
    void badge.offsetWidth; // Trigger reflow
    badge.classList.add("bounce");
  });
}

// ==========================================================================
// WhatsApp Direct Order & Checkout Message Engine
// ==========================================================================
function buildWhatsAppCartOrderMessage(customerData = {}) {
  if (State.cart.length === 0) return "";

  const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * CONFIG.salesTaxRate);
  const total = subtotal + tax;
  const orderRef = `AW-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  let msg = `🛍️ *NEW APPLE WATCH CART ORDER*\n`;
  msg += `🔖 *Order Ref:* #${orderRef}\n`;
  msg += `📅 *Date:* ${dateStr}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `📋 *ORDER ITEMS:*\n`;

  State.cart.forEach((item, index) => {
    msg += `\n*${index + 1}. ${item.title}*\n`;
    msg += `   • Size: ${item.caseSize}\n`;
    msg += `   • Finish: ${item.caseFinishName}\n`;
    msg += `   • Band: ${item.bandName}\n`;
    msg += `   • Qty: ${item.quantity} × ${CONFIG.currencySymbol}${item.price} = *${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}*\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Subtotal:* ${CONFIG.currencySymbol}${subtotal.toLocaleString()}\n`;
  msg += `🏛️ *Est. Tax (8%):* ${CONFIG.currencySymbol}${tax.toLocaleString()}\n`;
  msg += `🚚 *Shipping:* FREE Express Delivery\n`;
  msg += `💳 *TOTAL AMOUNT:* *${CONFIG.currencySymbol}${total.toLocaleString()}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  if (customerData.name || customerData.address) {
    msg += `👤 *CUSTOMER DETAILS:*\n`;
    if (customerData.name) msg += `• *Name:* ${customerData.name}\n`;
    if (customerData.phone) msg += `• *Contact:* ${customerData.phone}\n`;
    if (customerData.address) msg += `• *Delivery Address:* ${customerData.address}\n`;
    if (customerData.notes) msg += `• *Notes:* ${customerData.notes}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  }

  msg += `Please verify this order and send secure payment instructions. Thank you! ✨`;
  return msg;
}

window.openWhatsAppWithMessage = function(messageText) {
  const cleanNumber = State.whatsAppNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(messageText);
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
};

window.initiateCartWhatsAppCheckout = function() {
  if (State.cart.length === 0) {
    showToast("Your cart is empty! Add items from the Studio or Catalog first.");
    return;
  }

  // Open the checkout details modal to let user add address/name (or quick checkout)
  const modal = document.getElementById("whatsapp-checkout-modal");
  const previewBox = document.getElementById("wa-modal-msg-preview");

  if (previewBox) {
    previewBox.textContent = buildWhatsAppCartOrderMessage();
  }

  if (modal) {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }
};

window.submitWhatsAppCheckout = function(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("checkout-name")?.value.trim() || "";
  const phone = document.getElementById("checkout-phone")?.value.trim() || "";
  const address = document.getElementById("checkout-address")?.value.trim() || "";
  const notes = document.getElementById("checkout-notes")?.value.trim() || "";

  const finalMsg = buildWhatsAppCartOrderMessage({ name, phone, address, notes });
  openWhatsAppWithMessage(finalMsg);

  // Close modal
  const modal = document.getElementById("whatsapp-checkout-modal");
  if (modal) modal.close();

  showToast("Opening WhatsApp with your order!", "toast-wa");
};

// ==========================================================================
// WhatsApp Merchant Number Settings Manager
// ==========================================================================
window.openWhatsAppSettings = function() {
  const modal = document.getElementById("whatsapp-settings-modal");
  const input = document.getElementById("settings-wa-number-input");
  if (input) input.value = State.whatsAppNumber;

  if (modal) {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }
};

window.saveWhatsAppSettings = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("settings-wa-number-input");
  if (input && input.value.trim()) {
    State.whatsAppNumber = input.value.trim();
    localStorage.setItem("aw_whatsapp_number", State.whatsAppNumber);
    const footerNumEl = document.getElementById("footer-wa-num");
    if (footerNumEl) footerNumEl.textContent = State.whatsAppNumber;
    showToast(`WhatsApp number updated to +${State.whatsAppNumber}!`, "toast-wa");
  }

  const modal = document.getElementById("whatsapp-settings-modal");
  if (modal) modal.close();
};

// ==========================================================================
// Product Quick View Modal
// ==========================================================================
window.openProductQuickView = function(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const modal = document.getElementById("product-quickview-modal");
  const content = document.getElementById("quickview-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center;">
      <div style="background: var(--bg-tertiary); border-radius: var(--radius-lg); padding: 30px; display: flex; align-items: center; justify-content: center; height: 320px;">
        <div style="width: 200px; height: 260px;">
          ${renderWatchSVG(p.defaultFinish, p.defaultBand, p.collection === "ultra" ? "ultra" : "rings")}
        </div>
      </div>
      <div>
        <span class="badge ${p.badgeType}" style="margin-bottom: 8px;">${p.badge}</span>
        <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 6px;">${p.title}</h2>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">${p.tagline}</p>
        <div style="font-size: 1.8rem; font-weight: 700; color: #ffffff; margin-bottom: 20px;">${CONFIG.currencySymbol}${p.basePrice}</div>

        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 8px;">Key Innovations</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem;">
            ${p.features.map(f => `<li style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--accent-apple-blue);">✓</span> ${f}</li>`).join("")}
          </ul>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="quickAddToCart('${p.id}'); document.getElementById('product-quickview-modal').close();">
            Add to Cart (${CONFIG.currencySymbol}${p.basePrice})
          </button>
          <button class="btn btn-whatsapp" onclick="quickBuyWhatsApp('${p.id}'); document.getElementById('product-quickview-modal').close();">
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  updateLiveClocks();
};

// ==========================================================================
// UI Helpers & Drawer Controls
// ==========================================================================
window.openCartDrawer = function() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay) overlay.classList.add("open");
  if (drawer) drawer.classList.add("open");
};

window.closeCartDrawer = function() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay) overlay.classList.remove("open");
  if (drawer) drawer.classList.remove("open");
};

window.showToast = function(message, extraClass = "") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${extraClass}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// Light dismiss dialog polyfill / fallback support
function setupDialogFallbacks() {
  document.querySelectorAll("dialog").forEach(dialog => {
    // Fallback for click outside
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          dialog.close();
        }
      }
    });
  });
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initHero();
  loadCart();
  initStudio();
  renderCatalog();
  setupDialogFallbacks();

  const footerNumEl = document.getElementById("footer-wa-num");
  if (footerNumEl) footerNumEl.textContent = State.whatsAppNumber;

  // Keep live clocks ticking on watch faces
  setInterval(updateLiveClocks, 1000);

  // Close cart on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
    }
  });
});
