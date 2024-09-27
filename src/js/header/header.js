import { searchField } from "./searchField";
import { cartButton, modal } from "./cart";
// import { sectionCards } from "../cards/cardsTest";

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

// add elements in document

const body = document.querySelector("body");

headerWrap.append(logo, searchField, cartButton);
container.append(headerWrap);
header.append(container);
body.append(modal);
body.prepend(header);

export { header, modal };
