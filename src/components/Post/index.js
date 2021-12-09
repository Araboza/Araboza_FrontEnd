import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as S from "./style";

export default function Post({ data }) {
  const [like, setLike] = useState(data.toggle);

  const onClick = () => {
    if (data.toggle) {
      like ? (data.like -= 1) : (data.like += 1);
    } else {
      like ? (data.like -= 1) : (data.like += 1);
    }
    setLike(!like);
  };

  return (
    <S.PostWrapper>
      <img src={data.img} alt="postImage" />
      <div className="description">
        <div>
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
