import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 8px 16px;
  width: calc(100% - 32px);
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

const PostContainer = styled.div`
  padding: 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  opacity: 0.9;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

// 컴포넌트 PostViewPage
export default function PostViewPage(props) {
  // 변수 navigate - 페이지 이동 하는 함수 useNavigate()
  // 파라미터를 가져와 사용하는 함수 useParams()
  const navigate = useNavigate();
  const { postId } = useParams();

  // 변수 post - data에서 item을 찾아 item.id == postId로 리턴(useParams에 사용)
  const post = data.find((item) => {
    return item.id == postId;
  });

  // 변수 comment, comment가 업데이트 될 때 저장 하는 함수 setComment
  // usestate로 사용
  const [comment, setComment] = useState("");

  // <div> tag Wrapper
  // IN //
  // <div> tag Container
  // IN //
  // 컴포넌트 Button - title과 클릭이벤트를 가진 버튼(클릭 시 navigate로 초기 경로(MainPage)로 이동)
  // <div> tag PostContainer
  // - <p> tag TitleText - post 의 title 출력
  // - <p> tag ContentText - post 의 content 출력
  // <p> tag CommentLabel - '댓글' 출력
  // 컴포넌트 CommentList - post의 comment를 attribute로 가진 mapping된 CommentListItem 출력
  // 컴포넌트 TextInput - 높이값, state의 comment, onChange를 attribute로 가진다
  // TextInput의 값을 onChange 이벤트 발생 시 setComment로 업데이트
  // 컴포넌트 Button - title과 클릭이벤트를 가진 버튼(클릭 시 navigate로 지정한 초기 경로(MainPage)로 이동)
  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로가기"
          onClick={() => {
            navigate("/");
          }}
        />

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

// export default PostViewPage;
