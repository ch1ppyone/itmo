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

//publications
const publicationsButton = document.querySelectorAll('.publications__button');
const publicationsSocials = document.querySelectorAll('.publications__socials');
const publicationsSocialLink = document.querySelectorAll('.publications__social-link');

function socialPopup() {
  publicationsButton.forEach((item, i) => {
    item.addEventListener('click', () => {
      publicationsSocials.forEach(() => {
        if (!publicationsSocials[i].classList.contains('publications__socials_active')) {
          publicationsSocials[i].classList.add('publications__socials_active');
        } else {
          publicationsSocials[i].classList.remove('publications__socials_active');
        }
      })
    })
  })
}

socialPopup();

publicationsSocialLink.forEach(item => {
  item.addEventListener('click', () => {
    publicationsSocials.forEach((item) => {
      item.classList.remove('publications__socials_active')
    })
  })
});


//about
const conatainer = document.querySelector(".about__cards >.swiper-container .cards");
const template = document.querySelector('.about__card-template').content;
news.forEach((item) => {
  const clone = template.cloneNode(true);
  const date = clone.querySelector('.card__date');
  const title = clone.querySelector('.card__title');
  const text = clone.querySelector('.card__text');
  date.innerText = item.date;
  title.innerText = item.title;
  text.innerText = item.text;
  conatainer.append(clone);
});


const swiper_about = new Swiper('.swiper-container', {

  slidesPerView: 3,
  slidesPerGroup: 3,
  centeredSlidesBounds: true,
  pagination: {
    el: ".dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".about__arrow-right",
    prevEl: ".about__arrow-left",
  },

});

const swiper = new Swiper('.swiper-container', {
  grabCursor: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  pagination: {
    el: ".dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".about__arrow-right",
    prevEl: ".about__arrow-left",
  },


});


//team
const teamList = document.querySelector('.team__list');
const leftBtn = document.querySelector('.team__button_left');
const rightBtn = document.querySelector('.team__button_right');


const cardCreate = (cardData) => {
  const card = document.querySelector('#card')
    .content.querySelector('.team__card')
    .cloneNode(true);

  const cardPhoto = card.querySelector('.team__photo');
  const cardName =  card.querySelector('.team__name');
  const cardSurname = card.querySelector('.team__surname');
  const cardJob = card.querySelector('.team__job');
  const cardJobSpan = card.querySelector('.team__job-span');

  cardPhoto.src = cardData.photo;
  cardName.textContent = cardData.name;
  cardSurname.textContent = cardData.surname;
  cardJob.textContent = cardData.job;
  cardJobSpan.textContent = cardData.jobSpan;

  return card;
};

const renderTemplate = (template, container, flag = true) => {
  flag ? container.prepend(template) : container.append(template);
};

team.forEach((element) => renderTemplate(cardCreate(element), teamList, false));

const cards = document.querySelectorAll('.team__card');

const slider = (width, slideCount, slideList, slideArr, leftBtn, rightBtn, start) => {
  let touchStart = 0;
  let touchEnd = 0;
  let slide = start;
  rightBtn.addEventListener('click', function () {
    if (slide < slideCount) {
      slideArr.forEach(i => i.style.transform = `translate(-${width * slide}px)`);
      slide++;
    }
  });

  leftBtn.addEventListener('click', function () {
    if (slide > 1) {
      slideArr.forEach(i => i.style.transform = `translate(-${width * (slide - 2)}px)`);
      slide--;
    }
  });

  const touchEndHandler = (e) => {
    touchEnd = e.changedTouches[0].clientX;
    if (touchStart < touchEnd && (touchEnd - touchStart) > 50) {
      if (slide > 1) {
        slideArr.forEach(i => i.style.transform = `translate(-${width * (slide - 2)}px)`);
        slide--;
      }
    } else if (touchStart > touchEnd && (touchStart - touchEnd) > 50) {
      if (slide < slideCount) {
        slideArr.forEach(i => i.style.transform = `translate(-${width * slide}px)`);
        slide++;
      }
    }
    slideList.removeEventListener('touchend', touchEndHandler);
    touchStart = 0;
    touchEnd = 0;
  };


  const touchStartHandler = (e) => {
    touchStart = e.changedTouches[0].clientX;
    slideList.addEventListener('touchend', touchEndHandler)
  };

  slideList.addEventListener('touchstart', touchStartHandler);
};


if (document.documentElement.clientWidth < 768) {
  slider(140, 4, teamList, cards, leftBtn, rightBtn, 3);
} else if (document.documentElement.clientWidth < 1110) {
  slider(240, 4, teamList, cards, leftBtn, rightBtn, 1);
} else {
  slider(285, 4, teamList, cards, leftBtn, rightBtn, 1);
}


//menu
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('#popup-header-menu');

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
