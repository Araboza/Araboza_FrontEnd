import React from "react";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./style";
import Post from "../../components/Post";
import { set_like, set_user } from "../../modules/myInfo";

export default function My() {
  const dispatch = useDispatch();
  const { user, posts } = useSelector((state) => ({
    user: state.myInfo.user,
    posts: state.myInfo.posts,
  }));

  dispatch(set_user());

  const onLike = (data, e) => {
    e.preventDefault();
    dispatch(set_like(data));
  };

  return (
    <>
      <Header />
      <S.MyWrapper>
        <div className="userInfo">
          <S.UserImg image={user.img}></S.UserImg>
          <div className="info">
            <h1>{user.id}</h1>
            <p className="major">
              {user.major[0] ? (
                user.major.map((i) => <span key={i}>#{i}</span>)
              ) : (
                <span>전공이 없습니다</span>
              )}
            </p>
            {user.description ? (
              <p>{user.description}</p>
            ) : (
              <p>소개글이 없습니다</p>
            )}
          </div>
          <div className="edit">
            <button>편집</button>
          </div>
        </div>
        <div className="portfolios">
          {posts.map((data) => (
            <Post data={data} onLike={(e) => onLike(data, e)} key={data.id} />
          ))}
        </div>
      </S.MyWrapper>
    </>
  );
}
