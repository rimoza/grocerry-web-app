import { Fragment } from "react";
import {
  ShoppingCartIcon,
  PhoneIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
const App = () => {
  return (
    <Fragment>
      <header className="font-nunito font-medium tracking-wide">
        <div
          id="top_nav_bar"
          className="h-8 bg-secondary hidden md:flex justify-evenly items-center"
        >
          <div id="top_navbar_left" className="flex gap-5">
            <div
              id="time_work_container"
              className="border-r border-gray-900 pr-3"
            >
              <span>
                Sat - Fri: <span className="font-bold">07:00AM - 08:00PM</span>{" "}
              </span>
            </div>
            <div id="contact_container" className="flex items-center gap-2">
              <span>
                <PhoneIcon width={16} height={16} className="font-bold" />
              </span>
              <span className="">
                Call Us: <span className="font-semibold">+252 63 4585259</span>
              </span>
            </div>
          </div>
          <div id="top_navbar_right" className="flex items-center gap-5">
            <div>
              <span>
                Lang: <span className="font-bold">English</span>
              </span>
            </div>
            <div>
              Currency: <span className="font-bold">USD$</span>
            </div>
          </div>
        </div>
        <nav className="flex justify-between items-center shadow px-10">
          <div id="left">
            <div id="logo" className="flex justify-center items-center gap-3">
              <div className="w-10 h-20 flex items-center ">
                <img src="/assets/images/logo.png" alt="logo" />
              </div>
              <span className="text-primary font-bold">Shoparry</span>
            </div>
          </div>
          <div
            id="right"
            className="flex items-center justify-between gap-5 w-full md:max-w-md lg:max-w-lg 2xl:max-w-2xl"
          >
            <div id="search_container" className="relative  w-full ">
              <div id="input">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="border border-primary rounded-full w-full py-1"
                />
              </div>
              <div className="bg-primary w-20 h-full absolute top-0 right-0 flex items-center rounded-r-full">
                <SearchIcon width={25} height={25} className="text-white" />
              </div>
            </div>
            <div className="flex gap-5 w-20">
              <div id="user_container">
                <span>
                  <UserCircleIcon width={20} height={20} />
                </span>
              </div>
              <div id="cart_container" className="relative">
                <div id="cart_icon">
                  <span>
                    <ShoppingCartIcon width={20} height={20} />
                  </span>
                  <div className="absolute -top-2 -right-2 bg-primary w-4 h-4 flex justify-center items-center rounded-full ">
                    <span className="text-xs text-white">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
    </Fragment>
  );
};

export default App;
