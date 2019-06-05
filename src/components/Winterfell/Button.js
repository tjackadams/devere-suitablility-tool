import React from "react";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";

class Button extends React.Component {
  handleClick = e => {
    e.preventDefault();

    this.props.onClick();
  };

  render() {
    if (this.props.primary) {
      return (
        <PrimaryButton
          onClick={this.handleClick}
          className={this.props.className}
        >
          {this.props.text}
        </PrimaryButton>
      );
    }
    return (
      <DefaultButton
        onClick={this.handleClick}
        className={this.props.className}
      >
        {this.props.text}
      </DefaultButton>
    );
  }
}

Button.defaultProps = {
  text: "Submit",
  className: undefined,
  onClick: () => {}
};

export default Button;
