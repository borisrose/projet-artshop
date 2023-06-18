console.log('main.js is on')
const showButton = document.querySelector('#home-section__button');
/* declaring a function */
/** =>  1 arrow function */
const showProducts = () => {

    console.log('showProducts is on ...');

    showButton.innerHTML = "En cours de chargement ..."

    setTimeout(() => {

        window.location = './views/products.html'

    }, 3000)
 
}


//call showProducts()