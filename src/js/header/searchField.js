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

// const url = "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards";

// let products = [];

// async function getData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// getData();

// console.log(products);

// function getData() {}

export { searchField };
