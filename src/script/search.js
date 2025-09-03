const searchButton = document.getElementById("searchButton");
const BASE_URL = "https://api.itbook.store/1.0/search/{query}";
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const query = document.getElementById("query").value.trim();
  if (query) {
    getSearch(query);
  } else {
    // Handle empty search query
    console.log("Please enter a search query.");
  }
});
