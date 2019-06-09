let React = require("react");
let {
  DefaultButton,
  PrimaryButton
} = require("office-ui-fabric-react/lib-commonjs/Button");

class Button extends React.Component {
  handleClick = e => {
    e.preventDefault();

    this.props.onClick();
  };

  render() {
    return this.props.primary === true ? (
      <PrimaryButton
        onClick={this.handleClick}
        className={this.props.className}
        style={{ backgroundColor: "#003366" }}
      >
        {this.props.text}
      </PrimaryButton>
    ) : (
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

module.exports = Button;
