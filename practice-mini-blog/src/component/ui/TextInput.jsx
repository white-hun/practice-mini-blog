import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => props.height && `height: ${props.height}px;`}
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

// TextInput 컴포넌트
// height(입력창의 높이), value(입력값),
// onChange(입력이 끝나고 focus 상태를 벗어났을 때 발생하는 이벤트)
// 3개의 props를 가진다
function TextInput(props) {
  const { height, value, onChange } = props;

  // <textarea> tag styled-component 형식에 CSS 적용
  // <textarea> tag 형식에 attribute - props로 받은 height, value, onChange 설정
  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
