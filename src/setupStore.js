import { setStorageItem,getStorageItem } from "./utils.js";

let store = getStorageItem("store");
const setupStore = (products) =>{
    store = products.map(   (product) =>{
         console.log("images",product.images[0].url);
        const {name, description, ean, net_price,image } = product;
       
        
        return {name, description, ean, net_price,image};
    })
    setStorageItem("store",store)
};
const findProduct = (id) => {
    let product = store.find( (product) =>product.ean  === id)
    
    return product; 

}
console.log(store);
export {setupStore, store,findProduct}