import formatPrice from './formatPrice.js'
import { getElement } from './utils.js';
const cartItemsDOM = getElement(".side-bar-items");
const addToCartDOM = ({description,ean,name,image,net_price,amount}) => {
    
const article = document.createElement("article");
article.classList.add("card-item");
article.setAttribute("data-id", ean);
article.innerHTML = 
`
<div class="leftSideCardItem">
                    <h2>${name}</h2>
                    <img src=${image} alt="product image">
                    <h4>${formatPrice(net_price)}</h4>
                      <button class="removeFromCart-btn" data-id="${ean}">remove</button>
                    </div>
                    <div class="rightSideCardItem">
                        <button class="increaseAmount" data-id="${ean}"> &#8679;</button>
                        <p class="amountForItem" data-id="${ean}">${amount}</p>
                        <button class="decreaseAmount" data-id="${ean}">&#8681;</button>
                    </div>

`;
cartItemsDOM.appendChild(article);

}
export default addToCartDOM;