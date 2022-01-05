import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import * as S from "./style";
import Post from "../../components/Post";
import { set_like, set_user } from "../../modules/myInfo";
import { useNavigate, useParams } from "react-router-dom";
import { getUserPortfolio } from "../../lib/api/getUserPortfolio";

export default function My() {
  const navigate = useNavigate();
  const [posts, setPost] = useState();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      const res = await getUserPortfolio(params.user);

      if (!res) navigate("/notFound");
      setUser(res);
      setPost(res.portfolio);
      setIsLoading(false);
    }
    get();
  }, [navigate, params.user]);

  dispatch(set_user());

  const onLike = (data, e) => {
    e.preventDefault();
    dispatch(set_like(data));
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <S.MyWrapper>
        <div className="userInfo">
          <S.UserImg
            style={{ backgroundImage: `url(${user.picture})` }}
          ></S.UserImg>
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
          <div className="edit"></div>
        </div>
        <div className="portfolios">
          {posts.map((data) => (
            <Post
              data={data}
              user={user}
              onLike={(e) => onLike(data, e)}
              key={data.id}
            />
          ))}
        </div>
      </S.MyWrapper>
    </>
  );
}
