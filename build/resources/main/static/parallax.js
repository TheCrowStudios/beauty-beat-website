"use strict";
const divsParallax = document.querySelectorAll('.div-parallax');
divsParallax.forEach((element) => {
    const div = element;
    const img = div.dataset.parallaximgsrc;
    if (img)
        div.style.backgroundImage = img;
});
