import React, { useContext } from "react";
import style from "./Cart.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const [cartDetails, setCartDetails] = useState(null);
const [loading, setLoading] = useState(false)
  let {setCart, getLoggedUserCart,updateCartItem ,deleteCartItem,clearCart} = useContext(CartContext);

  async function clear(){
    setLoading(true)
    let response=await clearCart()
    setLoading(false)
    setCartDetails(response.data.data)
    setCart(response.data)
  }




  async function getCartItem() {
    let response = await getLoggedUserCart();
    // console.log(response.data.data);
    setCartDetails(response.data.data);
  }

  async function getUpdateCartItem(productId,count) {

    if(count == 0){
      getDeleteCartItem(productId)
    }else{
      let response=await updateCartItem(productId,count)
      setCartDetails(response.data.data)
      setCart(response.data)
    }

  }



  async function getDeleteCartItem(productId) {
    let response=await deleteCartItem(productId)
    // console.log(response);
    
    setCartDetails(response.data?.data)
    setCart(response.data)
    
  }



  useEffect(() => {
    getCartItem();
  }, []);




  return (
    <>


    {
      cartDetails?.products.length > 0 ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg product">
      <h2 className="text-center text-3xl text-green-700 py-5 font-bold">Shopping Cart </h2>
      <h4 className="text-lime-600 text-2xl py-5 bg-slate-200 font-semibold">Total cart price: {cartDetails?.totalCartPrice} EGP</h4>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cartDetails?.products.map((product)=> 
              <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
              <img
                src={product.product.imageCover}
                className="w-16 md:w-32 max-w-full max-h-full"
                alt="Apple Watch"
              />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              {product.product.title.split(" ").slice(0,2).join(' ')}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <button onClick={()=>getUpdateCartItem(product.product.id,product.count-1)}
                  className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <div>
<span>
  {product.count}
</span>
                </div>
                <button onClick={()=>getUpdateCartItem(product.product.id,product.count+1)}
                  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              
              {product.price} EGP
            </td>
            <td className="px-6 py-4">
              <span onClick={()=> getDeleteCartItem(product.product.id)}
                
                className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </span>
            </td>
          </tr>
          
  
          )}
        
        </tbody>
      </table>
      <div className="">
      <button className="btn" onClick={clear}>{
        loading ? <i className="fas fa-spinner fa-spin"></i>:'Clear All'
        }
      </button>


      </div>
    </div>: <h1 className="text-3xl text-green-700">there is not product to show</h1>
    }
      
    </>
  );
}
