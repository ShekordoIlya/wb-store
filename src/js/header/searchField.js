const searchField = document.createElement("div");
searchField.className = "search-field-wrap";
const clearBtn = document.createElement("div");
clearBtn.className = "clear-btn";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.value = "Search ...";
searchInput.id = "search-input";
searchField.append(searchInput, clearBtn);

searchInput.setAttribute("autocomplete", "off");

// Handle Enter key press
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchInput.value = "";
    event.preventDefault();
    getData(searchInput.value);
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

// function getData() {}

export { searchField };
