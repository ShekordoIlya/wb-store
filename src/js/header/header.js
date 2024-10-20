import { searchField } from "./searchField";
import { modalWindow, refreshModal, showModal } from "./modalWindow";
import { openCartModal } from "./cartContent";

const body = document.querySelector("body");
// create structure(global)

const header = document.createElement("header"),
  container = document.createElement("div"),
  headerWrap = document.createElement("div"),
  logo = document.createElement("div");

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

// Кнопка для открытия корзины
const cartButton = document.createElement("button");
cartButton.id = "cart-button";
cartButton.type = "button";
cartButton.textContent = "Cart";
cartButton.addEventListener("click", () => {
  openCartModal();
});

const cartCount = document.createElement("span");
cartCount.id = "cart-count";
cartCount.textContent = "(0)";
cartButton.appendChild(cartCount);

// add elements in document
headerWrap.append(logo, searchField, cartButton);
container.append(headerWrap);
header.append(container);
body.prepend(header);
body.append(modalWindow);

export { header, cartCount, body, cartButton };
