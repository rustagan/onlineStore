// окно "позвоните нам"
const callUsButton = document.querySelector(".call");
const modalCall = document.querySelector(".modal-call");
function callUsModal () {
    modalCall.classList.add("modal-call-active");
}
function callModalRemove (event) {
    if (event.target.className === "call" || event.target.className === "modal-call-window" || event.target.className === "phone" || event.target.className === "help" || event.target.className === "call-us") {
        return;
    }
    else {
        modalCall.classList.remove("modal-call-active");
    }
}
callUsButton.addEventListener("click", callUsModal);
window.addEventListener("click", callModalRemove);

// окно "Новостная рассылка"
const newsletter = document.querySelector(".newsletter");
const modalNews = document.querySelector(".modal-news");
function newsModal () {
    modalNews.classList.add("modal-news-active");
}
function newsModalRemove (event) {
    if (event.target.className === "newsletter" || event.target.className === "modal-news" || event.target.className === "modal-news-window" || event.target.className === "subscribe" || event.target.className === "mail-input" || event.target.className === "send-button" || event.target.className === "rules") {
        return;
    }
    else {
        modalNews.classList.remove("modal-news-active");
    }
}
newsletter.addEventListener("click", newsModal);
window.addEventListener("click", newsModalRemove);

// окно "Найти нас"
const findUs = document.querySelector(".find-us");
const modalMaps = document.querySelector(".modal-maps");
function mapsModal () {
    modalMaps.classList.add("modal-maps-active");
}
function mapsModalRemove (event) {
    if (event.target.className === "find-us" || event.target.className === "modal-maps" || event.target.className === ".modal-maps-window" || event.target.className === "map" || event.target.className === "how-to-find") {
        return;
    }
    else {
        modalMaps.classList.remove("modal-maps-active");
    }
}
findUs.addEventListener("click", mapsModal);
window.addEventListener("click", mapsModalRemove);