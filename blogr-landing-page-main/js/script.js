let hamburger = document.querySelector(".hamburger");
let img = document.querySelector(".hamburger img");
let mobileMenu = document.querySelector(".mobile-menu");
hamburger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("translate")) {
        mobileMenu.classList.remove("translate");
        img.src = `./images/icon-hamburger.svg`

    } else {
        // mobileMenu.style.transform = `translateY(0)`;
        mobileMenu.classList.add("translate");
        img.src = `./images/icon-close.svg`
    }
})