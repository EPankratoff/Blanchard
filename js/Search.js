document.addEventListener("DOMContentLoaded", (e) => {
  const searchButton = document.querySelector(".nav-btn");
  const searchForm = document.querySelector(".nav-form");
  const searchInput = document.querySelector(".nav-input");
  const closeButton = document.querySelector(".nav-close-btn");
  const navWrapper = document.querySelector(".header__secondary-wrapper");
  const navContainer = document.querySelector(".header__secondary-container");
  const burger = document.querySelector(".burger");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("nav-btn_active");
    searchInput.classList.add("nav-input_active");
    searchForm.classList.add("nav-form_active");
    closeButton.classList.add("nav-close-btn_active");
    navWrapper.classList.add("header__secondary_wrapper_active");
    navContainer.classList.add("header__secondary-container_active");
    if (
      document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientWidth <= 991
    ) {
      burger.style.display = "none";
    }
  });

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchButton.classList.remove("nav-btn_active");
    searchInput.classList.remove("nav-input_active");
    searchForm.classList.remove("nav-form_active");
    this.classList.remove("nav-close-btn_active");
    navWrapper.classList.remove("header__secondary_wrapper_active");
    navContainer.classList.remove("header__secondary-container_active");
    if (burger.style.display === "none") {
      burger.style.display = "flex";
    }
  });
});
