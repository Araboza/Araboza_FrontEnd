import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../My/style";
import Post from "../../components/Post";
import { set_user } from "../../modules/myInfo";
import { getLikePosts } from "../../lib/api/getLikePosts";

export default function My() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.myInfo.user,
  }));

  useEffect(() => {
    async function get() {
      const res = await getLikePosts();
      setPosts(res);
    }
    get();
  }, []);

  dispatch(set_user());

  const onLike = (data) => {
    // dispatch(set_like(data));
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
