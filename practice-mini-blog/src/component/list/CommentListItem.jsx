import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  opacity: 0.9;
  :hover {
    background: #00c6f7;
    transition: 0.3s;
    opacity: 1;
    scale: 1.03;
  }
  transition: 0.4s;
`;

const ContentText = styled.p`
  font-size: 14px;
`;

// CommentListItem 컴포넌트
// comment(comments의 아이템)
// 1개의 prop를 가진다
function CommentListItem(props) {
  const { comment } = props;

  // <div> tag Wrapper
  // IN //
  // ContentText <p> tag
  // comment의 content 출력
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
