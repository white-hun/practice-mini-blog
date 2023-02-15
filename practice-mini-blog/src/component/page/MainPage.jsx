import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 8px 16px;
  width: calc(100% -32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// 컴포넌트 MainPage
function MainPage(props) {
  // 변수 navigate - 페이지 이동 하는 함수 useNavigate()
  const navigate = useNavigate();

  // <div> tag Wrapper
  // IN //
  // <container>
  // IN //
  // 컴포넌트 Button - title과 클릭이벤트를 가진 버튼(클릭 시 navigate로 지정한 경로(post-write 페이지)로 이동)
  // 컴포넌트 postList - posts, 아이템을 클릭하면 navigate로 지정한 경로(클릭한 아이템의 id를 가진 post)로 이동

  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />

        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
