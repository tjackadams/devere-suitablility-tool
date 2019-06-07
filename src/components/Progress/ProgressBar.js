import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import { mergeStyleSets } from "office-ui-fabric-react";

const styles = mergeStyleSets({
  progressBar: {
    backgroundColor: "#003366"
  }
});

const ProgressBar = props => {
  const [percentComplete, setPercentComplete] = useState("ProgressBar");

  useEffect(() => {
    setPercentComplete(calculatePercentage(props));
  }, [props]);

  const calculatePercentage = ({ currentValue, total }) => {
    return currentValue / total;
  };

  return (
    <ProgressIndicator
      percentComplete={percentComplete}
      styles={styles}
      barHeight={4}
    />
  );
};

ProgressBar.propTypes = {
  currentValue: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default ProgressBar;
