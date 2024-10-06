function setItemsInStorage(cartAdded) {
  localStorage.setItem("productItem", JSON.stringify(cartAdded));
}

function getItemFromStorage() {
  const items = localStorage.getItem("productItem");
  return items ? JSON.parse(items) : []; 
}

export { setItemsInStorage, getItemFromStorage };
