import { displayOptions } from "./search_displayOptions";

const searchField = document.createElement("div");
searchField.className = "search-field-wrap";
const clearBtn = document.createElement("div");
clearBtn.className = "clear-btn";
const searchBtn = document.createElement("button");
searchBtn.className = "search-button";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.value = "Search ...";
searchInput.id = "search-input";

const searchOptions = document.createElement("ul");
searchOptions.className = "options";
searchOptions.style.display = "none";

searchField.append(searchInput, clearBtn, searchOptions, searchBtn);

searchInput.setAttribute("autocomplete", "off");

// Handle Enter key press
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchInput.value = "";
    event.preventDefault();
  }
});

searchInput.addEventListener("focus", () => {
  searchInput.value = "";
});

// Handle clear button click
clearBtn.addEventListener("click", function () {
  searchInput.value = "";
  searchOptions.style.display = "none";
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  const card = e.target.closest(".option-item");
  if (card) {
    const cardName = card.textContent.trim().toLowerCase();
    const productCards = document.querySelectorAll(".card-wrapper");
    productCards.forEach((element) => {
      const targetName = element.getAttribute("data-name").trim().toLowerCase();
      if (targetName.includes(cardName)) {
        element.click();
        searchOptions.style.display = "none";
        searchInput.value = "Search ...";
      }
    });
  }
});

searchInput.addEventListener("keyup", displayOptions);

export { searchField, searchOptions, cardsArr };
