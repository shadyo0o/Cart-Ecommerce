import React from "react";
import style from "./Categories.module.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  async function getAllCat() {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then(({ data }) => {
        console.log(data.data);
        setCategories(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(data.data);

  useEffect(() => {
    getAllCat();
  }, []);

  return (
    <div className="row">
      {categories?.map((cat) => (
        <div key={cat._id} className="px-2 shadow-md hover:shadow-green-700 lg:w-1/5 sm:w-1/2 md:w-1/3">
          <Link to={`/categories/${cat.name}`}>
            <img className="w-full h-[300px]" src={cat?.image} alt={cat?.name}/>

            <h1>{cat?.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
