import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  align-items: flex;
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
  }
  transition: 0.4s;
`;

const TitleText = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
