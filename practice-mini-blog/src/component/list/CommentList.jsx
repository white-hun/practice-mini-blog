import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// CommentList 컴포넌트
// comments(data.json의 comments)
// 1개의 prop를 가진다
function CommentList(props) {
  const { comments } = props;

  // data.json의 comments의 작은배열을 하나씩 뽑아 아이템변수 comment에 저장
  // commemt는 id와 content를 가진 아이템(중괄호 한묶음)
  // CommentListItem 컴포넌트의 attribute - key, comment
  // 정보로 줄것은 attribute로 입력
  // 화면에 출력할 내용은 tag 사이에 입력

  // <div> tag Wrapper
  // IN //
  // comments가 mapping된 comment의 값들을 attribute로 가지는 CommentListItem 컴포넌트
  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
