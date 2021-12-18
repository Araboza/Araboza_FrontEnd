import React from "react";
import { LogoSVG } from "../../Asset/SVG";
import { LoginWrapper } from "./style";
import GoogleLogin from "react-google-login";
// import { PostToken } from "../../lib/api/postToken";

export default function Login() {
  const responseGoogle = (res) => {
    console.log(res);
    // PostToken(res.tokenId);
  };
  return (
    <LoginWrapper>
      <div className="left">
        <div>
          <LogoSVG />
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
    </LoginWrapper>
  );
}
