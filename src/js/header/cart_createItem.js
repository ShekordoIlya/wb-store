import { cartAdded, cartStuff, updateCartCount } from "./cart"; // Импортируем updateCartCount
import { setItemsInStorage } from "./cart_storageGetSet";

document.addEventListener("DOMContentLoaded", () => {
  cartAdded.forEach((el) => {
    createItem(el);
  });
});

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
  
  itemDeleteBtn.addEventListener("click", (el) => {
    const index = cartAdded.findIndex((item) => item.id === productItem.id);
    
    if (index !== -1) { 
      cartAdded.splice(index, 1); 
      el.currentTarget.closest(".item-wrap").remove(); 
      setItemsInStorage(cartAdded); 
      updateCartCount(); 
    }
  });

  itemContent.append(itemImg, itemTitle, itemPrice, itemDeleteBtn);
  itemWrap.append(itemContent);
  cartStuff.append(itemWrap);
}
