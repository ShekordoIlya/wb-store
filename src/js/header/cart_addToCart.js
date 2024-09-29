import { cartAdded } from "./cart";

export function addToCart() {
  const productItem = {
    id: this.id,
    name: this.name,
    price: this.price,
    discount: this.discount,
    image: this.images,
  };
  createItem(productItem);
  cartAdded.push(productItem);
  setItemsInStorage(cartAdded);
}
