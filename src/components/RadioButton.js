import React from "react";
import styled from "styled-components";

const RadioButton = ({ value, selectedValue, handleCheck }) => {
  return (
    <>
      <RadioButtonContainer>
        <RadioElement
          id={value}
          value={value}
          name="radio"
          type="radio"
          checked={value === selectedValue}
          onClick={() => handleCheck(value)}
        />
        <RadioText>{value}</RadioText>
      </RadioButtonContainer>
    </>
  );
};

export default RadioButton;

const RadioButtonContainer = styled.div`
  display: inline;
  padding-left: 1rem;
`;

const RadioElement = styled.input`
  color: #7054ff;
  cursor: pointer;
`;

const RadioText = styled.span`
  font-size: 1rem;
  padding-left: 0.3rem;
`;
