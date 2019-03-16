import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

const Page = () => <Route path="/" exact component={Home} />;

export default Page;
