const burger = document.querySelector('.header__burger');
const menu = document.querySelector('#popup-header-menu');
burger.addEventListener("click", () => {
  showPopup(menu);
});
