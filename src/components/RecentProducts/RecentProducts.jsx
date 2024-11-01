import React, { useContext } from "react";
import style from "./RecentProducts.module.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { WishContext } from "../../Context/WishContext";



export default function RecentProducts() {




  let {addProductToWishList,removeItem}=useContext(WishContext)

  const [wishList, setWishList] = useState({}); // لتتبع حالة الـ wish list لكل منتج


  // وظيفة لتبديل حالة الـ wish list لكل منتج
  const toggleWishList = (productId) => {
      setWishList((prevWishList) => ({
        ...prevWishList,
        [productId]: !prevWishList[productId],
      }));
    };

    async function wishProduct(productId){
      let response=await addProductToWishList(productId)
      
      console.log(response);
      // setWishList(response)
      
    }

    async function removeWishItem(productId){
      let response=await removeItem(productId)
      
      console.log(response);
      // setWishList(response)
      
    }



  let { addProductToCart,setCart } = useContext(CartContext);

  const [loading, setloading] = useState(false)
  const [currentId, setCurrentId] = useState(0)

  async function addProduct(productId) {
    setloading(true);
    setCurrentId(productId)
    let response = await addProductToCart(productId);
    console.log(response);
    if (response.data.status === "success") {
      setloading(false);
      setCart(response.data)
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

    // if(response.)
    // toast.success('Successfully toasted!',)
  }

  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ["recentProducts"],
    queryFn: getRecent,
    staleTime: 5000,
    retry: 5,
    retryDelay: 1000,
  });

  console.log(data);
  

  if (isLoading) {
    return (
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    );
  }

  if (isError) {
    return <h3>{error}</h3>;
  }
  // console.log(data);

  // const [recentProducts, setRecentProducts] = useState([])

  // function getRecentProducts(){
  //     axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //     .then(({data})=>{
  //         console.log(data.data);

  //         setRecentProducts(data.data)
  //     }).catch((error)=>{
  //         console.log(error);
  //     })
  // }
  // useEffect(() => {
  // getRecentProducts()

  // }, [])
  return (
    <div className="row">
      {data.data.data?.map((product) => (
        <div key={product.id} className="w-1/6 px-4 shadow-md hover:shadow-green-500">
          <div className="product py-2">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img
                className="w-full"
                src={product.imageCover}
                alt={product.title}
              />
              <span className="block font-light text-green-600">
                {product.category.name}
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
            </Link>
            <p onClick={() => toggleWishList(product.id)} className="text-3xl my-2 cursor-pointer">
              {wishList[product.id] ? (
                <i onClick={()=> removeWishItem(product.id)} className="fa-solid fa-heart text-red-500"></i> // قلب ممتلئ باللون الأحمر
              ) : (
                <i onClick={()=> wishProduct(product.id)} className="fa-regular fa-heart text-gray-500"></i> // قلب فارغ باللون الرمادي
              )}
            </p>




            <button onClick={() => addProduct(product.id)} className="btn">
              {loading && currentId=== product.id? <i className="fas fa-spinner fa-spin"></i>:'Add To Cart'}                         
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
