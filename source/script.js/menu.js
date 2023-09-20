const menu = document.querySelector(".navigation__wrapper")
  , menuToggle = document.querySelector(".navigation__button")
  , menuButton = document.querySelector(".navigation__button")
  , menuActiveClass = "navigation__wrapper--active"
  , menuToggleActiveClass = "navigation__wrapper--active";
menuButton.addEventListener("click", (function () {
  menuToggle.classList.toggle(menuToggleActiveClass),
    menu.classList.toggle(menuActiveClass)
}
));
