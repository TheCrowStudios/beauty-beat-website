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