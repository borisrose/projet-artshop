console.log('main.js is on')


/* declaring a function */
/** =>  1 arrow function */
const showProducts = () => {

    console.log('showProducts is on ...');


    setTimeout(() => {

        window.location = './views/products.html'

    }, 5000)
 
}


//call showProducts()