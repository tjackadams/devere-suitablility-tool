import React from "react";

import checkboxInput from "./checkboxInput";
import checkboxOptionsInput from "./checkboxOptionsInput";
import emailInput from "./emailInput";
import fileInput from "./fileInput";
import hiddenInput from "./hiddenInput";
import passwordInput from "./passwordInput";
import radioOptionsInput from "./radioOptionsInput";
import selectInput from "./selectInput";
import textareaInput from "./textareaInput";
import textInput from "./textInput";

const inputTypes = {
  checkboxInput: checkboxInput,
  checkboxOptionsInput: checkboxOptionsInput,
  emailInput: emailInput,
  fileInput: fileInput,
  hiddenInput: hiddenInput,
  passwordInput: passwordInput,
  radioOptionsInput: radioOptionsInput,
  selectInput: selectInput,
  textareaInput: textareaInput,
  textInput: textInput
};

export { inputTypes };

export const addInputType = (name, instance) => {
  if (typeof name !== "string") {
    throw new Error(
      "Winterfell: First parameter of addInputType must be of type string"
    );
  }

  if (!React.Component instanceof instance.constructor) {
    throw new Error(
      'Winterfell: Cannot not assign "' +
        name +
        '" as an inputType. ' +
        "Second paramter expects a React component"
    );
  }

  inputTypes[name] = instance;
};
