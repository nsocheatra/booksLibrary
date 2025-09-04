  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("[data-collapse-toggle]");
    const menu = document.getElementById("navbar-sticky");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });


const ProductArrival = document.getElementById("ProductArrival");
const BASE_URL = "https://api.itbook.store/1.0";

// Render book cards
function renderBooks(books) {
  ProductArrival.innerHTML = "";

  if (!books || books.length === 0) {
    ProductArrival.innerHTML = `<p class="text-red-500">No books found.</p>`;
    return;
  }

  books.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "w-full max-w-sm bg-white/15 border border-gray-200/20 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";

    card.innerHTML = `
        <img class="p-8 rounded-t-lg mx-auto" src="${item.image}" alt="${item.title}" />
      <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${item.subtitle}</p>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
          <button class="bg-blue-600 rounded-full px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    `;

    ProductArrival.appendChild(card);
  });
}

// Load new arrivals on page load
async function loadNewArrivals() {
  try {
    const response = await fetch(`${BASE_URL}/new`);
    const data = await response.json();
    renderBooks(data.books);
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    ProductArrival.innerHTML = `<p class="text-red-500">⚠️ Failed to load new arrivals.</p>`;
  }
}



// Search books
async function searchBooks(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/${query}`);
    const data = await response.json();
    renderBooks(data.books);
  } catch (error) {
    console.error("Error searching books:", error);
    ProductArrival.innerHTML = `<p class="text-red-500">⚠️ Failed to fetch search results.</p>`;
  }
}

// Event listener for search
document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("query").value.trim();
  if (query) {
    searchBooks(query);
  } else {
    loadNewArrivals();
  }
});

// Load arrivals when page starts
loadNewArrivals();
