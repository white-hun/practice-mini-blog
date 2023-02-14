import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
        height: ${props.height}px;
    `}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  opacity: 0.9;
  :focus {
    border: 1px solid #00c6f7;
    border-radius: 15px;
    outline: 2px solid #00c6f7;
    transition: 0.5s;
  }
  transition: 0.5s;
  border: 1px solid grey;
`;

function TextInput(props) {
  const { height, value, onChange } = props;

  return <StyledTextarea height={height} value={value} onchange={onChange} />;
}

export default TextInput;
