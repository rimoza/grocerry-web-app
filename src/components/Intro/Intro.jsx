import classes from "../Products/Products.module.css";
import WeeklyOver from "./WeeklyOver";

const TimeOver = ({ value, title }) => {
  return (
    <div className={classes.card_over}>
      <span className=""> {value}</span>
      <span className="font-normal text-sm border-t-4 border-gray-400">
        {title}
      </span>
    </div>
  );
};
const Intro = (props) => {
  return (
    <div id="left" className={classes.products_card}>
      <div className="my-4 text-center mx-5">
        <h1 className="text-xl font-extrabold mb-3">This week's hot offer</h1>
        <hr />
      </div>
      <div>
        <img src="/assets/products/greens_bundle.jpg" alt="" />
      </div>
      <div className="flex justify-around ">
        <TimeOver value="12" title="days" />
        <TimeOver value="12" title="hours" />
        <TimeOver value="12" title="minutes" />
        <TimeOver value="12" title="seconds" />
      </div>
      <WeeklyOver />
    </div>
  );
};

export default Intro;
