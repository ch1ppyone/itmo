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
