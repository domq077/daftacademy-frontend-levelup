const showAllProducts = (prodctsArray) => {
    const btn = document.getElementById('allProductsButton');
    const productsContainer = document.getElementById('productsContainer');
    let executed = false;
    const products = prodctsArray;
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

