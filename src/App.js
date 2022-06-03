import { Fragment } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
const App = () => {
  return (
    <Fragment>
      <header className="font-nunito">
        <div id="top_nav_bar">
          <div id="top_navbar_left" className="h-8 bg-secondary hidden md:flex">
            <div id="time_work_container">
              <span>Fri 07:00AM - 08:00PM</span>
            </div>
            <div id="contact_container">Call us: 00252 63 4585259</div>
          </div>
          <div id="top_navbar_right">
            <div>
              <span>Lang: Eng</span>
            </div>
            <div>Currency: USD</div>
          </div>
        </div>
        <nav>
          <div id="left">
            <div id="logo">Shoparry</div>
          </div>
          <div id="right">
            <div id="search_container">
              <div id="input">
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div id="user_container">{/* user */}</div>
            <div id="cart_container">
              <div id="cart_icon">
                <ShoppingCartIcon width={20} height={20} />
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
