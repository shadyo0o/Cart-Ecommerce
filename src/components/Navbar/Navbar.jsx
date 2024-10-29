import React, { useContext } from "react";
import style from './Navbar.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/image/images (1).png'
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";






export default function Navbar() {
  let {cart}=useContext(CartContext)
let navigate=useNavigate()
let {userLogin,setUserLogin}=useContext(UserContext)

function LogOut(){
  localStorage.removeItem('userToken')
  setUserLogin(null)
  navigate('/login')
}





const [isMenuOpen, setIsMenuOpen] = useState(false);



return (
  <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700 dark:text-white">
          Fresh Cart
        </span>
      </a>

      {/* زر القائمة للشاشات الأصغر */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* القائمة */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {userLogin !== null ? (
            <>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className="md:p-0 dark:text-white"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className="md:p-0 dark:text-white"
                  to="/about"
                >
                  About
                </NavLink>
              </li> */}
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className="md:p-0 dark:text-white"
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className="md:p-0 dark:text-white"
                  to="/brands"
                >
                  Brands
                </NavLink>
              </li>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
  <NavLink
    className="md:p-0 dark:text-white relative"
    to="/cart"
  >
  Cart 
    <i className="fa-solid fa-cart-shopping ">
      {/* الرقم الذي سيظهر كـ badge */}
      <span className="absolute -top-2 -bottom--7 -right-5 bg-green-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
        {cart?.numOfCartItems}
      </span>
    </i>
  </NavLink>
</li>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className=" md:p-0 dark:text-white"
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className=" md:p-0 dark:text-white"
                  to="/wishlist"
                  
                >
                  
                  WishList
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className="md:p-0 dark:text-white"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
                <NavLink
                  className="md:p-0 dark:text-white"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {userLogin !== null && (
            <li className="p-2 hover:bg-green-700 text-green-500 hover:text-white rounded cursor-pointer">
              <div
                onClick={LogOut}
                className="md:p-0 dark:text-white cursor-pointer"
              >
                Logout
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
);
};













































    

//     return <div>


// <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a  className="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src={logo} className="h-8" alt="Flowbite Logo"/>
//       <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700 dark:text-white">fresh cart</span>
//   </a>

//   <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>




//   <div className="hidden w-full md:block md:w-auto" id="navbar-default   items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
      
//       {
//         userLogin!==null ? <>
        
//         <li className="">
//         {/* <div href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"><NavLink to={"/"}>home</NavLink></div> */}
//         {/* <NavLink href="#" className="block py-2 px-3 text-lime-500 rounded  hover:bg-green-700  "  to={"/"}>home</NavLink> */}
//         <NavLink href="#" className="block py-2 px-3 text-gray-500 rounded  hover:bg-green-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  to={"/"}>home</NavLink>
//       </li>
//       <li>
//         {/* <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"about"}>about</NavLink></div> */}
//         <NavLink href="#" className="block py-2 px-3 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={"about"}>about</NavLink>
//       </li>
//       <li>
//         <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"product"}>product</NavLink></div>
//       </li>
//       <li>
//         <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"brands"}>brands</NavLink></div>
//       </li>
//       <li>
//         <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"cart"}>cart</NavLink></div>
//       </li>
//       <li>
//         <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"categories"}>categories</NavLink></div>
//       </li>
        
//         </>:null
//       }


        
    

//       {
//         userLogin===null?<>
        
//         <li>
//         <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"register"}>register</NavLink></div>
//       </li>
//       <li>
//         <div href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"login"}>login</NavLink></div>
//       </li>
//         </>:   <li>
//         <div onClick={LogOut} href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><NavLink to={"logout"}>logout</NavLink></div>
//       </li>
//       }
        
        
    
    
      
  
  
//     </ul>
//   </div>
//   </div>
// </nav>

//     </div>;
// }
