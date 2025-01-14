loadNavbar();

async function loadNavbar() {
    const placeholder = document.querySelector('.navbar-placeholder');
    if (placeholder) placeholder.innerHTML = await (await fetch('navbar.html')).text()
}