import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

// PostList 컴포넌트
// posts(data.json의 큰배열), onClickItem(아이템*을 클릭하면 발생하는 이벤트)
// 2개의 props를 가진다
function PostList(props) {
  const { posts, onClickItem } = props;

  // 배열 posts의 아이템을 하나씩 뽑아 아이템 변수 post에 저장
  // PostListItem 컴포넌트의 attribute - post의 id, post, post가 인자인 클릭이벤트
  // PostListItem 컴포넌트가 나열된 목록(리스트) = PostList
  // 나열된 컴포넌트마다 고유한 key 값과 아이템을 가지고 있다

  // <div> tag Wrapper
  // IN //
  // posts가 mapping된 post의 값들을 attribute로 가지는 PostListItem 컴포넌트
  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default PostList;

// *아이템: key value를 가지고 있는 중괄호 한묶음