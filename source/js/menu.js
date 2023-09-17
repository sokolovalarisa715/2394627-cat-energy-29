const menu = document.querySelector(".navigation__wrapper")
  , menuToggle = document.querySelector(".navigation__toggle")
  , menuButton = document.querySelector(".navigation__toggle")
  , menuActiveClass = "main-nav__wrapper--active"
  , menuToggleActiveClass = "navigation__toggle--active";
menuButton.addEventListener("click", (function () {
  menuToggle.classList.toggle(menuToggleActiveClass),
    menu.classList.toggle(menuActiveClass)
}
));
