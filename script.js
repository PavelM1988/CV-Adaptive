"use strict";

let navBtn = document.querySelector("#navToggle");
let nav = document.querySelector(".nav__inner");
let navLinks = document.querySelectorAll(".nav__link");

navBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    nav.classList.toggle("nav__open");
});

if (document.documentElement.clientWidth < 961) {
    navLinks.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("nav__open");
        });
    });
}

document.addEventListener("click", function (event) {
    const target = event.target;
    const its_nav = target === nav || nav.contains(target);
    const its_btnNav = target === navBtn;
    const menu_is_active = nav.classList.contains("nav__open");

    if (!its_nav && !its_btnNav && menu_is_active) {
        nav.classList.remove("nav__open");
    }
});
