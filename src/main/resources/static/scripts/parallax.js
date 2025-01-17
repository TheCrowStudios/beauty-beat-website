"use strict";
const divsParallax = document.querySelectorAll('.div-parallax');
divsParallax.forEach((element) => {
    const div = element;
    const img = div.dataset.parallaximgsrc;
    if (img) {
        div.style.backgroundImage = `url(${img})`;
        div.style.backgroundPosition = `center -${window.scrollY * 0.2}px`;
        document.addEventListener('scroll', (event) => {
            div.style.backgroundPosition = `center -${window.scrollY * 0.2}px`;
            console.log(div.style.backgroundPosition);
            console.log(window.scrollY);
        });
    }
});
