
const fetchProducts = async(url) =>{
    
    const response =  await fetch(url).catch( (err)=> console.log(err));
    
    if(response){
        
        return response.json();
    }
    return response
   
}
export default fetchProducts;