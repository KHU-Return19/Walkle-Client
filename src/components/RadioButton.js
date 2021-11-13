import React from "react";
import styled from "styled-components";

const RadioButton = ({ value, selectedValue, handleCheck }) => {
  return (
    <RadioElement
      id={value}
      value={value}
      name="radio"
      type="radio"
      checked={value === selectedValue}
      onChange={() => handleCheck}
    />
  );
};

export default RadioButton;

const RadioElement = styled.input``;
