const showModalBtn = document.querySelector("#show-modal-btn");
const hideModalBtns = document.querySelectorAll(".hide-modal-btn");

const modal = document.querySelector(".modal-container");

showModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

for (let btn of hideModalBtns) {
  btn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}
