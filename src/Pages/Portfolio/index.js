import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import Heart from "../../components/Heart";

import { getPortfolio } from "../../lib/api/getPortfolio";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";
import { set_like } from "../../modules/posts";
import { useDispatch } from "react-redux";

export default function Portfolio() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user, post } = useParams();

  useEffect(() => {
    async function get() {
      const res = await getPortfolio({ user, post });

      const date = new Date(res.createDate);
      setData({
        ...res,
        createDate: `${date.getFullYear()}/${date.getDate()}`,
      });
      setIsLoading(false);
    }
    get();
  }, [user, post]);

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

    dispatch(set_like({ id: data.id }));
  };

  return (
    <>
      <Header />
      <S.PortfolioWrapper>
        <h1 className="title">{data.title}</h1>
        <div className="user">
          <S.UserImg image={data.user.picture} />
          <div className="info">
            <h3>{data.user.id}</h3>
            <p>{data.createDate}</p>
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
        <div className="view">
          <Viewer initialValue={data.contents} />
        </div>
      </S.PortfolioWrapper>
    </>
  );
}
