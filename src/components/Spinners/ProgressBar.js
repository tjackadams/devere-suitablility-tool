import React, { Component } from "react";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import { mergeStyleSets, DefaultPalette } from "office-ui-fabric-react";

const styles = mergeStyleSets({
  progressBar: {
    backgroundColor: "#003366"
  }
});
class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentComplete: 0,
      currentValue: 0,
      total: 0
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.currentValue !== prevState.currentValue ||
      nextProps.total !== prevState.total
    ) {
      return {
        currentValue: nextProps.currentValue,
        total: nextProps.total
      };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.calculatePercentage(prevProps) !== this.state.percentComplete) {
      const percentageComplete = this.calculatePercentage(prevProps);
      this.setState({ percentComplete: percentageComplete });
    }
  }

  calculatePercentage = args => {
    return (args.currentValue / args.total) * 100;
  };

  render() {
    const { percentComplete } = this.state;
    console.log("percentComplete", percentComplete);
    return (
      <ProgressIndicator
        percentComplete={percentComplete}
        barHeight={8}
        styles={styles}
      />
    );
  }
}

export default ProgressBar;
