// ---------- Notice search and category filter ----------

const searchInput = document.querySelector("#notice-search");
const categoryFilter = document.querySelector("#category-filter");
const noticeCards = document.querySelectorAll(".notice-card");
const noResults = document.querySelector("#no-results");
const currentYear = document.querySelector("#current-year");

function filterNotices() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  let visibleCount = 0;

  noticeCards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    const cardCategory = card.dataset.category;

    const matchesSearch = cardText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      cardCategory === selectedCategory;

    const shouldShow = matchesSearch && matchesCategory;

    card.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount++;
    }
  });

  // Display a message when no notice matches.
  noResults.hidden = visibleCount !== 0;
}

// Search notices while the user types.
searchInput.addEventListener("input", filterNotices);

// Filter notices when a category is selected.
categoryFilter.addEventListener("change", filterNotices);

// Update the footer year automatically.
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}