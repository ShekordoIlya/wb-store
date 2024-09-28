// Created element of html
const sectionCards = document.createElement("section");

const containerCards = document.createElement("div");

const cardsWrapper = document.createElement("div");

const bodyElement = document.querySelector("body");

let cards = [];

window.addEventListener("DOMContentLoaded", () => {
  addData();
});

const url = "https://66f59298436827ced9746d10.mockapi.io/wb-store/marketplace";
async function getData() {
  const meta = await fetch(url);
  const data = await meta.json();
  console.log(data.name);
  // addData();
}
getData();

fetch(url, {
  method: "GET",
  headers: { "content-type": "application/json" },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }

    if (res && Array.isArray(res)) {
      res.forEach((item) => {
        console.log(item);
      });
    } else {
      console.error("Response is not an array or is undefined");
    }
  })
  .then((marketplace) => {
    addData(marketplace);
  })
  .catch((error) => {
    console.log("error");
  });

function addData(arr) {
  arr.forEach((card) => {
    createCard(card);
  });
}

function createCard(card) {
  //Cards wrappers
  const cardOneWrapper = document.createElement("div");

  //Cards
  const cardOne = document.createElement("div");

  //Item image
  const cardImgOne = document.createElement("img");
  cardImgOne.src = card.src;

  //Item discount
  const discountCardOne = document.createElement("p");
  discountCardOne.textContent = card.discount;

  //Cards buttons
  const cardBtnOne = document.createElement("button");

  //Item price
  const cardPriceOne = document.createElement("p");
  cardPriceOne.textContent = card.price;
  //Item name
  const cardOneItemName = document.createElement("p");
  cardOneItemName.textContent = card.productname;

  //Adding into html
  //Getting body element

  cardOne.append(cardImgOne, discountCardOne, cardBtnOne);
  cardOneWrapper.append(cardOne, cardPriceOne, cardOneItemName);
  cardsWrapper.append(cardOneWrapper);
  containerCards.append(cardsWrapper);
  sectionCards.append(containerCards);
  bodyElement.append(sectionCards);
}
export { sectionCards };
