// ========================================
// ELEMENTOS DEL DOM
// ========================================
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const resultsContainer = document.getElementById('resultsContainer');
const resultsHeader = document.getElementById('resultsHeader');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const initialState = document.getElementById('initialState');
const quickFilters = document.getElementById('quickFilters');
const chips = document.querySelectorAll('.chip');

// ========================================
// ESTADO DE LA APLICACIÓN
// ========================================
let currentFilter = 'todos';
let searchTerm = '';

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Normaliza texto para búsqueda (sin acentos, minúsculas)
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Filtra extensiones según término de búsqueda y piso
 */
function filterExtensions(data, term, floor) {
  const normalizedTerm = normalizeText(term);

  return data.filter(item => {
    // Filtro por piso
    const floorMatch = floor === 'todos' || item.piso === floor;

    // Filtro por búsqueda
    const searchMatch = term === '' ||
      normalizeText(item.nombre).includes(normalizedTerm) ||
      item.extension.includes(term) ||
      normalizeText(item.piso).includes(normalizedTerm) ||
      (item.sala && normalizeText(item.sala).includes(normalizedTerm));

    return floorMatch && searchMatch;
  });
}

/**
 * Crea el HTML de una tarjeta de resultado
 */
function createResultCard(item) {
  const floorBadgeText = item.piso === 'Planta Baja' ? 'PB' :
    item.piso.replace('Piso ', '');

  const salaHTML = item.sala ?
    `<div class="result-sala">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px; height: 14px;">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ${item.sala}
    </div>` : '';

  const isNotario = item.nombre.toLowerCase().includes('omar lozano');
  const nameClass = isNotario ? 'result-name notario-name' : 'result-name';

  return `
    <div class="result-card" data-floor="${item.piso}" style="animation-delay: ${Math.random() * 0.1}s">
      <div class="result-header">
        <div>
          <h3 class="${nameClass}">${item.nombre}</h3>
        </div>
        <div class="result-floor-badge" data-floor="${item.piso}">
          ${floorBadgeText}
        </div>
      </div>
      <div class="result-info">
        <div class="result-extension">
          <svg class="extension-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          ${item.extension}
        </div>
        <div class="result-floor">${item.piso}</div>
        ${salaHTML}
      </div>
    </div>
  `;
}

/**
 * Renderiza los resultados en el DOM
 */
