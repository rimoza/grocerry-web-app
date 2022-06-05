import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const ShoppingCart = () => {
  return (
    <div className="flex justify-center items-center gap-2 font-bold  bg-primary  mt-5 mb-10 py-2 max-w-md rounded-full text-white">
      <ShoppingCartIcon width={20} height={20} />
      <button className="tracking-wider font-bold">Add Cart</button>
    </div>
  );
};

export default ShoppingCart;
