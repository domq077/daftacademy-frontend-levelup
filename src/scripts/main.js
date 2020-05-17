import slider from './slider';
import scrollToTop from './scrollToTop';
import setDate from './setDate';
import showAllProducts from './showAllProducts';
import fetchData from './fetchData';

const startAllFunctions = () => {
    fetchData();
    slider();
    scrollToTop();
    setDate();
    showAllProducts();
    
}

export default startAllFunctions;