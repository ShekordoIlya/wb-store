import { modal } from "./cart";
import { body } from "./cart";

function showModal() {
  body.classList.add("modal-open");
  modal.style.display = "block";
  modal.classList.add("show");
}

function closeModal() {
  body.classList.remove("modal-open");
  modal.style.display = "none";
  modal.classList.remove("show");
}

export { showModal, closeModal };
