
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