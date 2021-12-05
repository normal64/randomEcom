const getElement = (selection) =>{
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(
        `Please check the ${selection} selector as no element found`
    );
}
const setStorageItem = (name,item)   => {
    localStorage.setItem(name, JSON.stringify(item))
};
const getStorageItem = (item)   => {
    
    let storageItem =  localStorage.getItem(item)
    if(storageItem){
        storageItem =JSON.parse(localStorage.getItem(item))
    }else{
        storageItem = [];
    }
    return storageItem;
};

export{
    getElement,
    setStorageItem,
    getStorageItem
}