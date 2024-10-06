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

  const existingItemIndex = cartAdded.findIndex(
    (item) => item.id === productItem.id
  );

  if (existingItemIndex === -1) {
    createItem(productItem);
    cartAdded.push(productItem);
  } else {
    cartAdded[existingItemIndex].quantity += 1;
  }

  setItemsInStorage(cartAdded);
  updateCartCount(); //
  updateTotalSum();
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
