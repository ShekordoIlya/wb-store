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
  };
 
  const existingItemIndex = cartAdded.findIndex(item => item.id === productItem.id);

  if (existingItemIndex === -1) {
  
    createItem(productItem); 
    cartAdded.push(productItem); 
  } else {

    cartAdded[existingItemIndex].quantity += 1; 
  }

  setItemsInStorage(cartAdded); 
  updateCartCount(); //
  updateTotalSum(); 
}
