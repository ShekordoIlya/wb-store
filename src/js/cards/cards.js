import { addToCart } from "../header/cart_addToCart";
import { cardScale } from "./cards_scale";
import { cardUnScale } from "./cards_scale";
import { sliderContainer } from "../slider/slider";
import { moveToCartAnimation } from "./cards_animation.js";
import { cartButton } from "../header/cart";

// Создание элемента HTML
const sectionCards = document.createElement("section");
sectionCards.className = "section-cards";

const containerCards = document.createElement("div");
containerCards.className = "container-cards";

const cardsWrapper = document.createElement("div");
cardsWrapper.className = "cards-wrapper";

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
  // Обёртка для карточки
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "card-wrapper";
  cardWrapper.id = card.id;
  cardWrapper.setAttribute("data-name", `${card.name}`);

  const cardWrapperSwitch = ["card-wrapper", "card-wrapper-click"];
  let countEl = 0;

  cardWrapper.addEventListener("click", (e) => {
    e.stopPropagation(); 
    cardScale(); 

  
    const prev = countEl;
    countEl++;
    if (countEl >= cardWrapperSwitch.length) {
      countEl = 0;
      cardUnScale();
    }
    cardWrapper.classList.remove(cardWrapperSwitch[prev]);
    cardWrapper.classList.add(cardWrapperSwitch[countEl]);

 
    document.addEventListener("click", handleOutsideClick);

    function handleOutsideClick(e) {
   
      if (!cardWrapper.contains(e.target)) {
        cardUnScale(); 
        cardWrapper.classList.remove(cardWrapperSwitch[countEl]); 
        cardWrapper.classList.add(cardWrapperSwitch[0]); 
        countEl = 0; 
        document.removeEventListener("click", handleOutsideClick); 
      }
    }
  });

  // Основная карточка
  const cardMain = document.createElement("div");
  cardMain.className = "card";

  // Изображение товара
  const cardImg = document.createElement("img");
  cardImg.src = card.images;
  cardImg.alt = card.name;
  cardImg.className = card.name;

  // Скидка
  const discountCard = document.createElement("p");
  discountCard.textContent = card.discount + " byn";

  // Кнопка добавления в корзину
  const cardBtn = document.createElement("button");
  cardBtn.type = "button";
  cardBtn.className = "card-button";
  cardBtn.textContent = "Add to cart";

  cardBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    addToCart(card);
    let item;
    if (e.target.closest(".card-wrapper")) {
      item = e.target.closest(".card-wrapper");
    } else if (e.target.closest(".card-wrapper-click")) {
      item = e.target.closest(".card-wrapper-click");
    }
    moveToCartAnimation(item, cartButton);
  });

  // Цена товара
  const cardPrice = document.createElement("p");
  cardPrice.textContent = card.price + " byn";

  // Название товара
  const cardItemName = document.createElement("p");
  cardItemName.textContent = card.name;

  // Добавление элементов в HTML
  cardMain.append(cardImg, discountCard, cardBtn);
  cardWrapper.append(cardMain, cardPrice, cardItemName);
  cardsWrapper.append(cardWrapper);

  // Убедимся, что контейнер карточек не дублируется
  if (!document.querySelector(".cards-wrapper")) {
    containerCards.append(cardsWrapper);
    sectionCards.append(containerCards);
    sliderContainer.after(sectionCards);
  }
}

export { sectionCards };
