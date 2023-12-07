let scrollContainer = document.querySelector(".gallery");
let prev_btn = document.querySelector(".prev_btn");
let next_btn = document.querySelector(".next_btn");


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})


next_btn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1400;
});

prev_btn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1400;
});


