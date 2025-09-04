  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("[data-collapse-toggle]");
    const menu = document.getElementById("navbar-sticky");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });


const categories = document.getElementById("categories");
const BASE_URL = "https://api.itbook.store/1.0/new";
let card = "";

async function getItems() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    data.books.forEach(item => { 
      card += `
      <div class="w-full max-w-sm bg-white/15 border border-gray-200/20 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img class="p-8 rounded-t-lg mx-auto" src="${item.image}" alt="${item.title}" />
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${item.subtitle}</p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
            <button class="button bg-blue-600 rounded-full px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
              <span class="label">View Details</span>
            </button>
          </div>
        </div>
      </div>
      `;
    });
    categories.innerHTML = card;
  } catch (error) {
    console.error("Error fetching products:", error);
    categories.innerHTML = `<p class="text-red-500">Failed to load products.</p>`;
  }
}
getItems();

const BASE_URL_PROGRAMMING = "https://api.itbook.store/1.0/search/programming";
const BASE_URL_DESIGN = "https://api.itbook.store/1.0/search/design";
const BASE_URL_BUSINESS = "https://api.itbook.store/1.0/search/business";
const BASE_URL_SCIENCE = "https://api.itbook.store/1.0/search/science";
const BASE_URL_GAMING = "https://api.itbook.store/1.0/search/gaming";
const BASE_URL_MUSIC = "https://api.itbook.store/1.0/search/music";
const BASE_URL_PHOTOGRAPHY = "https://api.itbook.store/1.0/search/photography";

document.getElementById("programming").addEventListener("click", () => getCategoryProducts(BASE_URL_PROGRAMMING));
document.getElementById("design").addEventListener("click", () => getCategoryProducts(BASE_URL_DESIGN));
document.getElementById("business").addEventListener("click", () => getCategoryProducts(BASE_URL_BUSINESS));
document.getElementById("science").addEventListener("click", () => getCategoryProducts(BASE_URL_SCIENCE));
document.getElementById("gaming").addEventListener("click", () => getCategoryProducts(BASE_URL_GAMING));
document.getElementById("music").addEventListener("click", () => getCategoryProducts(BASE_URL_MUSIC));
document.getElementById("photography").addEventListener("click", () => getCategoryProducts(BASE_URL_PHOTOGRAPHY));

async function getCategoryProducts(categoryUrl) {
  try {
    const response = await fetch(categoryUrl);
    const data = await response.json();
    let categoryCard = "";
    data.books.forEach((item) => {
      categoryCard += `
      <div class="w-full max-w-sm bg-white/15 border border-gray-200/20 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img class="p-8 rounded-t-lg mx-auto" src="${item.image}" alt="${item.title}" />
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${item.subtitle || "No description available"}</p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
            <button class="button bg-blue-600 rounded-full px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
              <span class="label">View Details</span>
            </button>
          </div>
        </div>
      </div>
      `;
    });
    categories.innerHTML = categoryCard;
  } catch (error) {
    console.error("Error fetching category products:", error);
    categories.innerHTML = `<p class="text-red-500">Failed to load category products.</p>`;
  }
}
