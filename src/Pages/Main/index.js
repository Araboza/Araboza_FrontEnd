import React from "react";
import * as S from "./style";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

export default function Main() {
  const { posts, error } = useSelector(({ posts }) => ({
    posts: posts.data,
    error: posts.error,
  }));

  if (error) {
    return <h1>데이터를 불러올 수 없습니다</h1>;
  }

  return (
    <>
      <Header />
      <S.MainWrapper>
        {posts.map((data) => (
          <Post data={data} key={data.id} />
        ))}
      </S.MainWrapper>
    </>
  );
}
