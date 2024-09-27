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
  searchOptions.style.display = "none";
  searchInput.focus();
});

const url = "https://66f59298436827ced9746d10.mockapi.io/wb-store/marketplace/";

searchInput.addEventListener("input", function () {
  word.toLowerCase();
  searchOptions.innerHTML = "";

  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      const matches = data.filter((product) =>
        product.productname.toLowerCase().includes(word)
      );
      console.log(matches);
      displayResults(matches);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

function displayResults(arr) {
  if (word.length === 0) {
    searchOptions.style.display = "none";
    return;
  }

  if (arr.length > 0) {
    arr.forEach((match) => {
      const li = document.createElement("li");
      li.classList.add("option-item");
      li.textContent = match.name;
      li.addEventListener("click", () => {
        searchInput.value = match.name;
        searchOptions.style.display = "none";
      });
      searchOptions.appendChild(li);
    });
    searchOptions.style.display = "block";
  } else {
    const noMatches = document.createElement("li");
    noMatches.classList.add("no-matches");
    noMatches.textContent = "No Matches";
    searchOptions.appendChild(noMatches);
    searchOptions.style.display = "block";
  }
}

export { searchField };
