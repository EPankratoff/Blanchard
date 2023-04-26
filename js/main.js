document.addEventListener("DOMContentLoaded", () => {
  const menuBtns = document.querySelectorAll(".menu__btn");
  const drops = document.querySelectorAll(".dropdown");
  menuBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest(".menu__item").querySelector(".dropdown");

      menuBtns.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("menu__btn--active");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("dropdown--active");
        }
      });

      drop.classList.toggle("dropdown--active");
      currentBtn.classList.toggle("menu__btn--active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu")) {
      menuBtns.forEach((el) => {
        el.classList.remove("menu__btn--active");
      });

      drops.forEach((el) => {
        el.classList.remove("dropdown--active");
      });
    }
  });

  const searchButton = document.querySelector(".nav-btn");
  const searchForm = document.querySelector(".nav-form");
  const searchInput = document.querySelector(".nav-input");
  const closeButton = document.querySelector(".nav-close-btn");
  const navWrapper = document.querySelector(".header__secondary_wrapper");
  const navContainer = document.querySelector(".header__secondary-container");
  const burger = document.querySelector(".burger");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("nav-btn_active");
    searchInput.classList.add("nav-input_active");
    searchForm.classList.add("nav-form_active");
    closeButton.classList.add("nav-close-btn_active");
    navWrapper.classList.add("header__secondary-wrapper_active");
    navContainer.classList.add("header__secondary-container_active");
    if (document.documentElement.clientWidth <= 991) {
      burger.style.display = "none";
    }
  });

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchButton.classList.remove("nav-btn_active");
    searchInput.classList.remove("nav-input_active");
    searchForm.classList.remove("nav-form_active");
    this.classList.remove("nav-close-btn_active");
    navWrapper.classList.remove("header__secondary-wrapper_active");
    navContainer.classList.remove("header__secondary-container_active");
    if (burger.style.display === "none") {
      burger.style.display = "flex";
    }
  });

  const selectList = document.querySelectorAll("dropdown__list");
  selectList.forEach(
    (el) =>
      new SimpleBar(el, {
        scrollbarMaxSize: 28,
      })
  );

  const heroSwiperContainer = document.querySelectorAll(".swiper-container")[0];

  new Swiper(heroSwiperContainer, {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 3000,
    effect: "fade",
  });

  const element = document.querySelector(".js-choice");

  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    position: "bottom",
    itemSelectText: "",
  });

  const gallreySwiperContainer =
    document.querySelectorAll(".swiper-container")[1];

  new Swiper(gallreySwiperContainer, {
    navigation: {
      nextEl: ".pagination-round_next",
      prevEl: ".pagination-round_prev",
    },
    pagination: {
      el: ".pagination__number",
      type: "fraction",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },

      991: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },

      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 100,
      },
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });

  if (document.documentElement.clientWidth >= 576) {
    const eventsSwiperContainer =
      document.querySelectorAll(".swiper-container")[2];

    new Swiper(eventsSwiperContainer, {
      navigation: {
        nextEl: ".pagination-round_next",
        prevEl: ".pagination-round_prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerGroup: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 25,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 35,
          slidesPerGroup: 2,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },

        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },
      a11y: {
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
      },
    });
  }

  if (document.documentElement.clientWidth >= 576) {
    const projectsSwiperContainer =
      document.querySelectorAll(".swiper-container")[3];

    new Swiper(projectsSwiperContainer, {
      navigation: {
        nextEl: ".pagination-round_next",
        prevEl: ".pagination-round_prev",
      },

      breakpoints: {
        320: {
          slidesPerColumnFill: "column",
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerGroup: 1,
          slidesPerColumn: 1,
        },

        576: {
          slidesPerView: 2,
          spaceBetween: 15,
          slidesPerGroup: 2,
          slidesPerColumn: 1,
        },

        992: {
          slidesPerView: 2,
          spaceBetween: 50,
          slidesPerGroup: 2,
        },

        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 35,
          slidesPerGroup: 2,
        },
      },

      a11y: {
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
      },
    });
  }
  const body = document.querySelector("body");
  const windowWidth = window.innerWidth;
  const outerPadding = windowWidth - document.documentElement.clientWidth;
  const TIMEOUT = 500;

  const popUps = document.querySelectorAll(".gallery__pop-up-link");
  popUps.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const popUpId = e.currentTarget.getAttribute("href");
      const currentPopUp = document.querySelector("" + popUpId);
      currentPopUp.classList.add("pop-up_open");
      hideOnClick(currentPopUp);
      if (body.style.overflow === "hidden") {
        body.style.overflow = "visible";
      } else {
        body.style.overflow = "hidden";
      }
    });
  });

  const closePopUp = document.querySelectorAll(".pop-up__close");
  closePopUp.forEach((el) => {
    el.addEventListener("click", function (e) {
      const currentPopUp = e.currentTarget.closest(".pop-up");
      currentPopUp.classList.remove("pop-up_open");
      setTimeout(function () {
        body.style.paddingRight = "0";
        if (body.style.overflow === "hidden") {
          body.style.overflow = "visible";
        } else {
          body.style.overflow = "auto";
        }
      }, TIMEOUT);
    });
  });

  popUp.addEventListener("click", function (e) {
    if (!e.target.closest(".pop-up__content")) {
      this.classList.remove("pop-up_open");
      setTimeout(function () {
        body.style.paddingRight = "0";
        if (body.style.overflow === "hidden") {
          body.style.overflow = "visible";
        } else {
          body.style.overflow = "auto";
        }
      }, TIMEOUT);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
      document.querySelector(".pop-up_open").classList.remove("pop-up_open");
      setTimeout(function () {
        body.style.paddingRight = "0";
        if (body.style.overflow === "hidden") {
          body.style.overflow = "visible";
        } else {
          body.style.overflow = "auto";
        }
      }, TIMEOUT);
    }
    activePopUps();
    hidePopUps();
    hideOnKeyDown();
  });
});

tippy("[data-tippy-content]");
