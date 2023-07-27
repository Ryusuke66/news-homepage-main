let menuIcon = document.querySelector(".menu-icon"),
    body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    ul = nav.querySelector("ul");

menuIcon.onclick = function() {
    if (menuIcon.classList.contains("active")) {
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        body.style.overflow = "scroll";
        nav.classList.remove("opened");
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        nav.classList.add("opened");
        body.style.overflow = "hidden";
        menuIcon.classList.add("active");
        menuIcon.classList.remove("inactive");
        
    }
};

body.addEventListener("click", function () {
    if (menuIcon.classList.contains("active")) {
        nav.classList.remove("opened");
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        body.style.overflow = "scroll";
    };
})
menuIcon.addEventListener("click", function (ev) {
    ev.stopPropagation();
});
ul.addEventListener("click", function (ev) {
    ev.stopPropagation();
});