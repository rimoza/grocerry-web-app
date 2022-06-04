import { Fragment } from "react";

import Header from "./components/Layout/Header/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Main />
      </main>
    </Fragment>
  );
};

export default App;
