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


const teamConatainer = document.querySelector(".team__list");
const teamTemplate = document.querySelector('.team__card-template').content;

team.forEach((item) => {
  const clone = teamTemplate.cloneNode(true);
  const cardPhoto = clone.querySelector('.team__photo');
  const cardName =  clone.querySelector('.team__name');
  const cardSurname = clone.querySelector('.team__surname');
  const cardJob = clone.querySelector('.team__job');
  const cardJobSpan = clone.querySelector('.team__job-span');

  cardPhoto.src = item.photo;
  cardName.textContent = item.name;
  cardSurname.textContent = item.surname;
  cardJob.textContent = item.job;
  cardJobSpan.textContent = item.jobSpan;

  teamConatainer.append(clone);
});


new Splide( '.team__wrapper', {

  classes: {
		arrows: 'splide__arrows-team',
		arrow : 'team__button',
		prev  : 'team__arrow-left',
		next  : 'team__arrow-right',
	},

  fixedWidth: '255px',
  perPage: 2,
  rewind: true,


} ).mount();
