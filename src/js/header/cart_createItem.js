import { cartAdded, cartStuff, updateCartCount } from "./cart"; // Импортируем updateCartCount
import { setItemsInStorage } from "./cart_storageGetSet";
import { renderCart } from "./cart_addToCart";

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

  const quantityWrap = document.createElement("div");
  quantityWrap.className = "quantity-wrap";

  const quantityMinus = document.createElement("button");
  quantityMinus.id = "minus";
  quantityMinus.className = "quantity-btn";
  quantityMinus.type = "button";
  quantityMinus.textContent = "-";

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
  quantityPlus.textContent = "+";

  quantityWrap.append(quantityMinus, itemQuantity, quantityPlus);

  const itemPrice = document.createElement("p");
  itemPrice.className = "item-price";
  itemPrice.textContent = productItem.price + ` BYN`;

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

  itemContent.append(
    itemImg,
    itemTitle,
    quantityWrap,
    itemPrice,
    itemDeleteBtn
  );
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
