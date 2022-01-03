import React from "react";
import * as S from "./style";
import * as SVG from "../../Asset/SVG";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const onClick = () => navigate("/");
  return (
    <S.NotFoundWrapper onClick={onClick}>
      <SVG.LogoSVG />
      <h1>404 Not Found</h1>
    </S.NotFoundWrapper>
  );
}
