import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Route, HashRouter } from "react-router-dom";
import SeiteEins from "./Seite1";
import SeiteZwei from "./Seite2";
import { Navi } from "./Navigation";

//redux
import { store } from "./MeinStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Navi />

        <Route exact path={"/"} component={App} />
        <Route exact path={"/SeiteEins"} component={SeiteEins} />
        <Route path={"/SeiteZweiYOO"} component={SeiteZwei} />
      </div>
    </HashRouter>
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
