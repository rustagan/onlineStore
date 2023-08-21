const cartContainer = document.querySelector('.cart-container');


class Cart {

    productDeleteClick (element, id, price) {
        let emptyCart = '';
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        const parent = element.parentNode;
        const parentNeed = parent.parentNode;
        parentNeed.remove();
        let totalPrice = document.getElementById('total-price-value').textContent;
        totalPrice = Number(totalPrice);
        totalPrice = totalPrice - price;
        document.getElementById('total-price-value').innerHTML = totalPrice;

        if (totalPrice == 0) {
            emptyCart = `
                <div class="cart-page-header">
                    <a class="page-header-modal">
                        Корзина
                    </a>
                </div>
                <div class="inner-product-container">
                    <a class="empty-cart-container">Ваша корзина пуста. Вы можете перейти в каталог и добавить товары в корзину для заказа. :)</a>
                </div>`

        const html = `
        ${emptyCart}
        `;
        cartContainer.innerHTML = html;
        }
        
    }    

    render() {
        const productsStore = localStorageUtil.getProducts();

        let htmlCatalog = '';
        let sumCatalog = 0;
        let emptyCart = '';

        CATALOGY.forEach(({id, name, imgSrc, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                price = Number(price);

                htmlCatalog += `
                    <div class="cart-product" data-id="${id}">
                        <div class="cart-product-header">
                            <div class="cart-product-img">
                                <img class="cart-product-img-modal" src="${imgSrc}" alt="">
                            </div>
                            <div class="cart-product-info">
                                <div class="cart-product-name">${name}</div>
                                <div class="cart-product-details">
                                    <div class="cart-product-amount"> 
                                        <a>1 шт.</a>
                                    </div>
                                    <div class="price">
                                        <span class="price-currency">${price.toLocaleString()} USD</span>
                                    </div>

                                </div>
                            </div>
                
                        </div>
                        <div class="cart-product-delete"> 
                            <button class="cart-product-delete_button" onclick="cartPage.productDeleteClick(this, '${id}', ${price.toLocaleString()});">
                            Удалить
                            </button>
                        </div>

                    </div>
                `;
                sumCatalog += price;
            } 
        });


        // проверка наличия товара в корзине
        if (productsStore.length == 0) {
            htmlCatalog += `
            <a class="empty-cart-container">Ваша корзина пуста. Вы можете перейти в каталог и добавить товары в корзину для заказа. :)</a>
            `;
            emptyCart = `
            <div class="cart-page-header">
                <a class="page-header-modal">
                    Корзина
                </a>
            </div>
            <div class="inner-product-container">
                ${htmlCatalog} 
            </div>
            `;
        } else {
            emptyCart = `
            <div class="cart-page-header">
                <a class="page-header-modal">
                    Корзина
                </a>
            </div>
            <div class="inner-product-container">
                ${htmlCatalog} 
            </div>
            <div class="total-price">
            <a class="total-price-container">Сумма:</a>
            <span id="total-price-value">${sumCatalog} </span> USD  
            </div>
            
            <div class="order">
                <h5 class="order-title">Оформить заказ:</h4>
                <form class="order-form">
                    <div class="order-form-content">
                        <input type="text" class="number-form" placeholder="Ваш номер телефона">
                    </div>
                    <button type="submit" class="order-btn">Заказать</button>
                </form>
            </div>
            `;
        }

        const html = `
            ${emptyCart}
        `;

        cartContainer.innerHTML = html;

    }
}

const cartPage = new Cart();
cartPage.render();