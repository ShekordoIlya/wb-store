import { updateVisibility } from "./search_updateVisibility";
import { searchOptions } from "./searchField";
const productCards = document.querySelectorAll(".card-wrapper");

export function displayOptions() {
  const searchValue = this.value.trim().toLowerCase();
  const productCards = document.querySelectorAll(".card-wrapper");
  console.log(searchValue, "value");
  const li = document.createElement("li");
  li.className = "option-item";
  li.textContent = "";
  searchOptions.style.display = "none";

  const options = [];
  console.log(productCards, "productcards");

  productCards.forEach((card) => {
    console.log(card);
    const productName = card.getAttribute("data-name").toLowerCase();
    console.log(productName, "name");
    if (productName.includes(searchValue)) {
      console.log(card, "card");
      options.push(card);
    }
  });

  if (!searchValue) {
    searchOptions.style.display = "none";
    searchOptions.innerHTML = "";
    return;
  }
  console.log(options, " options");
  searchOptions.innerHTML = "";

  if (options.length === 0) {
    li.textContent = "No matches...";
    searchOptions.append(li);
    searchOptions.style.display = "block";
  } else {
    options.forEach((card) => {
      const productName = card.getAttribute("data-name").toLowerCase();
      const li = document.createElement("li");
      li.className = "option-item";
      li.textContent = productName;
      searchOptions.append(li);
      console.log(li.textContent);
      searchOptions.style.display = "block";
    });
    updateVisibility();
  }
}

export { productCards };
