import React, { Component } from "react";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";

export interface IProgressBarState {
  currentValue: number;
  total: number;
  percentComplete: number;
}

export interface IProgressBarProps {
  currentValue: number;
  total: number;
}

class ProgressBar extends Component<IProgressBarProps, IProgressBarState> {
  constructor(props: IProgressBarProps) {
    super(props);

    this.state = {
      percentComplete: 0,
      currentValue: 0,
      total: 0
    };
  }

  static getDerivedStateFromProps(
    nextProps: IProgressBarProps,
    prevState: IProgressBarState
  ) {
    if (
      nextProps.currentValue !== prevState.currentValue ||
      nextProps.total !== prevState.total
    ) {
      return {
        currentValue: nextProps.currentValue,
        total: nextProps.total
      };
    }
  }

  componentDidUpdate(
    prevProps: IProgressBarProps,
    prevState: IProgressBarState
  ) {
    if (this.calculatePercentage(prevProps) !== this.state.percentComplete) {
      const percentageComplete = this.calculatePercentage(prevProps);
      this.setState({ percentComplete: percentageComplete });
    }
  }

  calculatePercentage = (args: IProgressBarProps): number => {
    return (args.currentValue / args.total) * 100;
  };

  render() {
    const { percentComplete } = this.state;

    return <ProgressIndicator percentComplete={percentComplete} />;
  }
}

export default ProgressBar;
