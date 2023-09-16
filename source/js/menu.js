const menu = document.querySelector(".main-nav__wrapper")
  , menuToggle = document.querySelector(".burger-menu__toggle")
  , menuButton = document.querySelector(".burger-menu__toggle")
  , menuActiveClass = "main-nav__wrapper--active"
  , menuToggleActiveClass = "burger-menu__toggle--active";
menuButton.addEventListener("click", (function () {
  menuToggle.classList.toggle(menuToggleActiveClass),
    menu.classList.toggle(menuActiveClass)
}
));
