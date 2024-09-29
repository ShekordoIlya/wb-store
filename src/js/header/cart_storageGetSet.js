function setItemsInStorage(cartAdded) {
  localStorage.setItem("productItem", JSON.stringify(cartAdded));
}

function getItemFromStorage() {
  if (localStorage.getItem("cartAdded")) {
    return JSON.parse(localStorage.getItem("cartAdded"));
  }
  return [];
}

export { setItemsInStorage, getItemFromStorage };
