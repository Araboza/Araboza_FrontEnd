import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { toggle } from "../../modules/posts";

export default function Post({ data }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggle({ id: data.id }));
  };

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
        <div onClick={onClick}>
          {data.toggle ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </S.PostWrapper>
  );
}
