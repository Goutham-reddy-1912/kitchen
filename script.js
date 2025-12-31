
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#hero-banner");

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add("active");
            obs.unobserve(entry.target); // play only once
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(section);
  });




  //Aboutus section script
   document.addEventListener('DOMContentLoaded', function () {
    const animatedBox = document.querySelector('#about-section .js-about-animate');
    if (!animatedBox) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section entered viewport -> slide in
          entry.target.classList.add('about_in-view');
        } else {
          // Section left viewport -> slide out (so it can animate again)
          entry.target.classList.remove('about_in-view');
        }
      });
    }, {
      threshold: 0.3 // 30% of element visible
    });

    observer.observe(animatedBox);
  });



  //footer year script

    const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }




function openMenu(evt, menuName) {
  let i, content, tabs;

  content = document.getElementsByClassName("menu-content");
  for (i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }

  tabs = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById(menuName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
