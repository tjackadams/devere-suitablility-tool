import React from "react";

class SelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.select = React.createRef();

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
      <div className="select">
        <select
          name={this.props.name}
          id={this.props.id}
          className={this.props.classes.select}
          value={this.state.value}
          ref={this.select}
          required={this.props.required ? "required" : undefined}
          onChange={this.handleChange.bind(this)}
          onBlur={this.props.onBlur.bind(null, this.state.value)}
        >
          {options}
        </select>
      </div>
    );
  }

  componentDidMount() {
    /*
     * Selects automatically pick the first item, so
     * make sure we set it.
     */
    this.handleChange({
      target: {
        value: this.select.current.value
      }
    });
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
