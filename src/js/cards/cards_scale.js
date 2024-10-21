// import { body } from "../header/header";
import { showModal, modalContent } from "../header/modalWindow";
import { addToCart, renderCart } from "../header/cart_addToCart";
import { cartAdded, cartContent } from "../header/cartContent";
import { getItemFromStorage } from "../header/cart_storageGetSet";

// function cardScale() {
//   body.classList.add("modal-open");
// }

// function cardUnScale() {
//   body.classList.remove("modal-open");
// }

// export { cardScale, cardUnScale };

////////////////////////////////////////////////////////////////////

const cardContent = document.createElement("div");
cardContent.className = "card-content";

cardContent.style.display = "none";
const contentImgWrap = document.createElement("div");
contentImgWrap.className = "content-img-wrap";
const contentImg = document.createElement("img");
contentImg.classList = "content-img";
contentImgWrap.append(contentImg);
const contentInfoWrap = document.createElement("div");
contentInfoWrap.className = "content-info-wrap";

const contentTitle = document.createElement("h2");
contentTitle.className = "content-title";

const contentDescrWrap = document.createElement("div");
contentDescrWrap.className = "content-descr-wrap";
const contentDescr = document.createElement("p");

contentDescrWrap.append(contentDescr);

const quantityModalWrap = document.createElement("div");
quantityModalWrap.className = "quantity-modal-wrap";

const cardQuantity = document.createElement("div");
cardQuantity.className = "item-quantity";
const cardNumber = document.createElement("p");
cardNumber.id = "item-number";

cardQuantity.append(cardNumber);

quantityModalWrap.append(cardQuantity);
const contentPriceWrap = document.createElement("div");
contentPriceWrap.className = "content-price-wrap";
const contentPrice = document.createElement("p");

contentPriceWrap.append(contentPrice);

const cardModalBtn = document.createElement("button");
cardModalBtn.type = "button";
cardModalBtn.className = "card-modal-button";
cardModalBtn.textContent = "Add to cart";

contentInfoWrap.append(
  contentTitle,
  contentDescrWrap,
  quantityModalWrap,
  contentPriceWrap
);
cardContent.append(contentImgWrap, contentInfoWrap, cardModalBtn);
modalContent.append(cardContent);

function createModalCard(card) {
  cardContent.id = card.id;
  contentImg.src = card.images;
  contentTitle.textContent = card.name;
  contentDescr.textContent = card.description;

  console.log(card);

  contentPrice.textContent = card.discount + " byn";
  cardModalBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(card);
    console.log("after add");
    setQuantInModal(card);
    console.log("after setquant");
  });
  setQuantInModal(card);
  cartContent.style.display = "none";
  cardContent.style.display = "flex";
  showModal();
}

function setQuantInModal(card) {
  cartAdded = getItemFromStorage();
  let cardMatch = cartAdded.find((item) => card.id === item.id);
  console.log(cardMatch);
  if (cardMatch) {
    quantityModalWrap.style.display = "flex";
    currentCardQuantity = cardMatch.quantity;
    cardNumber.textContent = "In Cart: " + currentCardQuantity;
  } else {
    quantityModalWrap.style.display = "none";
  }
}

export { createModalCard, cardContent };
