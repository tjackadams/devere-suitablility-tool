import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Result from "./Result";

const Page = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/result" component={Result} />
  </>
);

export default Page;
