import { body } from "../header/cart";

function cardScale() {
  body.classList.add("modal-open");
}

function cardUnScale() {
  body.classList.remove("modal-open");
}

export { cardScale, cardUnScale };
