const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (const planButton of selectPlanButtons) {
  planButton.addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

function closeModal() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
}

backdrop.addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", function () {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
