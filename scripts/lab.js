const popupLab = document.querySelector("#popup-lab");

document.querySelectorAll(".lab__card-button").forEach(button =>
  button.addEventListener("click", () => {
    showPopup(popupLab);
  }));

popupLab.querySelector(".button_type_close-lab").addEventListener("click", () => {
  closePopup(popupLab);
});
