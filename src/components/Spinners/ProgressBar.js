import React from "react";
import { Progress } from "semantic-ui-react";

const style = {
  progress: {
    color: "#003366"
  }
};

const ProgressBar = ({ value, total, ...rest }) => {
  const percent = (value / total) * 100;
  return <Progress percent={percent} {...rest} />;
};

export default ProgressBar;
