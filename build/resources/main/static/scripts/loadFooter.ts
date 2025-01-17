loadFooter();

async function loadFooter() {
    const placeholder = document.querySelector('footer');
    if (placeholder) placeholder.innerHTML = await (await fetch('footer.html')).text()
}