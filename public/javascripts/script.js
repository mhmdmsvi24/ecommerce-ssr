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
