import React from "react";
import style from './CategoriesSlider.module.css'
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import axios from "axios";

export default function CategoriesSlider() {

    const [categories, setCategories] = useState([])

    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay:true,
    };

    function getCategory(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(({data})=>{
            setCategories(data.data)

        })
    }

    
    useEffect(() => {
        getCategory()
        // console.log(categories);
        

    }, [])
    

    return <div>


    <Slider {...settings}>
                {
                    categories?.map((category) => (
                        <div key={category._id}>
                            <img className="w-full h-[200px]" src={category?.image} alt={category?.name} />
                            <h3 className="text-green-700">{category.name}</h3>
                        </div>
                    ))
                }
            </Slider>

    
    </div>;
}
