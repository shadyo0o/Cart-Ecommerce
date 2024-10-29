import React, { useContext } from "react";
import style from './WishList.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { WishContext } from "../../Context/WishContext";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";

export default function WishList() {



    const [product, setProduct] = useState(null)
    useEffect(() => {
        showWishlistProduct()

    }, [])
    let {getWishList,removeItem}=useContext(WishContext)


    const [loading, setloading] = useState(false)
    const [currentId, setCurrentId] = useState(0)

    let{addProductToCart}=useContext(CartContext)

    async function addProduct(productId) {
        setloading(true);
        setCurrentId(productId)
        let response = await addProductToCart(productId);
        console.log(response);
        if (response.data.status === "success") {
          setloading(false);
      
          toast.success(response.data.message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#168740",
              color: "#fff",
            },
          });
        } else {
          setloading(false);
      
          toast.error(response.data.message, {
            
            icon: '👏',
            style: {
              borderRadius: '10px', 
              background: '#333',
              color: '#fff',
            },
          });
        }
      
      }



async function showWishlistProduct(){
    let response=await getWishList()
    console.log(response.data.data);
    setProduct(response.data.data)
    
}

async function deleteItem(productId){
    // removeItem(productId)

    let response =await removeItem(productId)
    toast.success(response.data.message)
    console.log(response);
    showWishlistProduct()
    
}

    

    return   <div className="row">
    {product?.map((product) => (
      <div key={product.id} className="w-1/4 px-4 shadow-lg hover:shadow-green-500">
        <div className="product py-2">
          
            <img
              className="w-full"
              src={product.imageCover}
              alt={product.title}
            />
            <span className="block font-light text-green-600">
              {product?.category?.name}
            </span>
            <h3 className="text-lg text-green-800">
              {product.title.split(" ").slice(0, 2).join(" ")}
            </h3>
            <div className="flex justify-between items-center p-2">
              <span>{product.price} EGP</span>
              <span>
                {product.ratingsAverage}{" "}
                <i className="fas fa-star text-yellow-500"></i>
              </span>
            </div>
         




{/* <div>
  <i id="change" onClick={()=> toggle(product.id)} className="fas fa-heart text-gray-500"></i>
</div> */}


<div className="flex justify-center">



<button onClick={()=> deleteItem(product.id)} className="btn">Delete from WishList</button>


<button onClick={() => addProduct(product.id)} className="btn">
            {loading && currentId=== product.id? <i className="fas fa-spinner fa-spin"></i>:'Add To Cart'}                         
          </button>


  
</div>


        </div>
      </div>
    ))}



  </div>
}
