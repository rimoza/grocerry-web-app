import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import classes from "./WeeklyOver.module.css";

const WeeklyOver = () => {
  return (
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
        repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Impedit, repudiandae.
      </p>
      <div className={classes.btn_container}>
        <ShoppingCartIcon width={20} height={20} />
        <button className="tracking-wider font-bold">Add Cart</button>
      </div>
    </div>
  );
};

export default WeeklyOver;
