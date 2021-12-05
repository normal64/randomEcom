import {toggleSidebar} from './toggleSidebar.js';
import{
    getStorageItem,
    setStorageItem,
    getElement
}   from './utils.js';
import formatPrice from './formatPrice.js';
import {findProduct} from "./setupStore.js";
import addToCartDOM from './addToCartDOM.js'
const cartItemCountDOM = getElement(".cart-items-button"); 
const cartItemsDOM = getElement(".side-bar-items");
const cartTotalDOM = getElement(".cart-total");
let cart = getStorageItem("cart")

export const addToCart = (id) =>{
    let item = cart.find((cartItem) => cartItem.ean === id);
    if(!item){
        let product = findProduct(id);
        //add product to the cart
        product = {...product,amount:1}
        cart = [...cart,product]
        //add product to the DOM
        addToCartDOM(product);
        console.log(cart);
    }else{
        //update values
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll(".amountForItem")]
        const newAmount = items.find(   (value) => value.dataset.id === id)
        newAmount.textContent = amount;
        console.log(items);
        
    }
    //add one item to the count
    displayCartItemCount();
    //display cart totals
    displayCartTotal()
    //set cart in lcoal storage
    setStorageItem("cart",cart)
    //opening of cart
    toggleSidebar();
};
function increaseAmount(id){
    let newAmount;
    cart = cart.map(    (cartItem)  =>{
       if(cartItem.ean === id){
           newAmount = cartItem.amount + 1;
            cartItem = {...cartItem,amount: newAmount}
       }
       return cartItem;
    })
    return newAmount;
}
function displayCartItemCount() {
    const amount = cart.reduce( (total,cartItem)  =>{
        return total += cartItem.amount
    },0)
    cartItemCountDOM.textContent = amount;
}
function displayCartTotal() {
    const total = cart.reduce(  (total,cartItem)=>{
        return total    += cartItem.net_price * cartItem.amount
    },0)
    cartTotalDOM.textContent = `Total: ${formatPrice(total)}`
}
function removeItem(id){
    cart = cart.filter( (cartItem)  => cartItem.ean !== id)
}
function decreaseAmount(id){
    let newAmount;
    cart = cart.map(    (cartItem)  =>{
       if(cartItem.ean === id){
           newAmount = cartItem.amount - 1;
            cartItem = {...cartItem,amount: newAmount}
       }
       return cartItem;
    })
    return newAmount;
}


function setupCartFunctionality(){
    cartItemsDOM.addEventListener("click", function(event){
        const element    = event.target;
        const parent = event.target.parentElement.parentElement;
        const id = event.target.parentElement.dataset.id;
        const parentID =event.target.parentElement.parentElement.dataset.id;
        //remove
        if(element.classList.contains("removeFromCart-btn")){
            removeItem(parentID)
            parent.remove()
        }
        
        //increase
        if(element.classList.contains("increaseAmount")){
            const newAmount = increaseAmount(parentID);
            element.nextElementSibling.textContent = newAmount;
        }

        //decrease
        if(element.classList.contains("decreaseAmount")){
            const newAmount = decreaseAmount(parentID);
            element.previousElementSibling.textContent = newAmount;
        }
        displayCartItemCount();
        displayCartTotal();
        setStorageItem("cart",cart)
    })

};
function displayCartItemsDOM(){
    cart.forEach((cartItem)=>{
        addToCartDOM(cartItem)
    })
}
function setupCartItemsDOM(){

}
const init = () => {
   //display amount of cart item
   displayCartItemCount();
   //displaay total
   displayCartTotal();
   //add all cart items to the dom
   displayCartItemsDOM();

   //
   setupCartFunctionality();
}
init();

export default {addToCart};