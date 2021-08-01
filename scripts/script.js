const educationContent = document.querySelector('.education__content');
const educationTabs = document.querySelectorAll('.education__tab');
const aspirantTemplate = document.querySelector('.content-template_type-aspirant').content;
const magistrTemplate = document.querySelector('.content-template_type-magistr').content;


console.log(educationTabs);
educationTabs.forEach(tab =>
  tab.addEventListener("click", () => {
    if (tab.classList.contains('education__tab_active'))
      return;
    else {
      educationContent.innerHTML = "";
      let template = undefined;
      if (tab.classList.contains('education__tab_type-aspirant'))
        template = aspirantTemplate.cloneNode(true);
      else
        template = magistrTemplate.cloneNode(true);
      educationContent.appendChild(template);

      educationTabs.forEach(t => {
        t.classList.toggle('education__tab_active');
      });
    }
  }));


document.addEventListener("DOMContentLoaded", function (event) {
  const template = magistrTemplate.cloneNode(true);
  educationContent.appendChild(template);

});


// Ссылки на соцсети в блоке Публикации

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

/* publicationsSocials.forEach((item,i) => {
  item.addEventListener('mouseenter', () => {
    publicationsSocials[i].classList.add('publications__socials_active');
  })
}) */

publicationsSocialLink.forEach(item => {
  item.addEventListener('click', () => {
    publicationsSocials.forEach((item) => {
      item.classList.remove('publications__socials_active')
    })
  })
});
