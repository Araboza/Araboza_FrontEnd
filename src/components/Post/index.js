import React from "react";
import Heart from "../Heart";
import { Link } from "react-router-dom";
import * as I from "../../Asset/SVG";
import * as S from "./style";

export default function Post({ data, user, onLike }) {
  return (
    <Link to={`/@${data.userId || user.id}/${data.title}`}>
      <S.PostWrapper>
        <div>
          {data.imgUrl ? (
            <img src={data.imgUrl} alt="postImage" />
          ) : (
            <I.LogoS />
          )}
        </div>
        <h2 className="title">
          {data.title.length > 15
            ? `${data.title.slice(0, 15)}...`
            : data.title}
        </h2>
        <div className="description">
          <div className="user">
            <span>{data.classNum}</span>
            <span>{data.name}</span>
          </div>
          <Heart toggle={data.toggle} onLike={onLike} />
        </div>
      </S.PostWrapper>
    </Link>
  );
}
