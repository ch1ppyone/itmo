
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('#popup-header-menu');
const linkGraduate = document.querySelector('#link-graduate');
const linkMaster = document.querySelector('#link-master');
const linkGraduatePopup = document.querySelector('#link-graduate_popup');
const linkMasterPopup = document.querySelector('#link-master_popup');
const aspirant = document.querySelector('.education__tab_type-aspirant');
const magistr = document.querySelector('.education__tab_type-magistr');

function gotoAspirant() {
  dispalyTemplate(educationContent, aspirantTemplate);
  aspirant.classList.add('education__tab_active');
  magistr.classList.remove('education__tab_active');
}

function gotoMaster() {
  dispalyTemplate(educationContent, magistrTemplate);
  aspirant.classList.remove('education__tab_active');
  magistr.classList.add('education__tab_active');
}


linkGraduate.addEventListener("click", () => {
  gotoAspirant();
});

linkMaster.addEventListener("click", () => {
  gotoMaster();
});

linkGraduatePopup.addEventListener("click", () => {
  gotoAspirant();
});

linkMasterPopup.addEventListener("click", () => {
  gotoMaster();
});

burger.addEventListener("click", () => {
  showPopup(menu);
});
