import { useState } from "react";
import reactLogo from "./assets/react.svg";
import image from "./assets/image/images (1).png";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Brands from "./components/Brands/Brands";
import LogOut from "./components/LogOut/LogOut";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import { CounterContextProvider } from "./Context/Context";
import { UserContextProvider } from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {CartContextProvider} from './Context/CartContext'
import { Toaster } from "react-hot-toast";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Reset from "./components/Reset/Reset";
import NewPassword from "./components/NewPassword/NewPassword";
import BrandsDetails from "./components/BrandsDetails/BrandsDetails";
import CategoriesDetails from "./components/CategoriesDetails/CategoriesDetails";
import WishList from "./components/WishList/WishList";
import WishContextProvider from "./Context/WishContext";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/orders/orders";




let query = new QueryClient();


let x = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: 
<ProtectedRoute>
            <Home />
            </ProtectedRoute>
        ,
      },
      {
        path: "product",
        element: (
          <ProtectedRoute>
            
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout/:cartId",
        element: (
          <ProtectedRoute>
            
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands/:id/:name",
        element: (
          <ProtectedRoute>
            
            <BrandsDetails />
          </ProtectedRoute>
        ),
      },
      { path: "logout", element: <LogOut /> },
      { path: "register", element: <Register /> },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories/:name",
        element: (
          <ProtectedRoute>
            
            <CategoriesDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id/:category",
        element: (
          <ProtectedRoute>
            
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "forget", element: <ForgetPassword /> },
      { path: "reset", element: <Reset /> },
      { path: "newpassword", element: <NewPassword /> },
      
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <ProtectedRoute>
            
            <NotFound />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <UserContextProvider>
          <CounterContextProvider>
            <CartContextProvider>
              <WishContextProvider>
            <RouterProvider router={x}></RouterProvider>
            <ReactQueryDevtools></ReactQueryDevtools>
            <Toaster/>
            </WishContextProvider>
            </CartContextProvider>
          </CounterContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
