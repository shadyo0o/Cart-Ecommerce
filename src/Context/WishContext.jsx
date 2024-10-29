import axios from "axios";
import { createContext, useEffect } from "react";
import toast from "react-hot-toast";

export let WishContext = createContext();

export default function WishContextProvider({ children }) {
useEffect(() => {
    
}, []);

let headers = {
    token: localStorage.getItem("userToken"),
};

function addProductToWishList(productId) {
    return axios
    .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        { headers }
    )
    .then((res) =>{ toast.success("Added successfully to wishlist");
        return res
        
        })
    .catch((error) => error);
}

function getWishList(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers})
    .then((res)=> {
        
       return res})
    .catch((error)=> error)
}


function removeItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers})
    .then((res)=> { toast.success("removed successfully from wishlist");
        return res
        
        })
    .catch((error)=>error)
}


return <WishContext.Provider value={{addProductToWishList,getWishList,removeItem}}>
    {children}
    </WishContext.Provider>;
}
