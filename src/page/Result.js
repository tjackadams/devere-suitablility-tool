import React, { PureComponent } from "react";

import { ScoreCard } from "../components/ScoreCard";

class Result extends PureComponent {
  render() {
    const answers = this.props.location.state.answers;

    return <ScoreCard answers={answers} />;
  }
}

export default Result;
