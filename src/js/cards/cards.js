// Created element of html
const sectionCards = document.createElement("section");

const containerCards = document.createElement("div");

const cardsWrapper = document.createElement("div");

window.addEventListener("DOMContentLoaded", () => {
  createCard();
});

// async function getData() {
//   const res = await fetch(
//     "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards"
//   );
//   const data = await res.json();
//   data.foreach((item) => {
//     cards.push(item);
//   });
// }

// getData();

let cards = [];

fetch("https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((item) => {
      console.log(item);
    })
  );

// cards.forEach(() => console.log());

function createCard() {
  //Cards wrappers
  const cardOneWrapper = document.createElement("div");
  // const cardTwoWrapper = document.createElement("div");
  // const cardThreeWrapper = document.createElement("div");
  // const cardFourWrapper = document.createElement("div");
  // const cardFiveWrapper = document.createElement("div");
  // const cardSixWrapper = document.createElement("div");

  //Cards
  const cardOne = document.createElement("div");
  // const cardTwo = document.createElement("div");
  // const cardThree = document.createElement("div");
  // const cardFour = document.createElement("div");
  // const cardFive = document.createElement("div");
  // const cardSix = document.createElement("div");

  //Item image
  const cardImgOne = document.createElement("img");
  // const cardImgTwo = document.createElement("img");
  // const cardImgThree = document.createElement("img");
  // const cardImgFour = document.createElement("img");
  // const cardImgFive = document.createElement("img");
  // const cardImgSix = document.createElement("img");

  //Item discount
  const discountCardOne = document.createElement("p");
  // const discountCardTwo = document.createElement("p");
  // const discountCardThree = document.createElement("p");
  // const discountCardFour = document.createElement("p");
  // const discountCardFive = document.createElement("p");
  // const discountCardSix = document.createElement("p");

  //Cards buttons
  const cardBtnOne = document.createElement("button");
  // const cardBtnTwo = document.createElement("button");
  // const cardBtnThree = document.createElement("button");
  // const cardBtnFour = document.createElement("button");
  // const cardBtnFive = document.createElement("button");
  // const cardBtnSix = document.createElement("button");

  //Item price
  const cardPriceOne = document.createElement("p");
  // const cardPriceTwo = document.createElement("p");
  // const cardPriceThree = document.createElement("p");
  // const cardPriceFour = document.createElement("p");
  // const cardPriceFive = document.createElement("p");
  // const cardPriceSix = document.createElement("p");

  //Item name
  const cardOneItemName = document.createElement("p");
  // const cardTwoItemName = document.createElement("p");
  // const cardThreeItemName = document.createElement("p");
  // const cardFourItemName = document.createElement("p");
  // const cardFiveItemName = document.createElement("p");
  // const cardSixItemName = document.createElement("p");

  //Adding into html
  //Getting body element
  const bodyElement = document.querySelector("body");

  bodyElement.append(sectionCards);

  sectionCards.append(containerCards);

  containerCards.append(cardsWrapper);

  cardsWrapper.append(cardOneWrapper);
  cardOneWrapper.append(cardOne, cardPriceOne, cardOneItemName);
  // cardTwoWrapper.append(cardTwo, cardPriceTwo, cardTwoItemName);
  // cardThreeWrapper.append(cardThree, cardPriceThree, cardThreeItemName);
  // cardFourWrapper.append(cardFour, cardPriceFour, cardFourItemName);
  // cardFiveWrapper.append(cardFive, cardPriceFive, cardFiveItemName);
  // cardSixWrapper.append(cardSix, cardPriceSix, cardSixItemName);

  cardOne.append(cardImgOne, discountCardOne, cardBtnOne);
  // cardTwo.append(cardImgTwo, discountCardTwo, cardBtnTwo);
  // cardThree.append(cardImgThree, discountCardThree, cardBtnThree);
  // cardFour.append(cardImgFour, discountCardFour, cardBtnFour);
  // cardFive.append(cardImgFive, discountCardFive, cardBtnFive);
  // cardSix.append(cardImgSix, discountCardSix, cardBtnSix);
}
export { sectionCards };
