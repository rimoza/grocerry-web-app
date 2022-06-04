import React from "react";
import Showcase from "./Showcase/Showcase";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Products from "../Products/products";

const Main = () => {
  return (
    <main>
      <Showcase />
      <WhatWeDo />
      <Products />
    </main>
  );
};

export default Main;
