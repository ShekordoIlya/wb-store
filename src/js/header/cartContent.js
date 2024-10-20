import { getItemFromStorage, setItemsInStorage } from "./cart_storageGetSet";
import { cartCount } from "./header";
import { modalContent, showModal } from "./modalWindow";
import { cardContent } from "../cards/cards_scale";

// Creating content for cart to show in modal window
const cartContent = document.createElement("div");
cartContent.className = "cart-content";
cartContent.id = "cart-content";
cartContent.style.display = "none";

const cartHead = document.createElement("div");
cartHead.className = "cart-head";

const cartTitle = document.createElement("h3");
cartTitle.className = "cart-title";
cartTitle.textContent = "Your Cart";

const cartClear = document.createElement("button");
cartClear.className = "cart-clear-btn";
cartClear.textContent = "Clear cart";

cartClear.addEventListener("click", clearCart);

const cartStuff = document.createElement("div");
cartStuff.className = "cart-stuff";
cartStuff.id = "cart-stuff";

const totalSum = document.createElement("div");
totalSum.className = "total-sum";

const totalText = document.createElement("p");
totalText.textContent = "Total: 0 BYN";
totalSum.append(totalText);

cartHead.append(cartTitle, cartClear);
cartContent.append(cartHead, cartStuff, totalSum);
modalContent.append(cartContent);

let cartAdded = getItemFromStorage();

function clearCart() {
  cartAdded = [];
  setItemsInStorage(cartAdded);
  document.querySelector(".cart-stuff").innerHTML = "";
  updateCartCount();
  updateTotalSum();
}

function updateCartCount() {
  const itemCount = cartAdded.length;
  cartCount.textContent = `(${itemCount})`;
}

function updateTotalSum() {
  console.log(cartAdded);
  const total = cartAdded.reduce((acc, item) => acc + item.price, 0);

  totalText.textContent = `Total: ${total} BYN`;
}

function openCartModal() {
  cardContent.style.display = "none";
  cartContent.style.display = "block";
  showModal();
}

export {
  cartStuff,
  cartAdded,
  updateCartCount,
  updateTotalSum,
  openCartModal,
  cartContent,
}; // Экспортируем функцию
