import React from "react";
import { LogoSVG } from "../../Asset/SVG";
import { LoginWrapper } from "./style";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const onClick = () => {};

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
          <button onClick={onClick}>
            <div className="svg">
              <GoogleIcon />
            </div>
            Sign up with google
          </button>
        </div>
      </div>
      <div className="right"></div>
    </LoginWrapper>
  );
}
