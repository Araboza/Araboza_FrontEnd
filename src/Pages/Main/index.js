import React from "react";
import * as S from "./style";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

export default function Main() {
  const { posts } = useSelector(({ posts }) => ({ posts }));
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
