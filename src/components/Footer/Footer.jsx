import React from "react";
import style from './Footer.module.css'
import { useEffect } from "react";
import { useState } from "react";

export default function Footer() {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
    

    }, [])


    // function toggle(){
    //   let tog= document.querySelector('.btn1 i')
    //   if(tog.classList.contains('text-gray-400')){
    //     tog.classList.remove('text-gray-400')
    //     tog.classList.add('text-red-400')
    //   }else{
    //     tog.classList.remove('text-red-400')
    //     tog.classList.add('text-gray-400')
    //   }
    // }


    
    

    return    <footer className="footer relative min-h-screen dark:bg-gray-900 mb-3 mx-auto">
    <div className="footer-content absolute bottom-0 left-0 w-full bg-green-200">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <div className="flex flex-row gap-4 justify-center items-center my-5 ">
      <i className="fa-brands fa-facebook fa-xl hover:text-lime-700 cursor-pointer"></i>
      <i className="fa-brands fa-x-twitter fa-xl hover:text-lime-700 cursor-pointer"></i>
      <i className="fa-brands fa-github fa-xl hover:text-lime-700 cursor-pointer"></i>
      <i className="fa-brands fa-linkedin-in fa-xl hover:text-lime-700 cursor-pointer"></i>
      </div>
      <div className="footer-links">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <a >Contact Us</a>
      </div>

{/* <div onClick={()=> toggle()} className="btn1"><i className= "cursor-pointer fas fa-heart text-gray-400"></i></div> */}


    </div>
  </footer>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  //   <div className="relative min-h-screen">
  //   {/* محتوى الصفحة الرئيسي هنا */}
    
  //   <footer className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-900">
  //     <div className="footer-content text-center py-4">
  //       <p>&copy; 2024 Your Company Name. All rights reserved.</p>
  //       <div className="flex flex-row gap-4 justify-center items-center my-5">
  //         <i className="fa-brands fa-facebook fa-xl hover:text-lime-700 cursor-pointer"></i>
  //         <i className="fa-brands fa-x-twitter fa-xl hover:text-lime-700 cursor-pointer"></i>
  //         <i className="fa-brands fa-github fa-xl hover:text-lime-700 cursor-pointer"></i>
  //         <i className="fa-brands fa-linkedin-in fa-xl hover:text-lime-700 cursor-pointer"></i>
  //       </div>
  //       <div className="footer-links space-x-4">
  //         <span>Privacy Policy</span>
  //         <span>Terms of Service</span>
  //         <a className="font-semibold text-green-600 hover:text-green-800" href="#">Contact Us</a>
  //       </div>
  //     </div>
  //   </footer>
  // </div>
    
    
    
    
    
    
    
    
    
    
    
    
    

}
