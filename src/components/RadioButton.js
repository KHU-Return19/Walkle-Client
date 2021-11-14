import React from "react";
import styled from "styled-components";

const RadioButton = ({ value, selectedValue, handleCheck }) => {
  return (
    <>
      <RadioElement
        id={value}
        value={value}
        name="radio"
        type="radio"
        checked={value === selectedValue}
        onChange={() => handleCheck}
      />
      <RadioText>{value}</RadioText>
    </>
  );
};

export default RadioButton;

const RadioElement = styled.input``;

const RadioText = styled.span`
  font-size: 1rem;
`;
