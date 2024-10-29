import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


export default function NewPassword() {
    
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState('')
    let navigate=useNavigate()







// function goToForgetnewpassword(){


//     navigate('/forget')
    
// }








function newPassword(formValue){
    setIsLoading(true)
    
    axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,formValue)
    .then((x)=>{
        if(x.data.token){
            console.log(x);
            
            navigate('/login')
            setIsLoading(false)
        }

    }).catch((apiResponse)=>{
        
        setApiError(apiResponse?.response?.data?.message)
        setIsLoading(false)
    })
}

let validation=Yup.object().shape({
    email:Yup.string().email('invalid email').required('required '),
    newPassword:Yup.string().matches(/^[A-Z][a-z0-9]{3,10}$/,'invalid').required('required'),
})

    let formik=useFormik({
        initialValues:{
            email:'',
            newPassword:'',
        },
        onSubmit:newPassword,
        validationSchema:validation,
    })



    return <div className=" py-6 max-w-xl mx-auto">
<form onSubmit={formik.handleSubmit}>

{
    apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {apiError}
    </div>:null
}



<div className="relative z-0 w-full mb-5 group">
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
</div>
{
    formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.email}
    </div>:null
}



<div className="relative z-0 w-full mb-5 group">
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.newPassword} type="password" name="newPassword" id="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
    <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">newPassword</label>
</div>
{
    formik.errors.newPassword && formik.touched.newPassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.newPassword}
    </div>:null
}



<button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {
        isLoading? <i className="fas fa-spinner fa-spin"></i>:'Submit'
    }
</button>



</form>
    </div>;
}
