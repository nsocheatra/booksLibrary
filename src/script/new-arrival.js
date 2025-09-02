const ProductArrival = document.getElementById("ProductArrival");
const BASE_URL = "https://api.itbook.store/1.0/new";

async function getProducts() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    ProductArrival.innerHTML = "";

    data.books.forEach((item) => {
      const card = document.createElement("div");
      card.className = "w-full max-w-sm bg-white/15 border border-gray-200/20 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";

      card.innerHTML = `
        <a href="${item.url}" target="_blank">
          <img class="p-8 rounded-t-lg mx-auto" src="${item.image}" alt="${item.title}" />
        </a>
        <div class="px-5 pb-5">
          <a href="${item.url}" target="_blank">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
          </a>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${item.subtitle || "No description available"}</p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
            <button class="button bg-blue-600 rounded-full px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
              <span class="label">+ Add to cart</span>
              <span class="gradient-container">
                <span class="gradient"></span>
              </span>
            </button>
          </div>
        </div>
      `;

      ProductArrival.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    ProductArrival.innerHTML = `<p class="text-red-500">Failed to load products.</p>`;
  }
}

getProducts();
