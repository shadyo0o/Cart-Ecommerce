import React from "react";
import style from './CategoriesDetails.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Categories from "../Categories/Categories";

export default function CategoriesDetails() {

    const [catDetails, setCatDetails] = useState([])

let {name}=useParams()

    function getCategoriesDetails(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then(({data})=> {
            console.log(data.data);
            let allProducts=data.data;
            let relatedCat=allProducts.filter((category)=> category.category.name == name )
            setCatDetails(relatedCat)

            
        }
        
        ).catch((error)=>{
            console.log(error);
            
        })
    }









    useEffect(() => {
    getCategoriesDetails()

    }, [])
    

    return <div className="flex flex-wrap items-center">

{
    catDetails?.map((cat)=> (
        <div key={cat._id} className="w-1/4 p-2 bg-green-800 flex text-white shadow-2xl hover:scale-105 hover:rotate-2 transition-all duration-500">
            <Link to={`/categories/${name}`}>
            <img src={cat?.imageCover} alt={cat?.title} />
            <h1>{cat?.category.name}</h1>
            </Link>
            
            
        
        
        
        </div>
    ))
}


    </div>;
}
