import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Post({ data }) {
  const [like, setLike] = useState(data.toggle);

  const onClick = () => {
    like ? (data.like -= 1) : (data.like += 1);
    setLike(!like);
  };

  return (
    <S.PostWrapper>
      <Link to={`/@${data.name}`}>
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
        <div onClick={onClick} className="likes">
          <span>{data.like}</span>
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </S.PostWrapper>
  );
}
