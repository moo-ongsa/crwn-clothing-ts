import React from "react";

import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <Input onChange={handleChange} {...otherProps} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    )}
  </Group>
);

export default FormInput;
