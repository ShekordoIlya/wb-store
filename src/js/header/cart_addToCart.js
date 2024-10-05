import { cartAdded, updateCartCount } from "./cart"; // Импортируем updateCartCount
import { createItem } from "./cart_createItem";
import { setItemsInStorage } from "./cart_storageGetSet";

export function addToCart(card) {
  const productItem = {
    id: card.id,
    name: card.name,
    price: card.price,
    discount: card.discount,
    image: card.images,
  };
  createItem(productItem);
  cartAdded.push(productItem);
  setItemsInStorage(cartAdded);
  updateCartCount(); // Обновляем количество при добавлении
}
