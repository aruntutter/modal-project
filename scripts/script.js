"use strict";

// select all the required elements
const btnOpenModal = document.querySelector(".btn-open");
const btnCloseModal = document.querySelector(".btn-close");

const modalWindow = document.querySelector(".modal");

// add eventlistener
// btn open

// two ways to change the class name

// 1. rewrite the entire class

// btnOpenModal.addEventListener("click", () => {
//   // console.log(modalWindow.className);

//   modalWindow.className = "modal open";
// });

// // btn close
// btnCloseModal.addEventListener("click", () => {
//   modalWindow.className = "modal close";
// });

// 2. and/remove class

function openModal() {
  // remove close className
  modalWindow.classList.remove("close");
  // add open className
  modalWindow.classList.add("open");
}

function closeModal() {
  // remove open className
  modalWindow.classList.remove("open");
  // add close className
  modalWindow.classList.add("close");
}

// btn open modal
btnOpenModal.addEventListener("click", () => {
  openModal(); //this is callback function
});

// another way to call back the function --> this will also work
// btnOpenModal.addEventListener("click", openModal);

// btn close modal
btnCloseModal.addEventListener("click", () => {
  closeModal(); //this is callback function
});

// listening to keyboard events
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
