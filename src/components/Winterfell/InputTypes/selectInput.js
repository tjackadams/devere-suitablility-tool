import React, { PureComponent } from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

class SelectInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: undefined
    };
  }

  onChange = (event, item) => {
    this.setState(
      {
        selectedItem: item
      },
      () => this.props.onChange(item.key)
    );
  };

  render() {
    const { selectedItem } = this.state;

    const options = this.props.options.map(opt => {
      return { key: opt.value, text: opt.text, selected: opt.default };
    });

    const defaultKey = this.props.options.filter(opt => opt.default);

    return (
      <div className="select">
        <Dropdown
          label={this.props.label}
          selectedKey={
            selectedItem
              ? selectedItem.key
              : defaultKey.length > 0
              ? defaultKey[0].value
              : undefined
          }
          onChange={this.onChange}
          placeholder="Please select"
          options={options}
          required={this.props.required}
          className={this.props.classes.select}
        />
      </div>
    );
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
