import React from "react";
import classes from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <section className="flex justify-around items-center flex-wrap ga-5">
      <div className={classes.container}>
        <div className={classes.img_container}>
          <img src="/assets/images/clock.png" alt="delivery time" />
        </div>
        <div className={classes.card_body}>
          <h1>What we do</h1>
          <p>We help thousands of people reduce food waste</p>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.img_container}>
          <img src="/assets/images/clock.png" alt="delivery time" />
        </div>
        <div>
          <h1>What we do</h1>
          <p>We help thousands of people reduce food waste</p>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.img_container}>
          <img src="/assets/images/clock.png" alt="delivery time" />
        </div>
        <div>
          <h1>What we do</h1>
          <p>We help thousands of people reduce food waste</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
