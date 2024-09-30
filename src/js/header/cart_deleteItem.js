import { cartAdded } from "./cart";

export function deleteItem(e) {
  if (e.target.className === "item-delete-btn") {
    e.target.closest(".item-content").remove();
  }
  const filter = cartAdded.filter((item) => item.id !== item.id);
  setTodoInStorage(filter);
}
