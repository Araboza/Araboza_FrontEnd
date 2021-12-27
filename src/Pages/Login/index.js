import React from "react";
import * as I from "../../Asset/SVG";
import * as S from "./style";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { login } from "../../modules/user";

export default function Login() {
  const dispatch = useDispatch();
  const responseGoogle = (res) => {
    dispatch(login(res.tokenId));
  };

  return (
    <S.LoginWrapper>
      <div className="left">
        <div>
          <I.LogoSVG />
          <h1>
            다른 사람들의 포트폴리오가
            <br />
            궁금하진 않으신가요?
          </h1>
          <p>포트폴리오를 제작하고 다른사람과 공유해 보세요</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText=".Araboza with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
      <div className="right"></div>
    </S.LoginWrapper>
  );
}
