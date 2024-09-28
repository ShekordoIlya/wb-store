const searchField = document.createElement("div");
searchField.className = "search-field-wrap";
const clearBtn = document.createElement("div");
clearBtn.className = "clear-btn";

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

searchField.append(searchInput, clearBtn, searchOptions);

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
const url = "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards";
let inputLength = 0;

searchInput.addEventListener("input", async () => {
  inputLength = searchInput.value.length;
  updateVisibility();

  const meta = await fetch(url);
  const data = await meta.json();

  data.forEach((item) => {
    cardsArr.push(item);
  });
});

function getOptions(word, cardsArr) {
  return cardsArr.filter((p) => {
    const regex = new RegExp(word, "gi");
    return p.name.match(regex);
  });
}

function displayOptions() {
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

function updateVisibility() {
  const elements = searchOptions.querySelectorAll(".option-item");

  const seenTexts = new Set();

  elements.forEach((element) => {
    const text = element.textContent.trim();

    if (seenTexts.has(text)) {
      element.remove();
    } else {
      seenTexts.add(text);
    }
  });
}

searchInput.addEventListener("change", displayOptions);
searchInput.addEventListener("keyup", displayOptions);

export { searchField };
