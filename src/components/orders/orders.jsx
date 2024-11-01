import React from "react";
import style from './Orders.module.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Orders() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
        getAllOrders()

    }, [])

    async function getAllOrders(){
        let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
        console.log(data);
        
    }
    

    return <div>
    <h1>Orders</h1>
    <p>This is a template name.</p>
    </div>;
}
