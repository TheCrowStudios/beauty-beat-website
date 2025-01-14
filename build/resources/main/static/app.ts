function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const observer = new IntersectionObserver(async (entries) => {
    for (const entry of entries) {
        console.log(entry);
        // TODO - fix the delay thing
        if (entry.isIntersecting) {
            await sleep(500);
            entry.target.classList.add('show');
            console.log('timeout');
        }
    }
}, {threshold: [0.8]})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const navbar = document.querySelector('.navbar');
const showNavbar = document.querySelector('.show-navbar');
const hideNavbar = document.querySelector('.hide-navbar');
const divToggleNavbar = document.querySelector('.div-toggle-navbar-hidden');

showNavbar?.addEventListener('click', (event) => {
    divToggleNavbar?.classList.add('div-toggle-navbar-show');
    divToggleNavbar?.classList.remove('div-toggle-navbar-hidden');
    showNavbar.classList.add('toggle-navbar-hidden');
    showNavbar.classList.remove('toggle-navbar-show');
    hideNavbar?.classList.add('toggle-navbar-show');
    hideNavbar?.classList.remove('toggle-navbar-hidden');
    navbar?.classList.add('navbar-show');
    navbar?.classList.remove('navbar-hidden');
})

hideNavbar?.addEventListener('click', (event) => {
    divToggleNavbar?.classList.remove('div-toggle-navbar-show');
    divToggleNavbar?.classList.add('div-toggle-navbar-hidden');
    showNavbar?.classList.add('toggle-navbar-show');
    showNavbar?.classList.remove('toggle-navbar-hidden');
    hideNavbar.classList.add('toggle-navbar-hidden');
    hideNavbar.classList.remove('toggle-navbar-show');
    navbar?.classList.remove('navbar-show');
    navbar?.classList.add('navbar-hidden');
})