import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import * as S from "./style";

export default function My() {
  const { user } = useSelector((state) => ({
    user: state.myInfo.user,
  }));
  console.log(user);
  return (
    <>
      <Header />
      <S.MyWrapper>
        <div className="userInfo">
          <S.UserImg image={user.img}></S.UserImg>
          <div className="info">
            <h1>{user.username}</h1>
            <p className="major">
              {user.major.map((i) => (
                <span key={i}>#{i}</span>
              ))}
            </p>
            <p>{user.description}</p>
          </div>
          <div className="edit">
            <button>편집</button>
          </div>
        </div>
        <div className="portfolios"></div>
      </S.MyWrapper>
    </>
  );
}
