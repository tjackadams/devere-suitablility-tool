import React, { Component } from "react";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";

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

    return <ProgressIndicator percentComplete={percentComplete} />;
  }
}

export default ProgressBar;
