const body = document.querySelector("body");

// button for cart
const cartButton = document.createElement("button");

cartButton.id = "cart-button";
cartButton.type = "button";
cartButton.textContent = "Cart";

// create modal cart

const modal = document.createElement("div");
modal.className = "modal";
modal.id = "cart-modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const cartHead = document.createElement("div");
cartHead.className = "cart-head";

const cartTitle = document.createElement("h3");
cartTitle.className = "cart-title";
cartTitle.textContent = "Your Cart";

const cartClear = document.createElement("button");
cartClear.className = "cart-clear-btn";
cartClear.textContent = "Clear cart";

const close = document.createElement("div");
const closeWrap = document.createElement("div");
closeWrap.className = "close-wrap";
close.className = "cart-close-btn";
close.append(closeWrap);

const cartStuff = document.createElement("div");
cartStuff.className = "cart-stuff";

const totalSum = document.createElement("div");
totalSum.className = "total-sum";

const totalText = document.createElement("p");
totalText.textContent = "";
totalSum.append(totalText);

cartHead.append(cartTitle, cartClear, close);
modalContent.append(cartHead, cartStuff, totalSum);
modal.append(modalContent);

function showModal() {
  body.classList.add("modal-open");
  modal.style.display = "block";
}

function closeModal() {
  body.classList.remove("modal-open");
  modal.style.display = "none";
}

close.addEventListener("click", closeModal);
cartButton.addEventListener("click", showModal);

export { modal, cartButton };
