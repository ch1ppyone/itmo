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
