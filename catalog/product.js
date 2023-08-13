const cartContainer = document.querySelector('.cart-container');

window.addEventListener('click', function (event) {
    if (event.target.className === 'cart-container1') {
        console.log("test");
    }
});

// отслеживаем клик на страницe для добавления в корзину
window.addEventListener('click', function (event) {
    if (event.target.className === 'add-to-card-button') {
        const card = event.target.closest('.product')
        console.log("test");
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.wrapped-img').getAttribute('src'),
            name: card.querySelector('.product-name').innerText,
            price: card.querySelector('.price').innerText,
        };

        console.log(productInfo);
    
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                            <div class="cart-item__top">
                                <div class="cart-item__img">
                                    <img src="${productInfo.imgSrc}" alt="">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title">${productInfo.name}</div>
                                    <div class="cart-item__weight">6 шт. / 205г.</div>
                                    <div class="cart-item__details">
                                    
                                        <div class="items items--small counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">1</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>
                                        <div class="price">
                                            <div class="price__currency">${productInfo.price}</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>`
        ;
        
        cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    }

})










// // элементы счетика на странице
// const minus = document.querySelector('[data-action="minus"]');
// const counter = document.querySelector('[data-counter]');
// const plus = document.querySelector('[data-action="plus"]');

// // клик на кнопку минусы
// function minusClick() {
//     // проверка счетика на значение не равное 1
//     if (counter.innerText != 1) {
//      counter.innerText = --counter.innerText;
//     }
// }

// minus.addEventListener('click', minusClick);

// // клик на кнопку плюс
// function plusClick() {
//     counter.innerText = ++counter.innerText;
// }

// plus.addEventListener('click', plusClick);


