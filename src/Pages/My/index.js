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
        <div className="portfolios">
          {posts.map((data) => (
            <Post data={data} onLike={onLike} key={data.id} />
          ))}
        </div>
      </S.MyWrapper>
    </>
  );
}
