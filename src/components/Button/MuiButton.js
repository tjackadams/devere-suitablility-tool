import React from "react";
import Button from "@material-ui/core/Button";

class MuiButton extends React.Component {
  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <Button
        href="#"
        variant="outlined"
        color="primary"
        className={this.props.className}
        onClick={e => this.handleClick(e)}
      >
        {this.props.text}
      </Button>
    );
  }
}

MuiButton.defaultProps = {
  text: "Submit",
  className: undefined,
  onClick: () => {}
};

export default MuiButton;
