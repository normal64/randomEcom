import fetchProducts from "./src/fetchProducts.js";
import displayProducts from "./src/displayProducts.js";
import {setupStore,store} from "./src/setupStore.js";
import {toggleSidebar,closeSidebar,closeSidebarBtn}  from "./src/toggleSidebar.js"
import { getElement } from "./src/utils.js";
import setupSearch from './src/search.js'
import setupPrice from "./src/price.js"

const   cartItemsButton = getElement(".cart-items-button");
 const baseURL = "https://fakerapi.it/api/v1/products?_quantity=10";
 let URL ;
 const productsAmountInput = getElement('#productsAmount');
 const startBtn = getElement(".start-btn");

 const start = () => {
     console.log(productsAmountInput.value);
     URL = `https://fakerapi.it/api/v1/products?_quantity=${productsAmountInput.value}`
     init()
 }
const init = async () => {
    if(!URL){
        URL = baseURL;
    }
   const data = await fetchProducts(URL);
   if(data){
       //add products to the store
   let items = data.data;
    setupStore(items);
    console.log(store);
    displayProducts(".hero-container",store)
   }
   
  
//    displayProducts(".hero-container"," JEBAT CIEBIE")
}
setupSearch(store);
setupPrice(store)
window.addEventListener("DOMContentLoaded", init);
cartItemsButton.addEventListener("click",toggleSidebar)
closeSidebarBtn.addEventListener("click",   closeSidebar);
startBtn.addEventListener("click", start)