import React from "react";
import style from './LayOut.module.css'
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function LayOut() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])
    

    return <div>
    <Navbar/>
<div className="container mx-auto my-6 py-6">
    <Outlet></Outlet>
</div>
    


    <Footer/>
    </div>;
}
