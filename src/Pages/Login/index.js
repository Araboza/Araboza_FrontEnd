import React, { useState } from "react";
import * as I from "../../Asset/SVG";
import * as S from "./style";
import GoogleLogin from "react-google-login";
import LoginPage from "../../components/LoginPage";
import { useDispatch } from "react-redux";
import { login } from "../../modules/user";
import { postRegister } from "../../lib/api/postRegister";

export default function Login() {
  const [tokenId, setTokenId] = useState();
  const [id, setId] = useState("");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const loginSuccess = (token) => {
    dispatch(login(token.tokenId));
  };
  const registerSuccess = (token) => {
    setTokenId(token.tokenId);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const status = await postRegister({ tokenId, id });

    if (status === 403) {
      setError("이미 있는 user입니다");
      return;
    }
    setId("");
    setTokenId("");
    setError("");
  };

  if (!tokenId)
    return (
      <LoginPage>
        <S.LoginWrapper>
          <I.LogoSVG />
          <h1>다른 사람의 포트폴리오가 궁금하진 않으신가요?</h1>
          <p className="text">포트폴리오를 제작하고 다른사람과 공유해 보세요</p>
          <div className="login">
            <GoogleLogin
              className="right-btn"
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={(result) => loginSuccess(result)}
              onFailure={(result) => console.log(result)}
            />
            <GoogleLogin
              buttonText="Sign up with Google"
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={(result) => registerSuccess(result)}
              onFailure={(result) => console.log(result)}
            />
          </div>
        </S.LoginWrapper>
      </LoginPage>
    );

  return (
    <LoginPage>
      <S.RegisterWrapper>
        <h1>회원가입</h1>
        <p className="register-text">
          당신을 알아볼 수 있는
          <br />
          아이디를 입력해주세요!
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="아이디를 입력해 주세요"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <button>회원가입</button>
        </form>
        <p className="errorMessage">{error}</p>
      </S.RegisterWrapper>
    </LoginPage>
  );
}
