import React from "react";
import * as S from "./style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Heart({ toggle, onLike }) {
  return (
    <S.HeartWrapper onClick={onLike}>
      {toggle ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </S.HeartWrapper>
  );
}
