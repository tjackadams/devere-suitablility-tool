import React from "react";
import { Button as SemButton } from "semantic-ui-react";

class Button extends React.Component {
  handleClick = e => {
    e.preventDefault();

    this.props.onClick();
  };

  render() {
    return (
      <SemButton
        href="#"
        className={this.props.className}
        onClick={this.handleClick}
      >
        {this.props.text}
      </SemButton>
    );
  }
}

Button.defaultProps = {
  text: "Submit",
  className: undefined,
  onClick: () => {}
};

export default Button;
