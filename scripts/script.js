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
