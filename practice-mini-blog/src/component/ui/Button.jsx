import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #00c6f7;
`;

// Button 컴포넌트
// title(버튼의 이름(텍스트)), onClick(버튼 클릭 이벤트)
// 2개의 props를 가진다
function Button(props) {
  const { title, onClick } = props;

  //<button> 형식에 styled-component CSS 적용
  // <button> tag 형식에 attribute - props로 받은 onClick 설정
  // <button> tag의 이름은 props인 title로 설정하거나, 문자 "button"
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
