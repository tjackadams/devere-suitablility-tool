import React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

class SelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.select = React.createRef();

    this.state = {
      value: this.props.value
    };
  }

  handleChange = (e, i) => {
    this.setState(
      {
        value: i.key
      },
      this.props.onChange.bind(null, i.key)
    );
  };

  render() {
    const options = this.props.options.map(opt => {
      return {
        key: opt.value,
        text: opt.text
      };
    });

    return (
      <Dropdown
        componentRef={this.select}
        options={options}
        onChange={this.handleChange}
        selectedKey={this.state.value}
        className={this.props.select}
        onBlur={this.props.onBlur.bind(null, this.state.value)}
        required={this.props.required ? "required" : undefined}
      />
    );
  }

  componentDidMount() {
    /*
     * Selects automatically pick the first item, so
     * make sure we set it.
     */
    this.handleChange(undefined, { key: this.props.options[0].value });
  }
}

SelectInput.defaultProps = {
  classes: {},
  name: "",
  id: "",
  value: "",
  options: [],
  onChange: () => {},
  onBlur: () => {}
};

export default SelectInput;
