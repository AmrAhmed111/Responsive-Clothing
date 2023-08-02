// Change Backgound Header
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height
    this.scrollY >= 50  ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// Swiper Products
let swiperProducts = new Swiper(".products_container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPreView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            spaceBetween: 72,
        },
    },
});
// Scroll Section Active Link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link');
                }else {
                    sectionsClass.classList.remove('active-link');
                }
    })
}
window.addEventListener('scroll', scrollActive);
// Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// Dark Light Theme
const themeButton = document.getElementById('theme-button');
themeButton.onclick = () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
                themeButton.src = 'img/sun.png';
            } else {
                    themeButton.src = 'img/moon.png';
            }
}
// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.home_data, .products_container, .footer_container, .footer_info`)
sr.reveal(`.home_images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.new_card, .brand_img`, {interval: 100})
sr.reveal(`.collection_explore:nth-child(1)`, {origin: 'right'})
sr.reveal(`.collection_explore:nth-child(2)`, {origin: 'left'})