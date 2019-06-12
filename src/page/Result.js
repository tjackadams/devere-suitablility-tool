import React, { useContext } from "react";
import { Redirect } from "react-router";

import { StoreContext } from "../context/StoreContext";

import { ResultsContainer } from "../containers";

const Result = props => {
  const { state } = useContext(StoreContext);
  if (state.answers === undefined) {
    return <Redirect to="/" />;
  }
  return <ResultsContainer answers={state.answers} />;
};

export default Result;
