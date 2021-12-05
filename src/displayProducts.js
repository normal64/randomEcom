import {getElement} from "./utils.js";
import formatPrice from "./formatPrice.js";
import {addToCart} from "./setupCart.js"


const displayProducts   =   (location,data) =>{
    console.log("data",data);
    const where = getElement(location);
    const what = data.map(  (elem) =>{
         const {name, description,ean, net_price,image} = elem;
        
        
        return`<article class="product" id=${ean}>
                <h2>${name}</h2>
                <p>${description}</p>
                <img src=${image}   alt="product image">
                <h4>${formatPrice(net_price) }</h4>
                <button class="addToCart-btn">Add t0 cart</button>
            </article>
        `
    }).join("");
    where.innerHTML = what;
    where.addEventListener("click", function(event){
        const target = event.target;
        if(target.classList.contains("addToCart-btn")){
            console.log();
            addToCart(target.parentElement.id)
        }
    })
}

export default displayProducts;