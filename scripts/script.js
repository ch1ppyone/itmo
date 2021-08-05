
//popup
document.querySelectorAll(".button_type_close").forEach(button =>
  button.addEventListener("click", () => {
    closePopup(button.closest('.popup'));
  }));

function showPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

const burgerItem = document.querySelectorAll(".header__menu-link_type_popup");

burgerItem.forEach((item) => {

  item.addEventListener("click", (e) => {
    burgerItem.forEach(item => {
      item.style.fontWeight = '400';
    });

    item.style.cssText = 'font-weight: 600';
  })
});




//popup-lab
const popupLab = document.querySelector("#popup-lab");

document.querySelectorAll(".lab__card-button").forEach(button =>
  button.addEventListener("click", () => {
    showPopup(popupLab);
  }));

popupLab.querySelector(".button_type_close-lab").addEventListener("click", () => {
  closePopup(popupLab);
});
