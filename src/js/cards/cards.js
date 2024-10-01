import { body } from "../header/cart";
import { addToCart } from "../header/cart_addToCart";
import { cardScale } from "./cards_scale";
import { cardUnScale } from "./cards_scale";

// Created element of html
const sectionCards = document.createElement("section");
sectionCards.className = "section-cards";

const containerCards = document.createElement("div");
containerCards.className = "container-cards";

const cardsWrapper = document.createElement("div");
cardsWrapper.className = "cards-wrapper";

const bodyElement = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  getData();
});

const url = "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards";
const options = {
  method: "GET",
  headers: { "content-type": "application/json" },
};
async function getData() {
  await fetch(url, options)
    .then((result) => result.json())
    .then((arr) => {
      arr.forEach((card) => {
        createCard(card);
      });
    });
}

function createCard(card) {
  //Cards wrappers
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "card-wrapper";
  cardWrapper.id = card.id;
  const cardWrapperSwitch = ["card-wrapper", "card-wrapper-click"];
  let countEl = 0;
  cardWrapper.addEventListener("click", () => {
    cardScale();
    const prev = countEl;
    countEl++;
    if (countEl >= cardWrapperSwitch.length) {
      countEl = 0;
      cardUnScale();
    }
    cardWrapper.classList.remove(cardWrapperSwitch[prev]);
    cardWrapper.classList.add(cardWrapperSwitch[countEl]);
  });

  //Cards
  const cardMain = document.createElement("div");
  cardMain.className = "card";

  //Item image
  const cardImg = document.createElement("img");
  cardImg.src = card.images;
  cardImg.alt = card.name;
  cardImg.className = card.name;

  //Item discount
  const discountCard = document.createElement("p");
  discountCard.textContent = card.discount + " byn";

  //Cards buttons
  const cardBtn = document.createElement("button");
  cardBtn.type = "button";
  cardBtn.className = "card-button";
  cardBtn.textContent = "Add to cart";
  cardBtn.addEventListener("click", () => addToCart(card));

  //Item price
  const cardPrice = document.createElement("p");
  cardPrice.textContent = card.price + " byn";
  //Item name
  const cardItemName = document.createElement("p");
  cardItemName.textContent = card.name;

  //Adding into html
  //Getting body element

  cardMain.append(cardImg, discountCard, cardBtn);
  cardWrapper.append(cardMain, cardPrice, cardItemName);
  cardsWrapper.append(cardWrapper);
  containerCards.append(cardsWrapper);
  sectionCards.append(containerCards);
  bodyElement.append(sectionCards);
}

const buttons = document.querySelectorAll(".card-button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let card = e.target.closest(".card-wrapper");
    console.log(card);
    addToCart(card);
  });
});

export { sectionCards };
