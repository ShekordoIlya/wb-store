import { cartAdded, updateCartCount, updateTotalSum } from "./cart";
import { createItem } from "./cart_createItem";
import { setItemsInStorage } from "./cart_storageGetSet";

export function addToCart(card) {
  const productItem = {
    id: card.id,
    name: card.name,
    price: card.discount ? card.discount : card.price,
    discount: card.discount,
    image: card.images,
    quantity: 1,
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

  setItemsInStorage(cartAdded);
  updateCartCount(); //
  updateTotalSum();
  renderCart(cartAdded);
  //     quantity: 1,
  //     price: card.discount,
  //     discount: card.discount,
  //     image: card.images,
  //   };
  //   let existingProduct = cartAdded.find((item) => item.id === card.id);

  //   if (existingProduct) {
  //     existingProduct.quantity += productItem.quantity;
  //     existingProduct.price += productItem.discount;
  //   } else {
  //     cartAdded.push(productItem);
  //   }
  //   setItemsInStorage(cartAdded);
  //   renderCart(cartAdded);

  //   updateCartCount(); // Обновляем количество при добавлении
}

export function renderCart(cartAdded) {
  const cartElement = document.getElementById("cart-stuff");
  cartElement.innerHTML = "";

  cartAdded.forEach((item) => {
    createItem(item);
  });
}
