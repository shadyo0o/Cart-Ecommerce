import axios from "axios";
import { createContext, useState } from "react";


export let CartContext=createContext();

export function CartContextProvider(props){

const [cart, setCart] = useState(null)
    let headers = {
            token: localStorage.getItem('userToken')
        };

    function getLoggedUserCart(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        }
            
        ).then((response)=>{
            console.log(response.data);
            setCart(response.data)
            return response;
            
        })
        .catch((error)=>error)
    }


    function updateCartItem(productId,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count: count
        },{
            headers
        }).then((response)=>response)
        .catch((error)=>error)
    }

    function deleteCartItem(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            {
                headers
            }
        ).then((response)=>response)
        .catch((error)=>error)
    }


    function addProductToCart(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
            headers
        })
        .then((response)=>{
            // console.log(response);
            return response;
            
        })
        .catch((error)=>error)
    }

    function clearCart(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        })
    }

    return <CartContext.Provider value={{cart,setCart,getLoggedUserCart,addProductToCart,updateCartItem,deleteCartItem ,clearCart }}>
    
    {props.children}
    
    </CartContext.Provider>

}








