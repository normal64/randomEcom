import {getElement} from "./utils.js";
import displayProducts from "./displayProducts.js";

const setupSearch = (store) =>{
    const form = getElement(".input-form")
    const nameInput = getElement(".search-input");
    form.addEventListener("keyup", function(){
        const value = nameInput.value;
        if (value) {
            const newStore = store.filter( (product) =>{
                let {name} = product;
                name = name.toLowerCase();
                if(name.startsWith(value)){
                    console.log("name starts with",product)
                    return product;
                }
            });
            displayProducts(".hero-container", newStore);
            if(newStore.length < 1){
                console.log("shortage found");
                const products = getElement(".hero-container");
                console.log(products);
                products.innerHTML = 
                `<h3 class="filterError">Sorry no items fit the search</h3>
                `;
            }

        } else {
            displayProducts(".hero-container",store)
            
        }
    })
}
export default setupSearch;
