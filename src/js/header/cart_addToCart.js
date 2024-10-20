import { cartAdded, updateCartCount, updateTotalSum } from "./cartContent";
import { createItem } from "./cart_createItem";
import { getItemFromStorage, setItemsInStorage } from "./cart_storageGetSet";

let cartAdded = getItemFromStorage();

export function addToCart(card) {
  const productItem = {
    id: card.id,
    name: card.name,
    price: card.discount ? card.discount : card.price,
    discount: card.discount,
    image: card.images,
    quantity: 1,
    description: card.description,
  };

  let existingProduct = cartAdded.find((item) => item.id === card.id);

  if (existingProduct) {
    existingProduct.quantity += productItem.quantity;
    existingProduct.price += productItem.discount;
  } else {
    cartAdded.push(productItem);
  }
  setItemsInStorage(cartAdded);

  renderCart(cartAdded);
}

export function renderCart(cartAdded) {
  const cartElement = document.getElementById("cart-stuff");
  cartElement.innerHTML = "";

  cartAdded.forEach((item) => {
    createItem(item);
  });
  updateCartCount();
  updateTotalSum();
}
