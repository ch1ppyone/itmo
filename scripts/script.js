const aboutCards = document.querySelectorAll(".about__cards > .cards > .card");
const aboutDots = document.querySelectorAll(".about__cards > .dots > .dot");
const aboutRight = document.querySelector(".about__arrow-right");
const aboutLeft = document.querySelector(".about__arrow-left");
const educationContent = document.querySelector('.education__content');
const educationTabs = document.querySelectorAll('.education__tab');
const aspirantTemplate = document.querySelector('.content-template_type-aspirant').content;
const magistrTemplate = document.querySelector('.content-template_type-magistr').content;


document.addEventListener("DOMContentLoaded", function (event) {
  dotCarousel(aboutCards, aboutDots, null, "card_active", "dot_active");
  dispalyTemplate(educationContent, magistrTemplate);
});

aboutLeft.addEventListener("click", () => {
  dotCarousel(aboutCards, aboutDots, -1, "card_active", "dot_active");
});

aboutRight.addEventListener("click", () => {
  dotCarousel(aboutCards, aboutDots, 1, "card_active", "dot_active");
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

function dotCarousel(cards, dots, direction, cardClass, dotClass) {
  let arr = paginate(Array.from(aboutCards), 3);

  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach(card => {
      card.classList.remove(cardClass);
    });
  }

  let offset = 0;
  if (direction != null) {
    Object.keys(dots).forEach(key => {
      if (dots[key].classList.contains(dotClass)) {
        offset = parseInt(key);
        dots[offset].classList.toggle(dotClass);
        return;
      }
    });
    offset += direction;
    if (offset == dots.length)
      offset = 0;
    else if (offset < 0)
      offset = dots.length - 1;
    dots[offset].classList.toggle(dotClass);
  }
  else
    dots[0].classList.toggle(cardClass);
  arr[offset].forEach(card => {
    card.classList.toggle(cardClass);
  });
}

function paginate(array, count) {
  const total = Math.ceil(array.length / count);
  let pages = [];
  for (let i = 1; i <= total; i++) {
    pages.push(array.slice((i - 1) * count, i * count));
  }
  return pages;
}

});




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

