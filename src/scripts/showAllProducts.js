const showAllProducts = () => {
    const btn = document.getElementById('allProductsButton');
    const productsContainer = document.getElementById('productsContainer');
    let executed = false;
    const products = [
        {
            src: 'https://via.placeholder.com/309x390?text=309x390',
            title: 'product1',
            price: 'price1'
        },
        {
            src: 'https://via.placeholder.com/309x390?text=309x390',
            title: 'product2',
            price: 'price2'
        },
        {
            src: 'https://via.placeholder.com/309x390?text=309x390',
            title: 'product3',
            price: 'price3'
        },
        {
            src: 'https://via.placeholder.com/309x390?text=309x390',
            title: 'product4',
            price: 'price4'
        },
        {
            src: 'https://via.placeholder.com/309x390?text=309x390',
            title: 'product5',
            price: 'price5'
        },
        {
            src: 'https://via.placeholder.com/309x390?text=309x390',
            title: 'product6',
            price: 'price6'
        }
    ];

    btn.addEventListener('click', () => {
        if(!executed) {
            products.forEach((product) => {
                const temp = document.createElement('div');
                temp.className = 'product';
                temp.innerHTML = `
                    <img class="product__image" src="${product.src}" alt="Card image cap">
                    <div class="product__description">
                    <p class="product__description__title">${product.title}</p>
                    <h4 class="product__description__price">${product.price}</h4>
                    </div>
                `;
                productsContainer.appendChild(temp);
            })
        }
        executed = true;
    })
}

export default showAllProducts;

