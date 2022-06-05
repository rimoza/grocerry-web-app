import React from "react";
import classes from "./Order.module.css";
const Order = () => {
  return (
    <div className={classes.order_container}>
      <div className={classes.order_card}>
        <h1 className={classes.order_title}>
          Order Home Delivery of Groceries
        </h1>
        <p className={classes.order_body_left}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          reiciendis ipsam placeat porro sint nisi. Doloremque illo, esse
          ducimus, id illum fugiat magnam molestias neque nostrum recusandae
          amet, itaque optio.
        </p>
        <div className={classes.oder_body_right}>
          <div className="w-10 h-10">
            <img src="/assets/images/support.png" alt="suport" />
          </div>
          <h4 className="font-bold text-xl">+252 63 458 5259</h4>
        </div>
      </div>
      <div>
        <img src="/assets/images/delivery.png" alt="delivery" />
      </div>
    </div>
  );
};

export default Order;
