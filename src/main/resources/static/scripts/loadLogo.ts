loadLogo()

async function loadLogo() {
    const placeholder = document.querySelector('.div-logo');
    if (placeholder) placeholder.innerHTML = await (await fetch('logo.html')).text()
}