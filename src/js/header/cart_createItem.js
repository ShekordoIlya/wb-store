import { cartStuff } from "./cart";
import { deleteItem } from "./cart_deleteItem";

export function createItem(productItem) {
  const itemWrap = document.createElement("div");
  itemWrap.className = "item-wrap";
  itemWrap.id = productItem.id;
  const itemContent = document.createElement("div");
  itemContent.className = "item-content";

  const itemImg = document.createElement("img");
  itemImg.src = productItem.image;

  const itemText = document.createElement("div");
  itemText.className = "item-text";

  const itemTitle = document.createElement("h3");
  itemTitle.className = "item-title";
  itemTitle.textContent = productItem.name;

  const itemPrice = document.createElement("p");
  itemPrice.className = "item-price";
  itemPrice.textContent = productItem.price;

  const itemDeleteBtn = document.createElement("button");
  itemDeleteBtn.type = "button";
  itemDeleteBtn.className = "item-delete-btn";
  itemDeleteBtn.addEventListener("click", deleteItem);

  itemContent.append(itemImg, itemTitle, itemPrice, itemDeleteBtn);
  itemWrap.append(itemContent);
  cartStuff.append(itemWrap);
}
