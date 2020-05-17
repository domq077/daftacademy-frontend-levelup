const scrollToTop = () => {
    const arrow = document.getElementById('arrowTop');
    const height = document.body.scrollHeight;
    let scrollPosition = 0;
    arrow.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    window.addEventListener('scroll', (e) => {
        scrollPosition = window.scrollY;
        if(scrollPosition >= (height / 2)) {
            arrow.classList.remove('hidden');
            arrow.classList.add('visible');
        } else {
            arrow.classList.remove('visible');
            arrow.classList.add('hidden');
        }
    })

    
}

export default scrollToTop;