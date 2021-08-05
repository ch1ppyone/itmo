const burger = document.querySelector('.header__burger');
const menu = document.querySelector('#popup-header-menu');
const linkGraduate = document.querySelector('#link-graduate');
const linkMaster = document.querySelector('#link-master');
const aspirant = document.querySelector('.education__tab_type-aspirant');
const magistr = document.querySelector('.education__tab_type-magistr');

linkGraduate.addEventListener("click", () => {
  console.log('click')
  dispalyTemplate(educationContent, aspirantTemplate);
  aspirant.classList.add('education__tab_active');
  magistr.classList.remove('education__tab_active');
});

linkMaster.addEventListener("click", () => {
  dispalyTemplate(educationContent, magistrTemplate);
  aspirant.classList.remove('education__tab_active');
  magistr.classList.add('education__tab_active');
});

burger.addEventListener("click", () => {
  showPopup(menu);
});
