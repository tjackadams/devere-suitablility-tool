import React from "react";

import { ResultsContainer } from "../containers";

const Result = props => {
  const answers = props.location.state.answers;
  console.log("result");
  return <ResultsContainer answers={answers} />;
};

export default Result;
