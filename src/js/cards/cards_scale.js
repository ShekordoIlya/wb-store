// import { body } from "../header/header";
import { showModal, modalContent } from "../header/modalWindow";
import { addToCart } from "../header/cart_addToCart";
import { cartContent } from "../header/cartContent";

// function cardScale() {
//   body.classList.add("modal-open");
// }

// function cardUnScale() {
//   body.classList.remove("modal-open");
// }

// export { cardScale, cardUnScale };

//////////////////////////////////////////////////////////////////////////////////////
// const cardModalContext =  {
//     id:card.id,
//     img:card.img,
//     title:card.title,
//     price:card.price,
//     description:card.description,
//   }

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

const contentPriceWrap = document.createElement("div");
contentPriceWrap.className = "content-price-wrap";
const contentPrice = document.createElement("p");

contentDescrWrap.append(contentDescr);

contentPriceWrap.append(contentPrice);

const cardModalBtn = document.createElement("button");
cardModalBtn.type = "button";
cardModalBtn.className = "card-modal-button";
cardModalBtn.textContent = "Add to cart";

contentInfoWrap.append(contentTitle, contentDescrWrap, contentPriceWrap);
cardContent.append(contentImgWrap, contentInfoWrap, cardModalBtn);
modalContent.append(cardContent);

function createModalCard(card) {
  cardContent.id = card.id;
  contentImg.src = card.images;
  contentTitle.textContent = card.name;
  contentDescr.textContent = card.description;
  contentPrice.textContent = card.price + " byn";
  cardModalBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    addToCart(card);
  });

  cartContent.style.display = "none";
  cardContent.style.display = "flex";
  showModal();
}

export { createModalCard, cardContent };
