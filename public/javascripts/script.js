document.addEventListener("scroll", handleWindowScroll)

function handleWindowScroll() {
    if (window.pageYOffset > 80) {
        handleNavbarPosition(true)
    } else handleNavbarPosition(false)

    // console.log(window.pageYOffset)
}

function handleNavbarPosition(float) {
    const navbar = document.querySelector(".nav__wrapper")

    if (float) {
        navbar.classList.remove("fixed__nav")
        navbar.classList.add("floating__nav")
    } else {
        navbar.classList.remove("floating__nav")
        navbar.classList.add("fixed__nav")
    }
}

const slider = document.querySelector('.carousel');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => { isDown = false; });
slider.addEventListener('mouseup', () => { isDown = false; });
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
});
