function setItemsInStorage(cartAdded) {
  localStorage.setItem("productItem", JSON.stringify(cartAdded));
}

function getItemFromStorage() {
  if (localStorage.getItem("productItem")) {
    return JSON.parse(localStorage.getItem("productItem"));
  }
  return [];
}

export { setItemsInStorage, getItemFromStorage };
