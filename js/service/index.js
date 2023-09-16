export const apiService = {

    async fetchAllProducstFromDB(){

        const products = await (await fetch('../database.json')).json()

        console.log('products in service', products)

        return products
    }



}