function renderResults(filteredData) {
  // Ocultar estado inicial
  initialState.style.display = 'none';

  // Si no hay resultados
  if (filteredData.length === 0) {
    resultsHeader.style.display = 'none';
    resultsContainer.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  // Mostrar resultados
  noResults.style.display = 'none';
  resultsHeader.style.display = 'flex';
  resultsCount.textContent = `${filteredData.length} ${filteredData.length === 1 ? 'resultado' : 'resultados'}`;

  resultsContainer.innerHTML = filteredData
    .map(item => createResultCard(item))
    .join('');
}

/**
 * Maneja la búsqueda
 */
function handleSearch() {
  searchTerm = searchInput.value.trim();

  // Mostrar/ocultar botón de limpiar
  clearBtn.style.display = searchTerm ? 'flex' : 'none';

  // Si no hay búsqueda ni filtro, mostrar estado inicial
  if (searchTerm === '' && currentFilter === 'todos') {
    initialState.style.display = 'block';
    resultsHeader.style.display = 'none';
    resultsContainer.innerHTML = '';
    noResults.style.display = 'none';
    return;
  }

  // Filtrar y mostrar resultados
  const filtered = filterExtensions(extensionesData, searchTerm, currentFilter);
  renderResults(filtered);
}

/**
 * Limpia la búsqueda
 */
function clearSearch() {
  searchInput.value = '';
  searchTerm = '';
  clearBtn.style.display = 'none';
  currentFilter = 'todos';
  chips.forEach(chip => chip.classList.remove('active'));
  handleSearch();
  searchInput.focus();
}

// ========================================
// EVENT LISTENERS
// ========================================

// Búsqueda en tiempo real
searchInput.addEventListener('input', handleSearch);

// Limpiar búsqueda
clearBtn.addEventListener('click', clearSearch);

// Tarjetas de Pisos (clickeables)
const floorItems = document.querySelectorAll('.floor-item');
floorItems.forEach(item => {
  item.addEventListener('click', () => {
    const piso = item.dataset.piso;
    if (piso) {
      // Buscar el chip correspondiente y activarlo
      const correspondingChip = Array.from(chips).find(chip => chip.dataset.piso === piso);
      if (correspondingChip) {
        correspondingChip.click();
        // Scroll suave a la sección de resultados
        document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Modal QR
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const closeQrModal = document.getElementById('closeQrModal');

// Abrir modal
if (qrBtn) {
  qrBtn.addEventListener('click', () => {
    qrModal.style.display = 'flex';
  });
}

// Cerrar modal
if (closeQrModal) {
  closeQrModal.addEventListener('click', () => {
    qrModal.style.display = 'none';
  });
}

// Cerrar al hacer clic fuera
window.addEventListener('click', (e) => {
  if (e.target === qrModal) {
    qrModal.style.display = 'none';
  }
});

// Cerrar con Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && qrModal.style.display === 'flex') {
    qrModal.style.display = 'none';
  }
});

// Chips de Filtros Rápidos
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    // Si es el chip VIP (Notario)
    if (chip.dataset.search === 'omar lozano') {
      // Toggle
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        clearSearch();
      } else {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        searchInput.value = 'Omar Lozano';
        searchTerm = 'omar lozano';
        currentFilter = 'todos';
        clearBtn.style.display = 'flex';
        handleSearch();
      }
    }
    // Si es el chip VIP (Secretaria del Notario)
    else if (chip.dataset.search === 'lourdes') {
      // Toggle: si ya está activo, limpiamos
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        clearSearch();
      } else {
        // Desactivar otros chips de búsqueda
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        searchInput.value = 'Lourdes';
        searchTerm = 'Lourdes';
        currentFilter = 'todos';
        clearBtn.style.display = 'flex';
        handleSearch();
      }
    }
    // Si es el chip de sistemas
    else if (chip.dataset.search === 'sistemas') {
      // Toggle: si ya está activo, limpiamos
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        clearSearch();
      } else {
        // Desactivar otros chips de búsqueda
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        searchInput.value = 'sistemas';
        searchTerm = 'sistemas';
        currentFilter = 'todos';
        clearBtn.style.display = 'flex';
        handleSearch();
      }
    }
    // Si es un filtro de piso
    else if (chip.dataset.piso) {
      // Toggle: si ya está activo, limpiamos
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        searchInput.value = '';
        searchTerm = '';
        currentFilter = 'todos';
        clearBtn.style.display = 'none';
        handleSearch();
      } else {
        // Desactivar otros chips
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        searchInput.value = '';
        searchTerm = '';
        clearBtn.style.display = 'none';
        currentFilter = chip.dataset.piso;
        handleSearch();
      }
    }
  });
});

// Enter para enfocar primer resultado
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const firstCard = document.querySelector('.result-card');
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

// Navegación suave al hacer clic en el enlace de inicio
document.querySelector('a[href="#inicio"]').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Limpiar búsqueda y filtros
  searchInput.value = '';
  searchTerm = '';
  currentFilter = 'todos';
  clearBtn.style.display = 'none';
  initialState.style.display = 'block';
  resultsHeader.style.display = 'none';
  resultsContainer.innerHTML = '';
  noResults.style.display = 'none';
});

// ========================================
// INICIALIZACIÓN
// ========================================

// Auto-focus en el input al cargar
searchInput.focus();

// Log de información (para debugging)
console.log(`✅ Base de datos cargada: ${extensionesData.length} extensiones`);
console.log('📊 Distribución por piso:', {
  'Planta Baja': extensionesData.filter(e => e.piso === 'Planta Baja').length,
  'Piso 1': extensionesData.filter(e => e.piso === 'Piso 1').length,
  'Piso 2': extensionesData.filter(e => e.piso === 'Piso 2').length,
  'Piso 3': extensionesData.filter(e => e.piso === 'Piso 3').length,
  'Piso 4': extensionesData.filter(e => e.piso === 'Piso 4').length
});
