import React from "react";

const Subscription = () => {
  return (
    <div className="bg-gray-100/70 flex flex-col justify-center items-center py-10">
      <div className="">
        <h1 className="uppercase text-center text-2xl text-gray-500 font-nunito font-semibold tracking-wider mb-3">
          Subscribe to our newsletter
        </h1>
        <p className="text-center text-sm text-gray-500 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Soluta, reprehenderit.
        </p>
      </div>
      <div className="bg-white w-full max-w-sm sm:max-w-md shadow-md shadow-gray-500/30 flex  items-center   rounded-full  overflow-hidden">
        <input
          type="email"
          name="email"
          id="email"
          className="w-full h-full py-2 px-4 text-gray-500 font-semibold font-nunito outline-none"
        />
        <button className="bg-primary py-2 px-2 text-white text-xl font-bold">
          subscripe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
