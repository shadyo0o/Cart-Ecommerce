import React, { useContext } from "react";
import style from './Checkout.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";

export default function Checkout() {

let{checkOut}=useContext(CartContext)

let {cartId}=useParams()
console.log(cartId);


    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])




    let validationSchema=yup.object().shape({
        phone:yup.string().matches(/^01[0125][0-9]{8}$/,'invalid number').required('required')
    })

    let formik=useFormik({
        initialValues: {
            details:'',
            phone:'',
            city:'',
        },validationSchema,
        onSubmit:()=> handleCheckout(`${cartId}`,'http://localhost:5173')
    })


    async function handleCheckout(cartId,url){
        
        let {data}= await checkOut(cartId,url,formik.values)

        console.log(data);
        

        if(data.status === "success")
        {
            window.location.href=data.session.url
        }
        
        
    }


  


    

    return <div>




<form onSubmit={formik.handleSubmit} className="w-1/2 mx-auto mt-36">
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.datails} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
  </div>



  <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
Pay Now
</button>





</form>




    </div>;
}
