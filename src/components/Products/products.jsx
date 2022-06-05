import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

import classes from "./Products.module.css";
import { freshFoods } from "../../data";
import Intro from "../Intro/Intro";
import ShoppingCart from "../UI/ShoppingCart";

const ProductsItem = ({
  name,
  category,
  price,
  originalPrice,
  description,
  img,
}) => {
  return (
    <div className=" border rounded flex flex-col hover:shadow-2xl hover:shadow-gray-500/30  mx-4 my-5 relative">
      <div className="">
        <img src={img} alt="" />
      </div>
      <h1 className=" font-bold tracking-wide text-center">{name}</h1>
      <p className="font-extrabold flex justify-center items-center gap-5">
        <span className="text-red-500 ">{price}</span>
        <span className="text-gray-400 line-through">{originalPrice}</span>
      </p>
      <div className="absolute top-3 left-3 rounded-full w-10 h-10 flex justify-center items-center bg-red-500 shadow-lg hover:shadow-2xl shadow-gray-500/50">
        <span className=" text-white  font-bold">20%</span>
      </div>
      <div className="mx-5">
        <ShoppingCart />
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className={classes.products_container}>
      <Intro />

      <div className={classes.products_card_rigth}>
        <div className="my-4 text-center mx-5">
          <h1 className="text-xl font-extrabold mb-3">Fruits and Vegetables</h1>
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {freshFoods.map((freshFood) => (
            <ProductsItem
              key={freshFood.id}
              name={freshFood.name}
              category={freshFood.category}
              price={freshFood.price}
              originalPrice={freshFood.originalPrice}
              description={freshFood.description}
              img={freshFood.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
