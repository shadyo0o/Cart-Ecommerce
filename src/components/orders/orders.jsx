import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Orders() {

    const [product, setProduct] = useState({})
    useEffect(() => {
        getAllOrders()

    }, [])

    async function getAllOrders(){
        let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
        console.log(data.data);
        setProduct(data.data[0])
        console.log(data.data[0])
        // console.log(product);
        
    }
    

    return <div className="mt-14 bg-gray-900 text-white">
        <h1 className="text-4xl text-teal-700 font-bold my-4">Payment Details</h1>
    <h1 className="text-2xl text-green-500">Name: {product?.user?.name}</h1>
    <h1 className="text-2xl text-green-500">Email: {product?.user?.email}</h1>
    <h1 className="text-2xl text-green-500">Phone: {product?.user?.phone}</h1>
    <h1 className="text-2xl text-green-500">Ispaid: {product?.isPaid? true:false}</h1>
    <h1 className="text-2xl text-green-500">Adress of paid: {product?.paidAt}</h1>
    <h1 className="text-2xl text-green-500">Total Price: {product?.totalOrderPrice}</h1>
    </div>;
}
