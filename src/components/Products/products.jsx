import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes.products_container}>
      <div id="left" className={classes.products_card}>
        <div className="my-4 text-center mx-5">
          <h1 className="text-xl font-extrabold mb-3">This week's hot offer</h1>
          <hr />
        </div>
        <div>
          <img src="/assets/products/greens_bundle.jpg" alt="" />
        </div>
        <div className="flex justify-around ">
          <div className={classes.card_over}>
            <span className=""> 12</span>{" "}
            <span className="font-normal text-sm border-t-4 border-gray-400">
              days
            </span>
          </div>
          <div className={classes.card_over}>
            <span className=""> 12</span>{" "}
            <span className="font-normal text-sm border-t-4 border-gray-400">
              hours
            </span>
          </div>
          <div className={classes.card_over}>
            <span className=""> 12</span>{" "}
            <span className="font-normal text-sm border-t-4 border-gray-400">
              minutes
            </span>
          </div>
          <div className={classes.card_over}>
            <span className=""> 12</span>{" "}
            <span className="font-normal text-sm border-t-4 border-gray-400">
              seconds
            </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="mt-3 text-primary  font-extrabold tracking-wider">
            Weekly Greens Bundle
          </h3>
          <p className="font-extrabold flex justify-center items-center gap-5">
            <span className="text-red-500 ">$29</span>
            <span className="text-gray-400 line-through">$49</span>
          </p>
          <p className="tracking-wide text-gray-500 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Impedit, repudiandae.
          </p>
          <div className={classes.btn_container}>
            <ShoppingCartIcon width={20} height={20} />
            <button className="tracking-wider font-bold">Add Cart</button>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.products_card_rigth}>
          <div className="my-4 text-center mx-5">
            <h1 className="text-xl font-extrabold mb-3">
              Fruits and Vegetables
            </h1>
            <hr />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className=" border rounded flex flex-col  mx-4 my-5">
              <div className="">
                <img src="/assets/products/fresh-strawberries.jpeg" alt="" />
              </div>
              <h1 className=" font-bold tracking-wide text-center">
                Fresh Strawberry
              </h1>
              <p className="font-extrabold flex justify-center items-center gap-5">
                <span className="text-red-500 ">$8.99</span>
                <span className="text-gray-400 line-through">$12.99</span>
              </p>
              <div className={classes.btn_container_right}>
                <ShoppingCartIcon width={20} height={20} />
                <button className="tracking-wider font-bold">Add Cart</button>
              </div>
            </div>
            <div className=" border rounded flex flex-col  mx-4 my-5">
              <div className="">
                <img src="/assets/products/fresh-strawberries.jpeg" alt="" />
              </div>
              <h1 className=" font-bold tracking-wide text-center">
                Fresh Strawberry
              </h1>
              <p className="font-extrabold flex justify-center items-center gap-5">
                <span className="text-red-500 ">$8.99</span>
                <span className="text-gray-400 line-through">$12.99</span>
              </p>
              <div className={classes.btn_container_right}>
                <ShoppingCartIcon width={20} height={20} />
                <button className="tracking-wider font-bold">Add Cart</button>
              </div>
            </div>
            <div className=" border rounded flex flex-col  mx-4 my-5">
              <div className="">
                <img src="/assets/products/fresh-strawberries.jpeg" alt="" />
              </div>
              <h1 className=" font-bold tracking-wide text-center">
                Fresh Strawberry
              </h1>
              <p className="font-extrabold flex justify-center items-center gap-5">
                <span className="text-red-500 ">$8.99</span>
                <span className="text-gray-400 line-through">$12.99</span>
              </p>
              <div className={classes.btn_container_right}>
                <ShoppingCartIcon width={20} height={20} />
                <button className="tracking-wider font-bold">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
