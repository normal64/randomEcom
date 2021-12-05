import {getElement} from "./utils.js";
const cartBar = getElement(".cart-bar");
const closeSidebarBtn = getElement(".close-cart-bar-button");

const toggleSidebar = () => {
    cartBar.classList.remove("hide");
}
const closeSidebar = () => {
    cartBar.classList.add("hide");
}

export{
    toggleSidebar,
    closeSidebarBtn,
    closeSidebar,
}