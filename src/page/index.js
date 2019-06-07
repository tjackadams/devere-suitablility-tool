import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

import { withTracker } from "../hocs/withTracker";

import Home from "./Home";
import Result from "./Result";

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});

const Page = () => (
  <Route
    render={({ location }) => (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>
          <Switch location={location} key="switch">
            <Route path="/" exact component={withTracker(Home)} key="home" />
            <Route
              path="/result"
              component={withTracker(Result)}
              key="result"
            />
          </Switch>
        </RoutesContainer>
      </PoseGroup>
    )}
  />
);

export default Page;
