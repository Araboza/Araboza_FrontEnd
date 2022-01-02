import React from "react";
import * as S from "./style";
import * as SVG from "../../Asset/SVG";

export default function NotFound() {
  return (
    <S.NotFoundWrapper>
      <SVG.LogoSVG />
      <h1>404 Not Found</h1>
    </S.NotFoundWrapper>
  );
}
