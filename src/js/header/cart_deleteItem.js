import { cartAdded } from "./cart";
import { setItemsInStorage } from "./cart_storageGetSet";

export function deleteItem(e) {
  if (e.target.className === "item-delete-btn") {
    e.target.closest(".item-wrap").remove();
  }
  const filter = cartAdded.filter((item) => item.id !== item.id);
  setItemsInStorage(filter);
}
