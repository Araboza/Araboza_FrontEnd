import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import Heart from "../../components/Heart";

import { getPortfolio } from "../../lib/api/getPortfolio";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";
import { setPost, set_like } from "../../modules/posts";
import { useDispatch } from "react-redux";
import { deleteProtfolio } from "../../lib/api/deletePortfolio";

export default function Portfolio() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [owner, setOwner] = useState(false);
  const { user, post } = useParams();

  useEffect(() => {
    async function get() {
      try {
        const [res, owner] = await getPortfolio({ user, post });

        setOwner(owner);

        const date = new Date(res.createDate);
        setData({
          ...res,
          createDate: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
        });
        setIsLoading(false);
      } catch (e) {
        navigate("/notfound");
      }
    }
    get();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  const onLike = () => {
    const toggle =
      localStorage
        .getItem("araboza_like")
        .split(",")
        .findIndex((i) => parseInt(i) === data.id) !== -1;

    if (toggle)
      setData({
        ...data,
        like: data.like - 1,
      });
    else
      setData({
        ...data,
        like: data.like + 1,
      });

    dispatch(set_like(data));
  };

  const onDelete = () => {
    deleteProtfolio(user, post);
    setTimeout(() => {
      dispatch(setPost());
    }, 500);
    navigate("/");
  };

  return (
    <>
      <Header />
      <S.PortfolioWrapper>
        <h1 className="title">{data.title}</h1>
        <div className="user">
          <div>
            <S.UserImg
              image={data.user.picture}
              onClick={() => navigate(`/@${user}`)}
            />
            <div className="info">
              <h3 onClick={() => navigate(`/@${user}`)}>{data.user.id}</h3>
              {owner && (
                <p>
                  <span>{data.createDate}</span>
                  <span
                    onClick={() =>
                      navigate(`/edit/@${data.user.id}/${data.title}`)
                    }
                  >
                    수정하기
                  </span>
                  <span className="delete" onClick={onDelete}>
                    삭제하기
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="heart">
            <p>{data.like}</p>
            <Heart
              toggle={
                localStorage
                  .getItem("araboza_like")
                  .split(",")
                  .findIndex((i) => parseInt(i) === data.id) !== -1
              }
              onLike={onLike}
            />
          </div>
        </div>
        {data.imgUrl && (
          <div className="cover">
            <img className="cover-img" src={data.imgUrl} alt="cover-img" />
          </div>
        )}
        <div className="view">
          <Viewer initialValue={data.contents} />
        </div>
        <ul className="tags">
          {data.tags.map((i) => (
            <li className="tag" key={i}>
              {i}
            </li>
          ))}
        </ul>
      </S.PortfolioWrapper>
    </>
  );
}
