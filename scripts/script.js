
//education
const aboutCards = document.querySelectorAll(".about__cards > .cards > .card");
const aboutDots = document.querySelectorAll(".about__cards > .dots > .dot");
const aboutRight = document.querySelector(".about__arrow-right");
const aboutLeft = document.querySelector(".about__arrow-left");
const educationContent = document.querySelector('.education__content');
const educationTabs = document.querySelectorAll('.education__tab');
const aspirantTemplate = document.querySelector('.content-template_type-aspirant').content;
const magistrTemplate = document.querySelector('.content-template_type-magistr').content;


document.addEventListener("DOMContentLoaded", function (event) {
  dispalyTemplate(educationContent, magistrTemplate);
});



educationTabs.forEach(tab =>
  tab.addEventListener("click", () => {
    if (tab.classList.contains('education__tab_active'))
      return;
    else {
      if (tab.classList.contains('education__tab_type-aspirant'))
        dispalyTemplate(educationContent, aspirantTemplate);
      else
        dispalyTemplate(educationContent, magistrTemplate);
      educationTabs.forEach(t => {
        t.classList.toggle('education__tab_active');
      });
    }
  }));


function dispalyTemplate(block, template) {
  block.innerHTML = "";
  block.append(template.cloneNode(true));
}




//team
const teamList = document.querySelector('.team__list');
const leftBtn = document.querySelector('.team__button_left');
const rightBtn = document.querySelector('.team__button_right');









//menu
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
