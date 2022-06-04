import React from "react";
import classes from "./WhatWeDo.module.css";

const Card = (props) => {
  const { title, desc, img } = props;
  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <img src={img} alt="delivery time" />
      </div>
      <div className={classes.card_body}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  const data = [
    {
      title: "Fast Delivery",
      description: "Week 2 -3 hours after order",
      img: "/assets/images/delivery.png",
    },
    {
      title: "Opening Hours",
      description: "Sat - Fri 6:00am - 9:00pm",
      img: "/assets/images/clock.png",
    },
    {
      title: "Eco- Friendly packaging",
      description: "Sustainable materials",
      img: "/assets/images/seedling.png",
    },
  ];
  return (
    <section className={classes.card_container}>
      <div>
        <h1 className={classes.card_title}>What We Do</h1>
        <p className={classes.card_desc}>
          We help thousands of people reduce food waste
        </p>
      </div>
      <div className="flex justify-around items-center flex-wrap gap-5">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            desc={item.description}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
