const setDate = () => {
    const copyrights = document.getElementById('copyrights');
    const year = new Date().getFullYear();
    copyrights.innerHTML = `©${year} Zonex All rights reserved`;
}

export default setDate;