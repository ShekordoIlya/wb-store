import { updateVisibility } from "./search_updateVisibility";
import { displayOptions } from "./search_displayOptions";
import { cardScale, cardUnScale } from "../cards/cards_scale";

const url = "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards";
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

const noMatches = document.createElement("li");
noMatches.classList.add("no-matches");
noMatches.textContent = "No Matches";
noMatches.style.display = "none";

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

const cardsArr = [];
let inputLength = 0;

searchInput.addEventListener("input", async () => {
  inputLength = searchInput.value.length;
  updateVisibility();

  const meta = await fetch(url);
  const data = await meta.json();

  data.forEach((item) => {
    cardsArr.push(item);
  });
  console.log(data);
});

searchInput.addEventListener("change", displayOptions);
searchInput.addEventListener("keyup", displayOptions);

// searchInput.addEventListener("input", filterInput);

// function filterInput() {
//   const inputValue = this.value.toLowerCase;
//   console.log(inputValue);
// }

export { searchField, searchOptions, cardsArr };
