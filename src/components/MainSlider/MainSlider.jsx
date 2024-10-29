import React from "react";
import style from './MainSlider.module.css'
import { useEffect } from "react";
import { useState } from "react";
import slide1 from '../../assets/image/slide1.jpeg'
import slide2 from '../../assets/image/slide2.jpeg'
import slide3 from '../../assets/image/slide3.jpeg'
import slide4 from '../../assets/image/slide4.jpeg'
import slide5 from '../../assets/image/slide5.jpeg'
import Slider from "react-slick";

export default function MainSlider() {


    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
    };
    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])


    
    

    return <div className="flex pb-3">
    
    <div className="w-3/4">
    <Slider {...settings}>
    
    <img className="w-full h-[300px]" src={slide1} alt="" />
    <img className="w-full h-[300px]" src={slide4} alt="" />
    <img className="w-full h-[300px]" src={slide5} alt="" />
    
    </Slider>
    
    </div>
    <div className="flex flex-col justify-center items-center w-1/4">
        <img className="w-full h-[150px]" src={slide2} alt="" />
        <img className="w-full h-[150px]" src={slide3} alt="" />
    </div>





    </div>
}
