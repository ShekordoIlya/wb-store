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

const li = document.createElement("li");
li.textContent = "1";

const noMatches = document.createElement("li");
noMatches.classList.add("no-matches");
noMatches.textContent = "No Matches";
noMatches.style.display = "none";

searchOptions.appendChild(li, noMatches);
searchField.append(searchInput, clearBtn, searchOptions);

const word = searchInput.value;

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
  searchInput.focus();
});

const cardsArr = [];
const url = "https://66f59298436827ced9746d10.mockapi.io/wb-store/marketplace/";

searchInput.addEventListener("input", async () => {
  const meta = await fetch(url);
  const data = await meta.json();

  data.forEach((item) => {
    cardsArr.push(item);
  });
});

function getOptions(word, cardsArr) {
  return cardsArr.filter((p) => {
    const regex = new RegExp(word, "gi");
    return p.productname.match(regex);
  });
}

function displayOptions() {
  console.log("this.value >> ", this.value);

  const options = getOptions(this.value, cardsArr);

  const html = options
    .map((card) => {
      const regex = new RegExp(this.value, "gi");
      const productName = card.productname.replace(regex, `${this.value}`);
      searchOptions.style.display = "block";
      li.classList.add("option-item");
      return (li.textContent = `${productName}`);
    })
    .slice(0, 10)
    .join("");

  searchOptions.innerHTML = this.value ? html : null;
}

searchInput.addEventListener("change", displayOptions);
searchInput.addEventListener("keyup", displayOptions);

export { searchField };
