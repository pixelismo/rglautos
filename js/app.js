// RGL Cars Automotores — Lógica de Aplicación
// Navegación, renderizado, filtros, modal de ficha, lead capture modal, drawer y asistente IA

let currentFilter = {
  search: "",
  brand: "todas",
  year: "todos",
  km: "todos",
  priceType: "todos"
};

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedVehicles();
  renderCatalogGrid();
  setupFilterListeners();
  setupRoutingAndNavigation();
  setupAiAssistant();
  setupModalHandlers();
});

/**
 * 01. Render de los 5 Vehículos Destacados en la Home (Scroll Horizontal)
 */
function renderFeaturedVehicles() {
  const container = document.getElementById('featured-track');
  if (!container) return;

  const featured = VEHICLES_DATA.filter(v => v.featured).slice(0, 5);

  container.innerHTML = featured.map((v, index) => {
    const isEntrega = v.priceType === 'entrega';
    const isConsultar = v.priceType === 'consultar';

    return `
      <article class="car-card-editorial w-[290px] md:w-[340px] shrink-0 rounded-[24px] p-4 bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-id="${v.id}">
        <div>
          <!-- Imagen y Badges estilo Stitch -->
          <div class="relative w-full h-[180px] rounded-[18px] overflow-hidden bg-[#ECE8DF] mb-3 group cursor-pointer" onclick="openVehicleModal('${v.id}')">
            <img 
              src="${v.images[0].url}" 
              alt="${v.brand} ${v.model} ${v.year}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
              ${v.badges.map(b => `<span class="badge-editorial ${b.includes('Nuevo') ? 'badge-accent' : (b.includes('BNA') ? 'badge-bna' : '')}">${b}</span>`).join('')}
            </div>
            <div class="absolute bottom-2 right-2.5 font-mono-data text-[10px] text-white/95 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
              0${index + 1} / 05
            </div>
          </div>

          <!-- Información Principal -->
          <header class="mb-3 px-1">
            <div class="flex items-center justify-between text-[11px] text-[#70756F] uppercase tracking-wider font-label mb-1">
              <span>${v.brand} · ${v.year}</span>
              <span class="font-mono-data">${v.kmDisplay}</span>
            </div>
            
            <h3 class="text-[17px] font-headline font-semibold text-[#1D201D] leading-tight truncate cursor-pointer hover:text-[#C86D44] transition-colors" onclick="openVehicleModal('${v.id}')">
              ${v.brand} ${v.model} ${v.version}
            </h3>
            
            <p class="text-xs text-[#5D625C] line-clamp-1 mt-1 font-body">
              ${v.engine} · ${v.transmission}
            </p>
          </header>
        </div>

        <!-- Bloque de Precio y Acciones -->
        <div class="pt-3 border-t border-black/[0.06] px-1">
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-[10px] uppercase font-bold text-[#7A7F79] tracking-wider block font-label">
                ${isEntrega ? 'Entrega inicial' : (isConsultar ? 'Condición' : 'Precio publicado')}
              </span>
              <span class="text-[17px] font-headline font-semibold text-[#1E382B]">
                ${v.priceDisplay}
              </span>
              ${isEntrega ? `<p class="text-[10px] text-[#C86D44] italic">Resto financiado BNA</p>` : ''}
            </div>
            
            <button 
              onclick="openVehicleModal('${v.id}')"
              class="w-9 h-9 rounded-full bg-[#F8F7F3] border border-black/10 flex items-center justify-center text-[#1D201D] hover:bg-[#1E382B] hover:text-white transition-colors"
              title="Ver Ficha">
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div class="flex gap-2">
            <button 
              onclick="openVehicleModal('${v.id}')"
              class="flex-1 py-2 px-3 text-[11px] uppercase tracking-wider font-label font-bold hairline-all hover:bg-[#F2EFE9] transition-colors rounded-full text-center">
              Ficha
            </button>
            <a 
              href="${buildWhatsAppLink(v)}" 
              target="_blank" 
              rel="noopener"
              class="btn-whatsapp py-2 px-3.5 rounded-full flex items-center justify-center gap-1.5 text-[11px] tracking-wide font-label font-bold shadow-sm"
              title="Consultar por WhatsApp">
              <span class="material-symbols-outlined text-[15px]">chat</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 02. Render del Catálogo Completo con Filtros
 */
function renderCatalogGrid() {
  const container = document.getElementById('catalog-grid');
  const counterEl = document.getElementById('catalog-results-count');
  if (!container) return;

  const filtered = VEHICLES_DATA.filter(v => {
    if (currentFilter.search.trim()) {
      const q = currentFilter.search.toLowerCase();
      const matchBrand = v.brand.toLowerCase().includes(q);
      const matchModel = v.model.toLowerCase().includes(q);
      const matchVersion = v.version.toLowerCase().includes(q);
      if (!matchBrand && !matchModel && !matchVersion) return false;
    }

    if (currentFilter.brand !== 'todas' && v.brand.toLowerCase() !== currentFilter.brand.toLowerCase()) {
      return false;
    }

    if (currentFilter.year !== 'todos') {
      if (currentFilter.year === '2021+' && v.year < 2021) return false;
      if (currentFilter.year === '2018-2020' && (v.year < 2018 || v.year > 2020)) return false;
      if (currentFilter.year === '2014-2017' && (v.year < 2014 || v.year > 2017)) return false;
    }

    if (currentFilter.km !== 'todos') {
      if (currentFilter.km === 'hasta-100k' && (v.km === null || v.km > 100000)) return false;
      if (currentFilter.km === 'mas-100k' && (v.km !== null && v.km <= 100000)) return false;
    }

    if (currentFilter.priceType !== 'todos') {
      if (currentFilter.priceType === 'con-precio' && v.priceType === 'consultar') return false;
      if (currentFilter.priceType === 'consultar' && v.priceType !== 'consultar') return false;
      if (currentFilter.priceType === 'bna' && !v.badges.some(b => b.includes('BNA')) && v.priceType !== 'entrega') return false;
    }

    return true;
  });

  if (counterEl) {
    counterEl.textContent = `${filtered.length} vehículo${filtered.length === 1 ? '' : 's'} disponible${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 px-6 text-center hairline-all rounded-[28px] bg-white my-6">
        <span class="material-symbols-outlined text-4xl text-[#9EA39D] mb-3">search_off</span>
        <h4 class="text-xl font-headline font-bold text-[#1D201D] mb-2">No encontramos vehículos con esos filtros</h4>
        <p class="text-xs text-[#6B706A] max-w-md mx-auto mb-5 font-body">Podés reiniciar los criterios para ver todo el inventario disponible en Río Gallegos o consultar directo con un asesor.</p>
        <button onclick="resetFilters()" class="py-2.5 px-6 bg-[#1E382B] text-white text-xs uppercase tracking-wider font-label font-bold rounded-full hover:opacity-90 transition-opacity">
          Restablecer Filtros
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(v => {
    const isEntrega = v.priceType === 'entrega';
    const isConsultar = v.priceType === 'consultar';

    return `
      <article class="car-card-editorial rounded-[24px] p-4 bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-id="${v.id}">
        <div>
          <!-- Foto y Badges -->
          <div class="relative w-full h-[180px] rounded-[18px] overflow-hidden bg-[#ECE8DF] mb-3 group cursor-pointer" onclick="openVehicleModal('${v.id}')">
            <img 
              src="${v.images[0].url}" 
              alt="${v.brand} ${v.model} ${v.year}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
              ${v.badges.map(b => `<span class="badge-editorial ${b.includes('Nuevo') ? 'badge-accent' : (b.includes('BNA') ? 'badge-bna' : '')}">${b}</span>`).join('')}
            </div>
            <div class="absolute bottom-2 right-2.5 font-mono-data text-[10px] text-white/95 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
              ${v.year}
            </div>
          </div>

          <!-- Contenido -->
          <header class="mb-3 px-1">
            <div class="flex items-center justify-between text-[11px] text-[#70756F] uppercase tracking-wider font-label mb-1">
              <span>${v.brand}</span>
              <span class="font-mono-data">${v.kmDisplay}</span>
            </div>

            <h3 class="text-[17px] font-headline font-semibold text-[#1D201D] leading-snug truncate hover:text-[#C86D44] cursor-pointer transition-colors" onclick="openVehicleModal('${v.id}')">
              ${v.brand} ${v.model}
            </h3>

            <p class="text-xs text-[#5D625C] mb-2 truncate font-body">
              ${v.version} · ${v.transmission}
            </p>
          </header>
        </div>

        <div class="pt-3 border-t border-black/[0.06] px-1">
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-[10px] uppercase font-bold text-[#7A7F79] tracking-wider block font-label">
                ${isEntrega ? 'Entrega inicial' : (isConsultar ? 'Condición' : 'Precio publicado')}
              </span>
              <span class="text-[17px] font-headline font-semibold text-[#1E382B]">
                ${v.priceDisplay}
              </span>
              ${isEntrega ? `<p class="text-[10px] text-[#C86D44] italic">Resto financiado BNA</p>` : ''}
            </div>
            <button 
              onclick="openVehicleModal('${v.id}')"
              class="w-9 h-9 rounded-full bg-[#F8F7F3] border border-black/10 flex items-center justify-center text-[#1D201D] hover:bg-[#1E382B] hover:text-white transition-colors"
              title="Ver Ficha">
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div class="flex gap-2">
            <button 
              onclick="openVehicleModal('${v.id}')"
              class="flex-1 py-2 px-3 text-[11px] uppercase tracking-wider font-label font-bold hairline-all hover:bg-[#F2EFE9] transition-colors rounded-full text-center">
              Ficha
            </button>
            <a 
              href="${buildWhatsAppLink(v)}" 
              target="_blank" 
              rel="noopener"
              class="btn-whatsapp py-2 px-3.5 rounded-full flex items-center justify-center gap-1.5 text-[11px] tracking-wide font-label font-bold shadow-sm"
              title="Consultar por WhatsApp">
              <span class="material-symbols-outlined text-[15px]">chat</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 03. Listeners de Filtros
 */
function setupFilterListeners() {
  const searchInput = document.getElementById('filter-search');
  const brandSelect = document.getElementById('filter-brand');
  const yearSelect = document.getElementById('filter-year');
  const kmSelect = document.getElementById('filter-km');
  const priceSelect = document.getElementById('filter-price');
  const resetBtn = document.getElementById('filter-reset-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilter.search = e.target.value;
      renderCatalogGrid();
    });
  }

  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      currentFilter.brand = e.target.value;
      renderCatalogGrid();
    });
  }

  if (yearSelect) {
    yearSelect.addEventListener('change', (e) => {
      currentFilter.year = e.target.value;
      renderCatalogGrid();
    });
  }

  if (kmSelect) {
    kmSelect.addEventListener('change', (e) => {
      currentFilter.km = e.target.value;
      renderCatalogGrid();
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      currentFilter.priceType = e.target.value;
      renderCatalogGrid();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }
}

function resetFilters() {
  currentFilter = {
    search: "",
    brand: "todas",
    year: "todos",
    km: "todos",
    priceType: "todos"
  };

  const searchInput = document.getElementById('filter-search');
  const brandSelect = document.getElementById('filter-brand');
  const yearSelect = document.getElementById('filter-year');
  const kmSelect = document.getElementById('filter-km');
  const priceSelect = document.getElementById('filter-price');

  if (searchInput) searchInput.value = "";
  if (brandSelect) brandSelect.value = "todas";
  if (yearSelect) yearSelect.value = "todos";
  if (kmSelect) kmSelect.value = "todos";
  if (priceSelect) priceSelect.value = "todos";

  renderCatalogGrid();
}

/**
 * 04. Drawer Menú Lateral Off-Canvas (Stitch)
 */
function toggleMenuDrawer() {
  const drawer = document.getElementById('menu-drawer');
  const backdrop = document.getElementById('menu-drawer-backdrop');
  if (!drawer || !backdrop) return;

  const isOpen = !drawer.classList.contains('-translate-x-full');
  if (isOpen) {
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    document.body.style.overflow = '';
  } else {
    drawer.classList.remove('-translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * 05. Lead Capture Modal (Stitch)
 */
function openLeadModal(interest = "Consulta General") {
  const modal = document.getElementById('lead-modal');
  const backdrop = document.getElementById('lead-modal-backdrop');
  const interestInput = document.getElementById('lead-vehicle-interest');
  if (!modal || !backdrop) return;

  if (interestInput) interestInput.value = interest;

  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  backdrop.classList.add('opacity-100');
  modal.classList.remove('scale-95');
  modal.classList.add('scale-100');
  document.body.style.overflow = 'hidden';

  const nameInput = document.getElementById('lead-name');
  if (nameInput) setTimeout(() => nameInput.focus(), 150);
}

function closeLeadModal() {
  const modal = document.getElementById('lead-modal');
  const backdrop = document.getElementById('lead-modal-backdrop');
  if (!modal || !backdrop) return;

  backdrop.classList.add('opacity-0', 'pointer-events-none');
  backdrop.classList.remove('opacity-100');
  modal.classList.add('scale-95');
  modal.classList.remove('scale-100');
  document.body.style.overflow = '';
}

function handleLeadSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('lead-name')?.value.trim() || "";
  const phone = document.getElementById('lead-phone')?.value.trim() || "";
  const interest = document.getElementById('lead-vehicle-interest')?.value.trim() || "Consulta General";
  const details = document.getElementById('lead-details')?.value.trim() || "";

  let msg = `Hola RGL Cars! Mi nombre es ${name} (Tel: ${phone}). Quisiera consultar sobre: ${interest}.`;
  if (details) msg += ` Detalle: ${details}.`;

  const waUrl = `https://wa.me/${RGL_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  closeLeadModal();
  window.open(waUrl, '_blank', 'noopener');
}

/**
 * 06. Modal Ficha de Vehículo
 */
function openVehicleModal(id) {
  const vehicle = VEHICLES_DATA.find(v => v.id === id);
  if (!vehicle) return;

  const modal = document.getElementById('vehicle-modal');
  const modalContent = document.getElementById('vehicle-modal-content');
  if (!modal || !modalContent) return;

  const isEntrega = vehicle.priceType === 'entrega';
  const isConsultar = vehicle.priceType === 'consultar';

  modalContent.innerHTML = `
    <!-- Cabecera del Modal -->
    <div class="p-6 md:p-8 hairline-b flex items-start justify-between bg-[#FAF8F5]">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="kicker-editorial">${vehicle.brand} AUTOMOTORES</span>
          <span class="text-xs text-[#959A94]">·</span>
          <span class="font-mono-data text-xs text-[#686D67]">${vehicle.year}</span>
        </div>
        <h2 class="text-2xl md:text-3xl font-headline font-bold text-[#1D201D] leading-tight">
          ${vehicle.brand} ${vehicle.model}
        </h2>
        <p class="text-sm text-[#5A605A] mt-1 font-body">
          ${vehicle.version}
        </p>
      </div>
      <button onclick="closeVehicleModal()" class="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors" title="Cerrar ficha">
        <span class="material-symbols-outlined text-xl">close</span>
      </button>
    </div>

    <!-- Cuerpo: Galería y Datos -->
    <div class="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Columna Izquierda: Galería de Fotos (7 cols) -->
      <div class="lg:col-span-7 flex flex-col gap-4">
        <div class="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#ECE8DF] border border-black/[0.06] shadow-sm">
          <img 
            id="modal-main-image" 
            src="${vehicle.images[0].url}" 
            alt="${vehicle.images[0].alt}" 
            class="w-full h-full object-cover transition-all duration-300"
          />
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            ${vehicle.badges.map(b => `<span class="badge-editorial ${b.includes('Nuevo') ? 'badge-accent' : (b.includes('BNA') ? 'badge-bna' : '')}">${b}</span>`).join('')}
          </div>
          <div id="modal-image-caption" class="absolute bottom-3 left-3 right-3 text-xs text-white/95 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
            ${vehicle.images[0].caption}
          </div>
        </div>

        <!-- Miniaturas de Galería -->
        ${vehicle.images.length > 1 ? `
          <div class="flex gap-3 overflow-x-auto pb-2">
            ${vehicle.images.map((img, idx) => `
              <button 
                onclick="changeModalImage('${img.url}', '${img.caption}')" 
                class="w-20 md:w-24 aspect-[16/10] rounded-xl overflow-hidden border border-black/10 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C86D44] transition-all hover:opacity-90">
                <img src="${img.url}" alt="${img.alt}" class="w-full h-full object-cover" />
              </button>
            `).join('')}
          </div>
        ` : ''}

        <!-- Puntos destacados de fábrica -->
        <div class="mt-2 p-5 bg-[#FAF8F5] rounded-[20px] border border-black/[0.06]">
          <h4 class="text-xs uppercase tracking-wider font-label font-bold text-[#1D201D] mb-3 flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[17px] text-[#C86D44]">verified</span>
            Equipamiento & Detalles Verificados
          </h4>
          <ul class="space-y-2 text-xs md:text-sm text-[#484D47] font-body">
            ${vehicle.highlights.map(h => `
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-sm text-[#C86D44] mt-0.5">check_circle</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Columna Derecha: Ficha Técnica, Precio y BNA (5 cols) -->
      <div class="lg:col-span-5 flex flex-col justify-between">
        <div class="space-y-5">
          
          <!-- Bloque de Precio y Condiciones -->
          <div class="p-6 bg-[#FFFFFF] rounded-[24px] border border-black/[0.06] shadow-sm">
            <div class="text-[11px] uppercase tracking-wider font-label font-bold text-[#7D827C] mb-1">
              ${isEntrega ? 'Entrega inicial requerida' : (isConsultar ? 'Valor comercial' : 'Precio publicado')}
            </div>
            <div class="text-3xl md:text-4xl font-headline font-extrabold text-[#1E382B]">
              ${vehicle.priceDisplay}
            </div>
            <p class="text-xs text-[#5E635D] mt-2 leading-relaxed font-body">
              ${vehicle.priceNote}
            </p>
          </div>

          <!-- Datos Clave en Grilla Técnica -->
          <div class="border border-black/[0.06] rounded-[20px] overflow-hidden bg-white">
            <div class="px-5 py-3 bg-[#FAF8F5] border-b border-black/[0.06] text-xs font-label uppercase tracking-wider font-bold text-[#1D201D]">
              Ficha Técnica
            </div>
            <div class="divide-y divide-black/[0.04] text-xs">
              <div class="px-5 py-2.5 flex justify-between">
                <span class="text-[#727771]">Kilometraje</span>
                <span class="font-mono-data font-bold text-[#1D201D]">${vehicle.kmDisplay}</span>
              </div>
              <div class="px-5 py-2.5 flex justify-between">
                <span class="text-[#727771]">Motor</span>
                <span class="font-bold text-[#1D201D]">${vehicle.engine}</span>
              </div>
              <div class="px-5 py-2.5 flex justify-between">
                <span class="text-[#727771]">Transmisión</span>
                <span class="font-bold text-[#1D201D]">${vehicle.transmission}</span>
              </div>
              <div class="px-5 py-2.5 flex justify-between">
                <span class="text-[#727771]">Tracción</span>
                <span class="font-bold text-[#1D201D]">${vehicle.drivetrain}</span>
              </div>
              <div class="px-5 py-2.5 flex justify-between">
                <span class="text-[#727771]">Combustible</span>
                <span class="font-bold text-[#1D201D]">${vehicle.fuel}</span>
              </div>
              <div class="px-5 py-2.5 flex justify-between">
                <span class="text-[#727771]">Color</span>
                <span class="font-bold text-[#1D201D]">${vehicle.color}</span>
              </div>
            </div>
          </div>

          <!-- Bloque Financiación Banco Nación -->
          <div class="p-5 rounded-[20px] bg-[#EBF4FA] border border-[#CCE2F0]">
            <div class="flex items-center gap-2 mb-2">
              <span class="material-symbols-outlined text-[#0E5C8A]">account_balance</span>
              <h5 class="text-xs uppercase tracking-wider font-label font-bold text-[#0E5C8A]">
                Financiación Banco Nación
              </h5>
            </div>
            <p class="text-xs text-[#2A526E] leading-relaxed mb-3 font-body">
              Hasta 100% financiado o saldo en cuotas fijas en pesos / UVA. Consulta con DNI sin compromiso de compra.
            </p>
            <div class="text-[11px] text-[#446A85] flex items-center gap-1.5 font-mono-data">
              <span class="material-symbols-outlined text-[15px]">schedule</span>
              <span>12 a 60 meses · Tasa diferencial Río Gallegos</span>
            </div>
          </div>

        </div>

        <!-- Botón de Conversión WhatsApp -->
        <div class="mt-6 pt-5 border-t border-black/[0.06] space-y-3">
          <a 
            href="${buildWhatsAppLink(vehicle)}" 
            target="_blank" 
            rel="noopener"
            class="btn-whatsapp w-full py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-label font-bold shadow-md">
            <span class="material-symbols-outlined text-xl">chat</span>
            <span>Consultar por WhatsApp (${RGL_WHATSAPP_DISPLAY})</span>
          </a>
          <p class="text-[11px] text-center text-[#7C817B] font-body">
            Respuesta inmediata de nuestro equipo en Río Gallegos.
          </p>
        </div>

      </div>

    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function changeModalImage(url, caption) {
  const mainImg = document.getElementById('modal-main-image');
  const captionEl = document.getElementById('modal-image-caption');
  if (mainImg) mainImg.src = url;
  if (captionEl) captionEl.textContent = caption;
}

function closeVehicleModal() {
  const modal = document.getElementById('vehicle-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function setupModalHandlers() {
  const modal = document.getElementById('vehicle-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeVehicleModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVehicleModal();
      closeLeadModal();
      const drawer = document.getElementById('menu-drawer');
      if (drawer && !drawer.classList.contains('-translate-x-full')) {
        toggleMenuDrawer();
      }
    }
  });
}

/**
 * 07. Navegación y Rutas SPA
 */
function setupRoutingAndNavigation() {
  const links = document.querySelectorAll('[data-view-target]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-view-target');
      switchView(target);
    });
  });

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
}

function switchView(viewName) {
  const views = document.querySelectorAll('.view-panel');
  const navLinks = document.querySelectorAll('[data-view-target]');

  views.forEach(v => {
    if (v.id === `view-${viewName}`) {
      v.classList.add('active');
    } else {
      v.classList.remove('active');
    }
  });

  navLinks.forEach(l => {
    if (l.getAttribute('data-view-target') === viewName) {
      l.classList.add('text-[#1E382B]', 'font-bold');
    } else {
      l.classList.remove('text-[#1E382B]', 'font-bold');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  }
}

function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith('#auto/')) {
    const carId = hash.replace('#auto/', '');
    openVehicleModal(carId);
  } else if (hash === '#catalogo') {
    switchView('catalogo');
  } else if (hash === '#vender' || hash === '#vende-tu-auto') {
    switchView('home');
    setTimeout(() => {
      const el = document.getElementById('vender');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  } else if (hash === '#financiacion') {
    switchView('home');
    setTimeout(() => {
      const el = document.getElementById('financiacion');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  } else {
    switchView('home');
  }
}

/**
 * 08. Asistente Virtual IA
 */
function setupAiAssistant() {
  const toggleBtn = document.getElementById('ai-assistant-toggle');
  const chatWindow = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('ai-chat-close');
  const chatMessages = document.getElementById('ai-chat-messages');
  const chatInput = document.getElementById('ai-chat-input');
  const sendBtn = document.getElementById('ai-chat-send');
  const quickPills = document.querySelectorAll('[data-quick-prompt]');

  if (!toggleBtn || !chatWindow) return;

  toggleBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden') && chatInput) {
      chatInput.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });
  }

  const addMessage = (sender, text) => {
    const isUser = sender === 'user';
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`;
    msgDiv.innerHTML = `
      <div class="max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${isUser
        ? 'bg-[#1E382B] text-white rounded-br-none'
        : 'bg-[#F2EFE9] text-[#1D201D] border border-black/5 rounded-bl-none'
      }">
        ${text}
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const getBotResponse = (prompt) => {
    const p = prompt.toLowerCase();
    if (p.includes('bna') || p.includes('banco') || p.includes('financ')) {
      return "Trabajamos con líneas de crédito de Banco Nación para autos usados y nuevos, con financiación de hasta el 100% o sobre el saldo restante. Los plazos van de 12 a 60 cuotas en pesos fijas o UVA. ¿Querés que un asesor te pase la simulación exacta por WhatsApp?";
    }
    if (p.includes('permuta') || p.includes('toman') || p.includes('vendo') || p.includes('usado')) {
      return "¡Sí! Tomamos vehículos usados en parte de pago (permuta) previa inspección en nuestro salón de Río Gallegos. También podés dejar tu auto en consignación.";
    }
    if (p.includes('compass') || p.includes('jeep')) {
      return "El Jeep Compass Limited 1.3 Turbo 2025 está impecable (~11.293 km, cuero y techo panorámico). Podés coordinar para probarlo hoy mismo en nuestro local o consultar valor por WhatsApp al 2966-680024.";
    }
    if (p.includes('papeles') || p.includes('transferencia') || p.includes('requisitos')) {
      return "Para transferir solo necesitas tu DNI. Todas nuestras unidades cuentan con verificación policial, libre deudas e informe de dominio al día en el registro automotor de Río Gallegos.";
    }
    return "¡Gracias por tu consulta! Estoy a disposición para darte detalles de nuestro catálogo. También podés escribirnos al WhatsApp provisorio 2966-680024 para atención humana al instante.";
  };

  const handleSend = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage('user', text);
    chatInput.value = "";

    setTimeout(() => {
      const response = getBotResponse(text);
      addMessage('assistant', response);
    }, 400);
  };

  if (sendBtn) {
    sendBtn.addEventListener('click', handleSend);
  }

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const prompt = pill.getAttribute('data-quick-prompt');
      chatInput.value = prompt;
      handleSend();
    });
  });
}
