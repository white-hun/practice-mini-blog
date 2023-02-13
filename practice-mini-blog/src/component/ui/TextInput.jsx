import React from "react";
import styled from "styled-components";

const SytledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size:16px;
    line-height: 20px;
`;

function TextArea(props) {
    const {height, value, onChange} = props;

    return <StyledTextarea height={height} value={value} onchange={onChange} />;
}

export default <TextInput></TextInput>
        
    