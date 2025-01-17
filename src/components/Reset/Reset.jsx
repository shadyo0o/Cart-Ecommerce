import { useState } from "react";
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Reset() {
    
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState('')
    let navigate=useNavigate()







// function goToForgetPassword(){


//     navigate('/forget')
    
// }








async function resetcode(formValue){
    setIsLoading(true)
    
    await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,formValue)
    .then((data)=>{
        if(data?.data?.status=='Success'){
           console.log(data);
           
           
            navigate('/newpassword')
            setIsLoading(false)
        }

    }).catch((apiResponse)=>{
        
        setApiError(apiResponse?.response?.data?.message)
        setIsLoading(false)
    })
}



    let formik=useFormik({
        initialValues:{
            resetCode:'',
           
        },
        onSubmit:resetcode,
       
    })



    return <div className=" py-6 max-w-xl mx-auto">
<form onSubmit={formik.handleSubmit}>

{
    apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {apiError}
    </div>:null
}



<div className="relative z-0 w-full mb-5 group">
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.resetCode} type="text" name="resetCode" id="resetCode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
    <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">resetCode address</label>
</div>
{
    formik.errors.resetCode && formik.touched.resetCode ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.resetCode}
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
