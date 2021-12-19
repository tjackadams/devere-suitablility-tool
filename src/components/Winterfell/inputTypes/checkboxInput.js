import React from "react";
import { Checkbox } from "office-ui-fabric-react";

class CheckboxInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.defaultChecked,
    };
  }

  handleChange(e) {
    if (e) {
      this.setState(
        {
          checked: !this.state.checked,
        },
        () => {
          this.props.onChange(
            this.state.checked ? this.props.value : undefined
          );
        }
      );
    } else {
      this.props.onChange(this.state.checked ? this.props.value : undefined);
    }
  }

  componentDidMount() {
    if (this.state.checked) {
      this.handleChange();
    }
  }

  render() {
    return (
      <Checkbox
        name={this.props.name}
        aria-labelledby={this.props.labelId}
        className={this.props.classes.checkbox}
        defaultChecked={this.state.checked}
        value={this.props.value}
        required={this.props.required ? "required" : undefined}
        onChange={this.handleChange.bind(this)}
        onBlur={this.props.onBlur.bind(
          null,
          this.state.checked ? this.props.value : undefined
        )}
        label={this.props.classes.checkboxLabel}
      />
    );
  }
}

CheckboxInput.defaultProps = {
  text: "",
  defaultChecked: false,
  classes: {},
  name: "",
  value: "",
  onChange: () => {},
  onBlur: () => {}
};

export default CheckboxInput;
