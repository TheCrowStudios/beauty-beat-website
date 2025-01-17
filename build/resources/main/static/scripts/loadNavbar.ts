loadNavbar();

async function loadNavbar() {
    const placeholder = document.querySelector('.div-navbar-container');
    if (placeholder) placeholder.innerHTML = await (await fetch('navbar.html')).text()
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
}