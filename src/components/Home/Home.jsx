import React from "react";
import style from './Home.module.css'
import { useEffect } from "react";
import { useState } from "react";
import RecentProducts from "../RecentProducts/RecentProducts";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import MainSlider from "./../MainSlider/MainSlider";





export default function Home() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])
    

    return <div>
        <MainSlider/>
        <CategoriesSlider/>
    <RecentProducts/>
    </div>;
}
