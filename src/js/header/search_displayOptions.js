import { updateVisibility } from "./search_updateVisibility";
import { getOptions } from "./search_getOptions";
import { cardsArr } from "./searchField";
import { searchOptions } from "./searchField";

export function displayOptions() {
  const inputValue = this.value.trim().toLowerCase();
  console.log("this.value >> ", inputValue);
  updateVisibility();

  if (!inputValue) {
    searchOptions.style.display = "none";
    searchOptions.innerHTML = "";
    return;
  }

  const options = getOptions(inputValue, cardsArr);

  searchOptions.innerHTML = "";
  if (options.length === 0) {
    searchOptions.innerHTML = '<li class="no-matches">No matches...</li>';
    searchOptions.style.display = "block";
  } else {
    const html = options
      .map((card) => {
        const regex = new RegExp(inputValue, "gi");
        const productName = card.name.replace(regex, `${inputValue}`);

        return `<li class="option-item">${productName}</li>`;
      })
      .slice(0, 6)
      .join("");

    searchOptions.innerHTML = html;
    searchOptions.style.display = "block";
  }
  updateVisibility();
}
