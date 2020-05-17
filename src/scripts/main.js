import slider from './slider';
import scrollToTop from './scrollToTop';
import setDate from './setDate';
import fetchData from './fetchData';

const startAllFunctions = () => {
    fetchData();
    slider();
    scrollToTop();
    setDate();
}

export default startAllFunctions;