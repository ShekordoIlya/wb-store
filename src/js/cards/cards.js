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
  discountCard.textContent = card.discount;

  //Cards buttons
  const cardBtn = document.createElement("button");
  cardBtn.type = "button";

  //Item price
  const cardPrice = document.createElement("p");
  cardPrice.textContent = card.price;
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
export { sectionCards };
