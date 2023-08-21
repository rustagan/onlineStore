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

// окно корзины

const cartButton = document.querySelector(".cardButton-img");
const cartModal = document.querySelector(".cart-modal");
function cartOpenModal () {
    cartModal.classList.add("cart-modal-active");
}
function cartModalRemove (event) {
    if ( event.target.className === "order-form-content" || event.target.className === "order-btn" || event.target.className === "number-form" || event.target.className === "order-form" || event.target.className === "order-title" || event.target.className === "order" || event.target.className === "cart-page-header" || event.target.className === "product-page-link" || event.target.className === "inner-product-container" || event.target.className === "page-header-modal" || event.target.className === "page-header" || event.target.className === "cardButton" || event.target.className === "cardButton-img" || event.target.className === "cart-modal" || event.target.className === "cart-content" || event.target.className === "cart-container" || event.target.className === "cart-product" || event.target.className === "cart-product-header" || event.target.className === "cart-product-img" || event.target.className === "cart-product-info" || event.target.className === "cart-product-img-modal" || event.target.className === "cart-product-name" || event.target.className === "cart-product-details" || event.target.className === "cart-product-amount" || event.target.className === "price" || event.target.className === "price-currency" || event.target.className === "cart-product-delete" || event.target.className === "cart-product-delete_button" || event.target.className === "empty-cart-container" || event.target.className === "total-price" || event.target.className === "total-price-container" || event.target.className === "total-price-value") {
        return;  
    }
    else {
        cartModal.classList.remove("cart-modal-active");
        
    }
}
cartButton.addEventListener("click", cartOpenModal);
window.addEventListener("click", cartModalRemove);