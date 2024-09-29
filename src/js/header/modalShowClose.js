import { modal } from "./cart";
import { body } from "./cart";

function showModal() {
  body.classList.add("modal-open");
  modal.style.display = "block";
}

function closeModal() {
  body.classList.remove("modal-open");
  modal.style.display = "none";
}

export { showModal, closeModal };
