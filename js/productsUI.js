import { apiService } from "./service/index.js"
const productsFooter = document.querySelector('#products-footer')
const productsSection = document.getElementById('products-section')


const buyMessageContent = (p) => {

    return(
        `
            <p> Vous devez être connecté(e) pour acheter ${p.name} </p>
            <p> Cliquez <a href="../views/log.html"><b style="color:black;">ici</b></a> pour vous connecter </p>
        `
    )
}

const articleContent = (prod) => {

       
    return(
        `<div class="image-container">

            <img src=${prod.url} alt=${prod.name} />

        </div>
        <div class="info-container">
        
            <p><b>Author : </b>${prod.author}</p>
            <p><b>Description : </b>${prod.description}</p>
            <p><b>${prod.price}€</b></p>
        
        </div>

        <div class="button-container">
                <button class="buy-button" data-id=${prod.id}> Acheter </button>
        </div>

        `
    )
}


const showLogMessage = (p) => {

        
    console.log('showLogMessage', p)
    window.scrollBy({

        top:window.innerHeight,
        left:0,
        behavior:'smooth'

    })

    const newMessageDiv = document.createElement('div')
    newMessageDiv.classList.add('log-message-container')

    newMessageDiv.innerHTML = buyMessageContent(p)
    productsFooter.append(newMessageDiv)
    setTimeout(() => {

        productsFooter.removeChild(newMessageDiv)

    }, 7000)
}



export class ProductsUI {

    /*méthode 1*/
    async init(){

        const products = await apiService.fetchAllProducstFromDB();

        console.log('producst in productsUI', products);


        products.forEach((p) => {

            console.log('p id ', p.id)
            const newArticle = document.createElement('article')
            newArticle.classList.add('product-article')
    
            newArticle.innerHTML = articleContent(p)
    
        
            productsSection.append(newArticle)
        })


        const buyButtons = document.getElementsByClassName('buy-button')

        const buyButtonsArray = Array.from(buyButtons)
    
        buyButtonsArray.forEach((b) => {
    
    
            b.addEventListener('click', () =>{
    
                
                for(const p of products){
    
                    if(p.id == b.dataset.id){
    
                        showLogMessage(p)
                    }
                }
    

            })
        
        })
  
    }


}



    // a function that creates what the article will contain as html elements 


    // a loop that will apply the statements to each element of the array


   
 

  

