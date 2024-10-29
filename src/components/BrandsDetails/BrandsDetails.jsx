import React from "react";
import style from './BrandsDetails.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { data } from "autoprefixer";

export default function BrandsDetails() {

// const [brand, setBrand] = useState(null)
const [related, setRelated] = useState([])


    let {id,name}=useParams()
    console.log(id);
    

    // function getBrandsDetails(id){
    //     axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    //     .then(({data})=>{
    //         console.log(data.data.name);
    //         setBrand(data.data)
            
    //     }).catch((error)=>{
    //         console.log(error);
            
    //     })
    // }

    // console.log(brand?.name);
    


    async function getRelatedBrands(name){
        await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then(({data})=>{
            console.log(data.data);
            let allProducts=data.data
            console.log(allProducts);
            
            let relatedBrands=allProducts.filter((product)=> product.brand.name == name)
console.log(relatedBrands);
setRelated(relatedBrands);
console.log(related);


        })
        .catch((error)=>{
            console.log(error);
            
        })
        
    }

    
useEffect(() => {
// getBrandsDetails(id)
getRelatedBrands(name)
}, [])



    return <div className="flex flex-wrap items-center">

{
                    related?.map((product) => ( 
                    <div key={product._id} className="p-3 bg-green-800 w-1/4 flex text-white shadow-2xl">
        
                        <Link className="" to={`/brands/${id}/${name}`}>
                            <img src={product?.imageCover} alt={product?.title} />
                            <h1>{product?.title}</h1>
                        </Link>
                        
                        </div>
                        
                    ))
                }


</div>

        
    
    
    
}
