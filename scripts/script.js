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

publicationsButton.forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    publicationsSocials.forEach(() => {
      publicationsSocials[i].classList.add('publications__socials_active');
    })
  })
})

publicationsButton.forEach((item, i) => {
  item.addEventListener('mouseleave', (e) => {
    setTimeout(() => publicationsSocials.forEach(() => {
      publicationsSocials[i].classList.remove('publications__socials_active')
    }), 500)
  });
})


publicationsSocialLink.forEach(item => {
  item.addEventListener('click', () => {
    publicationsSocials.forEach((item) => {
      item.classList.remove('publications__socials_active')
    })
  })
});


//about
const news = [
  {
    date: "Понедельник, 5 июля 2021г",
    title: `ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…`,
    text: `Университет ИТМО провел научно-исследовательскую стажировку для группы магистрантов из Евразийского национального университета имени Л.Н. Гумилева. Ведущие преподаватели в течение десяти днейрассказывали им об основах машинного обучения.`,
  },
  {
    date: "Понедельник, 5 июля 2021г",
    title: `АВТОРЫ РОБОТА-МУЗЫКАНТА РОБЕРТА РОБОТЕЦКОГО ПРИЗНАНЫ ЛУЧШИМИ НОВИЧ…`,
    text: `Команда ИТМО стала лучшей на международном финале RoboCup-2021. Успех ребятам принес Роберт Роботецкий — робот-виртуоз, исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники лаборатории.`,
  },
  {
    date: "Суббота, 3 июля 2021г",
    title: "ВОЗВРАЩЕНИЕ НА ПЕТРОПАВЛОВКУ: КАК ПРОШЕЛ ВЫПУСКНОЙ ITMO. LIVE — 2021",
    text: " Команда ИТМО сделала многое, чтобы вернуть формат выпускного этого и прошлого года. Из-за эпидемиологической ситуации отменена развлекательная часть, но сохранилась торжественная. Выпускники смогли получить дипломы из рук деканов и услышать поздравления ректора.",
  },
  {
    date: "Пятница, 2 июля 2021г",
    title: "LEAVING THE DIGITAL» — ИЛИ КАК СОЕДИНИТЬ ЦИФРОВОЕ, ТЕХНОЛОГИЧЕСКОЕ И БИОЛОГ…",
    text: "Преподаватели центра Art & Science Университета ИТМО провели открытый воркшоп, посвященный созданию произведений, объединяющих в себе биологическую и синтетическую среды. Серия занятий приурочена к приемной кампании в магистратуру центра.",
  },
  {
    date: "Пятница, 2 июля 2021г",
    title: "В ИТМО ЗАПУСКАЕТСЯ ПЕРВАЯ ПРОЕТНАЯ МАГИСТРАТУРА — ДЛЯ АБИТУРИЕНТОВ ФАКУЛЬТЕТА П…",
    text: `Особенность нового формата магистратуры в том, что студенты смогут составлять программу своего обучения, выбирать только те курсы, которые им интересны, а главное — работать над технологически сложным проектом под руководством менторов из топовых IT-компаний.`,
  },
  {
    date: "Пятница, 2 июля 2021г",
    title: `КОГДА НЕ ЗАНИМАЕШЬСЯ СВОИМ ОБРАЗОВАНИЕМ, МОЖНО ПРИЙТИ К
    СОТСТОЯНИ…`,
    text: `Владислав Танков поступил в ИТМО будучи специалистом в компании JetBrains. На одном из хакатонов в рамках программы с JetBrains он сделал плагин для проверки грамотности текстов в среде разработки IntelliJ IDEA. После окончания магистратуры Владислав возглавил команду разработки.`,
  },
  {
    date: "Четверг, 1 июля 2021г",
    title: `СТУДЕНТЫ ИТМО И ВЫПУСКНИКИ ЛЭТИ РАЗРАБОТАЛИ МОДУЛЬ ДЛЯ БЫ…`,
    text: `Интеллектуальный модуль для станций зарядки позволяет заряжать накопители в электрокарах и электросамокатах быстрее, чем при питании от сети. Программное обеспечение модуля обеспечивает защиту в случае аварийных ситуаций и повышает эффективность всего зарядного устройства.`,
  },
  {
    date: "Четверг, 1 июля 2021г",
    title: `КАКИЕ СУЩЕСТВУЮТ ВАКЦИНЫ, КАК ИХ ИСПЫТЫВАЮТ, И ПО КАКИМ ПРИНЦЫПАМ ИХ СЛЕДУ…`,
    text: `Вакцинация от коронавируса стала одной из главных тем. Весь мир следит за количеством привитых. Прививочная кампания дает  результат — снижается смертность, количество госпитализаций. Но вокруг вакцинации остается много мифов, которые вызывают у скептиков споры.`,
  },
  {
    date: "Среда, 30 июня 2021г",
    title: `УНИВЕРСИТЕТ ИТМО ЗАПУСКАЕТ НОВУЮ КОРПОРАТИВНУЮ СПЕЦИАЛИЗАЦИЮ В МАГИСТРА…`,
    text: `Партнером нового направления станет Napoleon IT. Сотрудники компании и преподаватели ИТМО будут готовить магистров, которые смогут работать в проектах, связанных с распознаванием лиц, технологиями deepfake, созданием приложений для распознавания предметов.`,
  },
  {
    date: "Среда, 30 июня 2021г",
    title: `СТУДЕНТКА И СОТРУДНИЦА ИТМО АННА ВОЛОШИНА ПОЛУЧИЛА БРОНЗОВОГО СФИН...`,
    text: `В Петропавловской крепости состоялась торжественная церемония  вручения наград лучшим выпускникам Санкт-Петербурга. Среди тех, кто получил памятную статуэтку, была выпускница факультета технологического менеджмента и инноваций Анна Волошина.`,
  },
];

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


const team = [
  {
    name: 'Алексей Алексеевич',
    surname: 'Бобцов',
    job: 'Директор, ДТН',
    jobSpan: 'профессор,',
    photo: './images/team/man_photo.jpg',
  },
  {
    name: 'Александр Валерьевич',
    surname: 'Буханоский',
    job: 'Директор, ДТН',
    jobSpan: 'профессор,',
    photo: './images/team/man_photo-1.jpg',
  },
  {
    name: 'Дмитрий Ильич',
    surname: 'Муромцев',
    job: 'Руководитель, КТН',
    jobSpan: 'доцент,',
    photo: './images/team/man_photo-2.jpg',
  },
  {
    name: 'Юрий Николаевич',
    surname: 'Матвеев',
    job: 'Директор, ДТН',
    jobSpan: 'профессор,',
    photo: './images/team/man_photo-3.jpg',
  },
  {
    name: 'Анатолий Абрамович',
    surname: 'Шалыто',
    job: 'ДТН',
    jobSpan: 'Профессор,',
    photo: './images/team/man_photo-4.jpg',
  },
  {
    name: 'Сергей Алексеевич',
    surname: 'Колюбин',
    job: 'Начальник, ДТН',
    jobSpan: 'Профессор,',
    photo: './images/team/man_photo-5.jpg',
  },
  {
    name: 'Антон Александрович',
    surname: 'Пыркин',
    job: 'Декан, ДТН',
    jobSpan: 'Профессор,',
    photo: './images/team/man_photo-6.jpg',
  },
];

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


//popup-lab
const popupLab = document.querySelector("#popup-lab");

document.querySelectorAll(".lab__card-button").forEach(button =>
  button.addEventListener("click", () => {
    showPopup(popupLab);
  }));

popupLab.querySelector(".button_type_close-lab").addEventListener("click", () => {
  closePopup(popupLab);
});
