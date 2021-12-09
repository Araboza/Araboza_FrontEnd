import React from "react";
import * as S from "./style";
import data from "../../dummy.json";
import Post from "../../components/Post";

export default function Main() {
  return (
    <S.MainWrapper>
      {data.map((data) => (
        <Post data={data} key={data.id} />
      ))}
    </S.MainWrapper>
  );
}
