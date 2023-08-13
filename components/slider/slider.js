const images = document.querySelectorAll(".slider .slider-fade img");
const sliderFade = document.querySelector(".slider-fade");
const buttons = document.querySelector(".buttons");
let active = 0;
let width;
let height;
let timeoutID;

function autoRoll() {
  timeoutID = setTimeout(roll, 3000);
}
function roll() {
    active++;
    if (active >= images.length) {
        active = 0;
    }
    rollSlider();
    autoRoll();
}
autoRoll();
function init() {
    console.log("resize");
    width = document.querySelector(".slider").offsetWidth;
    height = document.querySelector(".slider").offsetHeight;
    console.log(height);
    sliderFade.style.width = width * images.length + "px";
    buttons.style.width = width - 50 + "px";
    buttons.style.top = height / 2 + 112 + "px";
    images.forEach( item => {
        item.style.width = width + "px";
        item.style.height = "auto";
    });
    rollSlider();
}
window.addEventListener("resize", init);
init();
document.querySelector(".slider-prev").addEventListener("click", function(){
    active--;
    if (active < 0) {
        active = images.length - 1;
    }
    rollSlider();
    clearTimeout(timeoutID);
    autoRoll();
});
document.querySelector(".slider-next").addEventListener("click", function(){
    active++;
    if (active >= images.length) {
        active = 0;
    }
    rollSlider();
    clearTimeout(timeoutID);
    autoRoll();
});
function rollSlider() {
    sliderFade.style.transform = "translate(-"+active*width+"px)";
}
window.addEventListener("DOMContentLoaded", init);
