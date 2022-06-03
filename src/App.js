import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <header className="font-nunito">
        <div id="top_nav_bar">
          <div id="top_navbar_left">
            <div id="time_work_container">{/* time work */}</div>
            <div id="contact_container">{/* phone */}</div>
          </div>
          <div id="top_navbar_right">{/* languages */}</div>
        </div>
        <nav>
          <div id="left">
            <div id="logo">Shoparry</div>
          </div>
          <div id="right">
            <div id="search_container">{/* search */}</div>
            <div id="user_container">{/* user */}</div>
            <div id="cart_container">{/* cart */}</div>
          </div>
        </nav>
      </header>
      <main></main>
    </Fragment>
  );
};

export default App;
