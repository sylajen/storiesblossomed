/**
 * clients-hub.js
 * Handles search, filtering, and rendering of client grid
 */

let filteredClients = [...CLIENTS_DATA];

// DOM Elements
const searchInput = document.getElementById('search-input');
const clientsGrid = document.getElementById('clients-grid');
const noResults = document.getElementById('no-results');
const searchTerm = document.getElementById('search-term');

/**
 * Render the clients grid
 */
function renderClients(clients) {
    clientsGrid.innerHTML = '';
    
    if (clients.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    clients.forEach(client => {
        const clientCard = createClientCard(client);
        clientsGrid.appendChild(clientCard);
    });

    // Recalculate masonry layout
    recalculateMasonry();
}

/**
 * Create individual client card element
 */
function createClientCard(client) {
    const card = document.createElement('div');
    card.className = 'client-card';
    
    const imageHTML = client.thumbnail 
        ? `<img 
            src="${client.thumbnail}" 
            alt="${client.name}" 
            class="card-image"
            onerror="this.src='../assets/placeholder-thumbnail.jpg'"
        >`
        : `<div class="card-image-placeholder"></div>`;
    
    // Get event names from events array
    const eventNames = client.events.map(e => typeof e === 'string' ? e : e.title).join(', ');
    
    card.innerHTML = `
        <a href="./${client.slug}" class="card-link">
            <div class="card-image-wrapper">
                ${imageHTML}
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <h3 class="card-name">${client.name}</h3>
                <p class="card-event">${eventNames}</p>
            </div>
        </a>
    `;
    return card;
}

/**
 * Filter clients based on search input
 */
function filterClients(query) {
    const searchQuery = query.toLowerCase().trim();
    
    if (searchQuery === '') {
        filteredClients = [...CLIENTS_DATA];
    } else {
        filteredClients = CLIENTS_DATA.filter(client => 
            client.name.toLowerCase().includes(searchQuery)
        );
    }

    // Update search hint
    updateSearchHint(searchQuery);
    
    renderClients(filteredClients);
}

/**
 * Update search hint text
 */
function updateSearchHint(query) {
    const hint = document.getElementById('search-hint');
    if (query === '') {
        hint.textContent = '';
    } else if (filteredClients.length === 1) {
        hint.textContent = `Found 1 match`;
    } else if (filteredClients.length > 1) {
        hint.textContent = `Found ${filteredClients.length} matches`;
    } else {
        searchTerm.textContent = query;
    }
}

/**
 * Calculate and adjust masonry grid layout
 * This creates the Pinterest-style layout
 */
function recalculateMasonry() {
    const cards = document.querySelectorAll('.client-card');
    if (cards.length === 0) return;

    // Get container width
    const container = document.querySelector('.clients-grid');
    const containerWidth = container.offsetWidth;
    
    // Calculate number of columns based on container width
    let columnCount;
    if (containerWidth < 600) {
        columnCount = 1;
    } else if (containerWidth < 1000) {
        columnCount = 2;
    } else {
        columnCount = 3;
    }

    // Set CSS grid columns
    container.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
}

/**
 * Event Listeners
 */
searchInput.addEventListener('input', (e) => {
    filterClients(e.target.value);
});

// Recalculate masonry on window resize
window.addEventListener('resize', recalculateMasonry);

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderClients(filteredClients);
});
