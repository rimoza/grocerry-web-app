import React from "react";
import classes from "./Showcase.module.css";
const Showcase = () => {
  return (
    <section className={classes.showcase_container}>
      <div id="info_container">
        <h1 className={classes.showcase_title}>
          Freshly <span className="text-orange-500">picked</span> <br /> from
          <span className="text-primary"> {""} Nature</span>
        </h1>
        <p className={classes.showcase_desc}>
          We provide you with various fresh grocery with 10% <br /> off for
          every $50 purchase
        </p>
      </div>
      <div className={classes.showcase_btn}>
        <button className={classes.showcase_btn_view}>View Sale</button>
        <button className={classes.showcase_btn_normal}>Shop All</button>
      </div>
    </section>
  );
};

export default Showcase;
