import React from "react";
import Select from "@material-ui/core/Select";

class MuiSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };
  }

  handleChange(e) {
    this.setState(
      {
        value: e.target.value
      },
      this.props.onChange.bind(null, e.target.value)
    );
  }

  render() {
    var options = this.props.options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.text}
      </option>
    ));

    return (
      <Select
        value={this.state.value}
        onChange={e => this.handleChange(e)}
        required={this.props.required ? true : false}
        ref="select"
      >
        {options}
      </Select>
      //   <select
      //     name={this.props.name}
      //     id={this.props.id}
      //     className={this.props.classes.select}
      //     value={this.state.value}
      //     ref="select"
      //     required={this.props.required ? "required" : undefined}
      //     onChange={this.handleChange.bind(this)}
      //     onBlur={this.props.onBlur.bind(null, this.state.value)}
      //   >
      //     {options}
      //   </select>
    );
  }

  componentDidMount() {
    /*
     * Selects automatically pick the first item, so
     * make sure we set it.
     */
    this.handleChange({
      target: {
        value: this.refs.select.value
      }
    });
  }
}

MuiSelectInput.defaultProps = {
  classes: {},
  name: "",
  id: "",
  value: "",
  options: [],
  onChange: () => {},
  onBlur: () => {}
};

export default MuiSelectInput;
