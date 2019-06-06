import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import AppKernel from "./app";
import * as serviceWorker from "./serviceWorker";

import "./style.css";

const Page = lazy(() => import("./page"));

const App = AppKernel(Page);

if (process.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "devere-suitability-tool:*");
}

initializeIcons();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
