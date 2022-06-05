import React from "react";
import Showcase from "./Showcase/Showcase";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Products from "../Products/products";
import Order from "../Order/Order";

const Main = () => {
  return (
    <main>
      <Showcase />
      <WhatWeDo />
      <Products />
      <Order />
    </main>
  );
};

export default Main;
