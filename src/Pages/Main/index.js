import React from "react";
import * as S from "./style";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { set_like } from "../../modules/posts";

export default function Main() {
  const dispatch = useDispatch();
  const { posts, error } = useSelector(({ posts }) => ({
    posts: posts.posts,
    error: posts.error,
  }));

  if (error && !posts) {
    return <h1>{error.message}</h1>;
  }

  const onLike = (data) => dispatch(set_like(data));

  return (
    <>
      <Header />
      <S.MainWrapper>
        {posts.map((data) => (
          <Post data={data} onLike={() => onLike(data)} key={data.id} />
        ))}
      </S.MainWrapper>
    </>
  );
}
