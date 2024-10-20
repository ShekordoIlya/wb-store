import { body } from "./header";

window.addEventListener("click", (e) => {
  if (e.target.closest(".modal-window show")) {
    closeModal();
  }
});

const modalWindow = document.createElement("div");
modalWindow.className = "modal-window";

const modal = document.createElement("div");
modal.className = "modal";

const close = document.createElement("div");
const closeWrap = document.createElement("div");
closeWrap.className = "close-wrap";
close.className = "modal-close-btn";
close.append(closeWrap);
close.addEventListener("click", closeModal);

const modalContent = document.createElement("div");
modalContent.className = "modal-content";
modalContent.id = "modal-content";

modal.append(close, modalContent);
modalWindow.append(modal);

function showModal() {
  body.classList.add("modal-open");
  modalWindow.style.display = "block";
  modalWindow.classList.add("show");
}

function closeModal() {
  body.classList.remove("modal-open");
  modalWindow.style.display = "none";
  modalWindow.classList.remove("show");
}

export { showModal, closeModal, modalWindow, modalContent, modal };
