import React from "react";
import style from './Brands.module.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Brands() {

//     const [brands, setBrands] = useState([])
//     useEffect(() => {
//         getBrands()

//     }, [])

//     function getBrands(){
//         axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
//         .then(({data})=>{
//             console.log(data.data)
//             setBrands(data.data)
//         }).catch((error)=>{
//             console.log(error);
            
//         })
//     }
    


function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
}

let { data, error, isError, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
    // staleTime: 5000,
    // retry: 5,
    // retryDelay: 1000,
});

console.log(data?.data.data);
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

    return <div className="row ">
    {
        
        data?.data.data.map((brand)=> <div key={brand._id} className="lg:w-1/6 sm:w-1/2 md:w-1/4 px-3 h-full py-2">
            <Link to={`/brands/${brand._id}/${brand.name}`}>
            
            <div className="p-2 bg-green-800 cursor-pointer">
        <img className="w-full" src={brand.image} alt={brand.name} />
        <h3 className="text-white font-2xl font-semibold">{brand.name}</h3>
        </div>
            
            </Link>
    
        </div>


            
        )
    }
    </div>;
}
