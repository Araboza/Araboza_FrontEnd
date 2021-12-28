import React from "react";
import * as S from "./style";

export default function LoginPage({ children }) {
  return (
    <S.LoginWrapper>
      <div className="left">{children}</div>
      <div className="right"></div>
    </S.LoginWrapper>
  );
}
