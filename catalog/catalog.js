const productCard = document.querySelector('.product-card');

class Products {

    productCardClick (element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add('add-to-cart-button-active');
            element.innerHTML = 'Удалить из корзины';
        } else {
            element.classList.remove('add-to-cart-button-active');
            element.innerHTML = 'Добавить в корзину';
        }

        cartPage.render();
    }

    render() {

        const productsStore = localStorageUtil.getProducts();

        let htmlCatalog = '';

        CATALOGY.forEach(({id, name, imgSrc, imgSrc2, price}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = 'Добавить в корзину';
            } else {
                activeClass = ' add-to-cart-button-active'
                activeText = 'Удалить из корзины'
            }

            htmlCatalog += `
                <div class="product-content">
                    <div class="product" data-id="${id}">
                        <div class="product-card-image">
                            <img src="${imgSrc}" class="product-card-image wrapped-img" alt="${name}">
                            <img src="${imgSrc2}" class="product-card-image img-hide" alt="${name}">
                        </div>
                        <a class="product-page-link">
                            <h2 class="product-name">${name}</h2>
                        </a>
                        <div class="product-price">
                            <a class="price">${price.toLocaleString()} USD </a>
                        </div>
                        <div class="add-to-cart">
                            <button class="add-to-cart-button${activeClass}" onclick="productsPage.productCardClick(this,'${id}');">
                                ${activeText}
                            </button>
                        </div>
                    </div>
                </div>
            `;

            const html = `
                <div class="product-container">
                    ${htmlCatalog}
                </div>
            `;

            productCard.innerHTML = html;

        })

    }
}
// экземпляр класса Products
const productsPage = new Products ();
productsPage.render();