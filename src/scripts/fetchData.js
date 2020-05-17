const fetchData = () => {
    //slider
    const sliderItemImages = document.getElementsByClassName('slider-section__item__image');
    const sliderItemTitle = document.getElementsByClassName('slider-section__item__title');
    const sliderItemPrice = document.getElementsByClassName('slider-section__item__price');
    
    //new arrivals
    const newArrivalsImages = document.getElementsByClassName('product__image');
    const newArrivalsTitle = document.getElementsByClassName('product__description__title');
    const newArrivalsPrice = document.getElementsByClassName('product__description__price');
    
    //offers
    const offerImages = document.getElementsByClassName('offer__image');
    const offerTitle = document.getElementsByClassName('offer__title');

    //counters
    const starter = 0;
    const afterSlider = sliderItemImages.length + starter;
    const afterNewArrivals = afterSlider + newArrivalsImages.length;
    const afterOffers = afterNewArrivals + offerImages.length;

    const itemsSuccess = (data, image, title, price, counter) => {
        Array.prototype.forEach.call(image, (e, i) => {
            e.src = `http://${data.products[i+counter].imageUrl}`;
        });
        Array.prototype.forEach.call(title, (e, i) => {
            e.innerHTML = data.products[i+counter].name;
        });
        if(price) {
            Array.prototype.forEach.call(price, (e, i) => {
                e.innerHTML = data.products[i+counter].price.current.text;
            });
        }
    }

    const itemsFailed = (image, title, price) => {
        Array.prototype.forEach.call(image, (e, i) => {
            e.src = `https://via.placeholder.com/268x338?text=Product not found`;
        });
        Array.prototype.forEach.call(title, (e, i) => {
            e.innerHTML = 'Product not found';
        });
        if(price) {
            Array.prototype.forEach.call(price, (e, i) => {
                e.innerHTML = 'Product not found';
            });
        }
    }

    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "0240dcd28fmsh22377cc5bb192d6p1d9ceajsn3473acb0639a"
        }
    })
    .then(response => response.json())
    .then(data => {
        itemsSuccess(data, sliderItemImages, sliderItemTitle, sliderItemPrice, starter);
        itemsSuccess(data, newArrivalsImages, newArrivalsTitle, newArrivalsPrice, afterSlider);
        itemsSuccess(data, offerImages, offerTitle, null, afterNewArrivals);
    })
    .catch(err => {
        console.log(err);
        itemsFailed(sliderItemImages, sliderItemTitle, sliderItemPrice);
        itemsFailed(newArrivalsImages, newArrivalsTitle, newArrivalsPrice);
        itemsFailed(offerImages, offerTitle, null);
    });
}

export default fetchData;

