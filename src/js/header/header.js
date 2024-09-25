// create structure(global)

const header = document.createElement("header"),
  container = document.createElement("div"),
  headerWrap = document.createElement("div"),
  logo = document.createElement("div"),
  searchField = document.createElement("div"),
  cartButton = document.createElement("button");

// adding classes and attributes

header.className = "header";
container.className = "container";
headerWrap.className = "header-wrap";

// set attributes in inner header elements

// logo element

logo.className = "logo-wrap";
const logoLink = document.createElement("a");
logoLink.href = "#";
logoLink.className = "logo-link";
logoLink.textContent = "НЕ-Wildberries";
logo.append(logoLink);

// search field

searchField.className = "search-field-wrap";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.value = "Search ...";
searchInput.id = "search-input";
searchField.append(searchInput);

// button for cart

cartButton.id = "cart-button";
cartButton.type = "button";
cartButton.textContent = "Cart";

// create modal cart

const modal = document.createElement("div");
modal.className = "modal";
modal.id = "cart-modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const cartHead = document.createElement("div");
cartHead.className = "cart-head";

const cartTitle = document.createElement("h3");
cartTitle.className = "cart-title";
cartTitle.textContent = "Your Cart";

const cartClear = document.createElement("button");
cartClear.className = "cart-clear-btn";
cartClear.textContent = "Clear";

const cartStuff = document.createElement("div");
cartStuff.className = "cart-stuff";

const totalSum = document.createElement("div");
totalSum.className = "total-sum";

const totalText = document.createElement("p");
totalText.textContent = "";
totalSum.append(totalText);

cartHead.append(cartTitle, cartClear);
modalContent.append(cartHead, cartStuff, totalSum);
modal.append(modalContent);

// add elements in document

const body = document.querySelector("body");

headerWrap.append(logo, searchField, cartButton);
container.append(headerWrap);
header.append(container);
body.append(modal);
body.prepend(header);

export { header, modal };
