import React from "react";
import Heart from "../Heart";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Post({ data, onLike }) {
  return (
    <S.PostWrapper>
      <Link to={`/@${data.name}/${data.title}`}>
        <img src={data.img} alt="postImage" />
        <h3 className="title">
          {data.title.length > 15
            ? `${data.title.slice(0, 15)}...`
            : data.title}
        </h3>
      </Link>
      <div className="description">
        <div className="user">
          <span>{data.classNum}</span>
          <span>{data.name}</span>
        </div>
        <Heart toggle={data.toggle} onLike={onLike} />
      </div>
    </S.PostWrapper>
  );
}
