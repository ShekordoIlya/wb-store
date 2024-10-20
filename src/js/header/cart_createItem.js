import {
  cartAdded,
  cartStuff,
  updateCartCount,
  updateTotalSum,
} from "./cartContent";
import { setItemsInStorage } from "./cart_storageGetSet";
import { renderCart } from "./cart_addToCart";

document.addEventListener("DOMContentLoaded", () => {
  cartAdded.forEach((el) => {
    createItem(el);
  });
  updateCartCount();
  updateTotalSum();
});

export function createItem(productItem) {
  const itemWrap = document.createElement("div");
  itemWrap.className = "item-wrap";
  itemWrap.id = productItem.id;

  const itemContent = document.createElement("div");
  itemContent.className = "item-content";

  const imgWrap = document.createElement("div");
  imgWrap.className = "img-wrap";

  const itemImg = document.createElement("img");
  itemImg.src = productItem.image;
  imgWrap.append(itemImg);

  const itemInfo = document.createElement("div");
  itemInfo.className = "item-info";

  const itemTitle = document.createElement("h3");
  itemTitle.className = "item-title";
  itemTitle.textContent = productItem.name;
  const initPrice = document.createElement("p");
  initPrice.textContent = productItem.discount + " BYN";

  const quantityWrap = document.createElement("div");
  quantityWrap.className = "quantity-wrap";

  const quantityMinus = document.createElement("button");
  quantityMinus.id = "minus";
  quantityMinus.className = "quantity-btn";
  quantityMinus.type = "button";

  const itemQuantity = document.createElement("div");
  itemQuantity.className = "item-quantity";
  const itemNumber = document.createElement("p");
  itemNumber.id = "item-number";
  itemNumber.textContent = productItem.quantity;

  itemQuantity.append(itemNumber);

  const quantityPlus = document.createElement("button");
  quantityPlus.type = "button";
  quantityPlus.className = "quantity-btn";
  quantityPlus.id = "plus";

  quantityWrap.append(quantityMinus, itemQuantity, quantityPlus);

  const itemPrice = document.createElement("p");
  itemPrice.className = "item-price";
  itemPrice.textContent = productItem.price + ` BYN`;

  itemInfo.append(itemTitle, initPrice, quantityWrap, itemPrice);

  const itemDeleteBtn = document.createElement("button");
  itemDeleteBtn.type = "button";
  itemDeleteBtn.className = "item-delete-btn";

  // Удаление товара из корзины
  itemDeleteBtn.addEventListener("click", (el) => {
    const index = cartAdded.findIndex((item) => item.id === productItem.id);

    if (index !== -1) {
      cartAdded.splice(index, 1);
      itemWrap.remove();
      setItemsInStorage(cartAdded);
      updateCartCount();
      updateTotalSum();
    }
  });

  itemContent.append(imgWrap, itemInfo, itemDeleteBtn);
  itemWrap.append(itemContent);
  cartStuff.append(itemWrap);

  quantityWrap.addEventListener("click", (e) => {
    let productId = productItem.id;
    let currentQuantity = productItem.quantity;
    let currentPrice = productItem.discount;

    if (e.target.id === "minus") {
      if (currentQuantity > 1) {
        updateQuantity(
          productId,
          currentQuantity - 1,
          (currentQuantity - 1) * currentPrice
        );
      } else {
        updateQuantity(productId, currentQuantity, currentPrice);
      }
    } else if (e.target.id === "plus") {
      updateQuantity(
        productId,
        currentQuantity + 1,
        (currentQuantity + 1) * currentPrice
      );
    }
  });

  function updateQuantity(productId, newQuantity, newPrice) {
    let productMatch = cartAdded.find((item) => item.id === productId);

    if (productMatch) {
      productMatch.quantity = newQuantity;
      productMatch.price = newPrice;
      console.log(productMatch);
    } else {
      cartAdded.push({
        id: productId,
        quantity: newQuantity,
        price: newPrice,
      });
    }
    setItemsInStorage(cartAdded);
    renderCart(cartAdded);
  }
}
