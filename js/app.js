// создание экземпляра класса MoveTo, подключенного через cdn
const moveTo = new MoveTo();

// определение переменных

const modalWindow = document.getElementById("modal-window");
const closeModal = document.getElementById("modal-close");
const overlay = document.getElementById("overlay-modal");
const allBtns = document.querySelectorAll(".open-modal");
const burgerMenu = document.querySelector("#burger-menu");
const burgerOverlay = document.querySelector("#burger-overlay");
const btnBurger = document.querySelector("#button-burger");
const buttonsToCloseBurgerMenu = document.querySelectorAll(".close-burgermenu");
const allLinks = document.querySelectorAll("a");
const btnFirstTab = document.querySelector("#first-tab-open");
const firstTab = document.querySelector("#first-tab");
const btnSecondTab = document.querySelector("#second-tab-open");
const secondTab = document.querySelector("#second-tab");
const btnThirdTab = document.querySelector("#third-tab-open");
const thirdTab = document.querySelector("#third-tab");

// функции по открытию / закрытию модалки; открытию / закрытию бургерного меню

function openWindow() {
  modalWindow.classList.remove("hidden-value");
  overlay.classList.remove("hidden-value");
}

function closeModalWindow() {
  modalWindow.classList.add("hidden-value");
  overlay.classList.add("hidden-value");
}

function openBurger() {
  burgerMenu.classList.remove("hidden-value");
  burgerOverlay.classList.remove("hidden-value");
}

function closeBurger() {
  burgerMenu.classList.add("hidden-value");
  burgerOverlay.classList.add("hidden-value");
}

function openTabs(tabs) {
  tabs.forEach((el) => el.classList.remove("hidden-value", "h-0"));
}

function closeTabs(tabs) {
  tabs.forEach((el) => el.classList.add("hidden-value", "h-0"));
}

buttonsToCloseBurgerMenu.forEach((el) =>
  el.addEventListener("click", closeBurger)
);

// навешивание ивентхендлеров

btnBurger.addEventListener("click", openBurger);
closeModal.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);
btnFirstTab.addEventListener("click", () => {
  openTabs([firstTab]);
  closeTabs([secondTab, thirdTab]);
  btnFirstTab.classList.add("anime");
  btnFirstTab.classList.remove("unAnime");
  [btnSecondTab, btnThirdTab].forEach((el) => {
    el.classList.remove("anime");
    el.classList.add("unAnime");
  });
});
btnSecondTab.addEventListener("click", () => {
  openTabs([secondTab]);
  closeTabs([firstTab, thirdTab]);
  btnSecondTab.classList.add("anime");
  btnSecondTab.classList.remove("unAnime");
  [btnFirstTab, btnThirdTab].forEach((el) => {
    el.classList.remove("anime");
    el.classList.add("unAnime");
  });
});
btnThirdTab.addEventListener("click", () => {
  openTabs([thirdTab]);
  closeTabs([firstTab, secondTab]);
  btnThirdTab.classList.add("anime");
  btnThirdTab.classList.remove("unAnime");

  [btnFirstTab, btnSecondTab].forEach((el) => {
    el.classList.remove("anime");
    el.classList.add("unAnime");
  });
});

// навешивание ивентхендлера на кнопки, чтобы открывалось модальное окно

allBtns.forEach((el) => el.addEventListener("click", openWindow));

// навешивание регистраторов на ссылки для плавного скролла через либу MoveToJS

allLinks.forEach((el) => moveTo.registerTrigger(el));

// закрытие модального окна на клавишу escape

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModalWindow();
  }
});

// слайдер на SwiperJS

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
