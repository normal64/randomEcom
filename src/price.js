import {getElement} from "./utils.js";
import formatPrice from "./formatPrice.js"

const setupPrice = (store) => {
    const priceInput = getElement(".price-form");
    const priceValue = getElement(".price-filter");
 
    //setup filter
    let maxPrice = store.map((product)  => product.net_price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice);
    //why this does go off????
    priceValue.value = 123;
    priceValue.max = maxPrice;
    priceValue.min = 0;
    
}
export default setupPrice;