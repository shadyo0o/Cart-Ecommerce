import React, { useContext } from "react";
import style from './ProductDetails.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";
import { WishContext } from "../../Context/WishContext";

export default function ProductDetails() {
    

    const [loading, setloading] = useState(false)
    const [currentId, setCurrentId] = useState(0)
    let { addProductToCart,setCart } = useContext(CartContext);

    let {addProductToWishList,removeItem}=useContext(WishContext)
    const [wishList, setWishList] = useState({})


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








    
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
    };




    const [productDetails, setProductDetails] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])

let{id,category}=useParams()

    function getProductDetails(id){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        .then(({data})=>{
            console.log(data.data);
            
            setProductDetails(data.data)
        })
    }
    function getRelatedProducts(category){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then(({data})=>{
            let allProduct=data.data;
            let related=allProduct.filter((product)=> product.category.name==category && product.id !=id)
            console.log(related);
            
            setRelatedProducts(related)
            
        })
    }


    
    useEffect(() => {
    getProductDetails(id)
    getRelatedProducts(category)
    // console.log(relatedProducts);
    
    }, [id,category])

    async function addProduct(productId) {
        setloading(true);
        setCurrentId(productId)
        let response = await addProductToCart(productId);
        console.log(response);
        if (response.data.status === "success") {
      setCart(response.data)
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
    

    return <> 
    
    { productDetails !==null?<div key={productDetails.id} className="row product">
    <div className="w-1/4">


    <Slider {...settings}>
{
    productDetails?.images.map((src)=> <img key={productDetails.id} className="w-full" src={src} alt={productDetails?.title} />)
}
    
    </Slider>

    
    </div>
    <div className="w-3/4 px-3">
    <h3 className="font-semibold text-xl">{productDetails?.title}</h3>
    <p>{productDetails?.description}</p>
    <div className="flex justify-between items-center p-2">
            <span>{productDetails?.price} EGP</span>
            <span>{productDetails?.ratingsAverage} <i className="fas fa-star text-yellow-500"></i></span>
            </div>



            <p onClick={() => toggleWishList(productDetails.id)} className="text-3xl my-2 cursor-pointer">
              {wishList[productDetails?.id] ? (
                <i onClick={()=> removeWishItem(productDetails.id)} className="fa-solid fa-heart text-red-500"></i> // قلب ممتلئ باللون الأحمر
              ) : (
                <i onClick={()=> wishProduct(productDetails.id)} className="fa-regular fa-heart text-gray-500"></i> // قلب فارغ باللون الرمادي
              )}
            </p>



            
            <button onClick={() => addProduct(productDetails.id)} className="btn">
            {loading ? <i className="fas fa-spinner fa-spin"></i>:'Add To Cart'}                         
          </button>
            
            
    </div>

    </div>:<div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>}



{/* ****************************************start of relate product**************************************************** */}



<div className="">
  
    <Slider {...settings2}>
      {relatedProducts?.map((product) => 
        <div key={product.id} className="px-4 w-1/6">
          <div className="product py-2 w-full">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
              <img className="w-full" src={product?.imageCover} alt={product?.title} />
              <span className="block font-light text-green-600">{product.category.name}</span>
              <h3 className="text-lg text-green-800">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
              <div className="flex justify-between items-center p-2">
                <span>{product.price} EGP</span>
                <span>{product.ratingsAverage} <i className="fas fa-star text-yellow-500"></i></span>
              </div>
            </Link>
                        <p onClick={() => toggleWishList(product.id)} className="text-3xl my-2 cursor-pointer">
              {wishList[product?.id] ? (
                <i onClick={()=> removeWishItem(product.id)} className="fa-solid fa-heart text-red-500"></i> // قلب ممتلئ باللون الأحمر
              ) : (
                <i onClick={()=> wishProduct(product.id)} className="fa-regular fa-heart text-gray-500"></i> // قلب فارغ باللون الرمادي
              )}
            </p>
            <button className="btn">Add To Cart</button>
          </div>
        </div>
      )}
    </Slider>
 
</div>


















{/* <div className="row">
            {
                relatedProducts.length > 0 ? 
                <Slider {...settings}>
                    {relatedProducts.map((product) => (
                        <div key={product.id} className="px-4 w-1/6">
                            <div className="product py-2">
                                <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                                    <img className="w-full" src={product?.imageCover} alt={product?.title} />
                                    <span className="block font-light text-green-600">{product.category.name}</span>
                                    <h3 className="text-lg text-green-800">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                                    <div className="flex justify-between items-center p-2">
                                        <span>{product.price} EGP</span>
                                        <span>{product.ratingsAverage} <i className="fas fa-star text-yellow-500"></i></span>
                                    </div>
                                    <button className="btn">Add To Cart</button>
                                </Link> 
                            </div>
                        </div>
                    ))}
                </Slider>
                : 
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
            }
        </div> */}

        {/* ****************************************************************************************************** */}

</> 
}
