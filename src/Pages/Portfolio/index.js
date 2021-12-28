import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
// import { GetLike } from "../../lib/api/getLike";
import Heart from "../../components/Heart";

// import { getPortfolio } from "../../lib/api/getPortfolio";
// import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";

export default function Portfolio() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const { user, post } = useParams();

  useEffect(() => {
    async function get() {
      // const res = await getPortfolio({ user, post });
      // setData(res);
      setData({
        id: 1,
        title: "React가 마려워 지는 포스트",
        img: "/Teemo.jpg",
        description: "# 전승원 바보\n```js\nconsole.log('hello')\n```\n",
        createDate: "12/21",
        classNum: 1205,
        name: "변찬우",
        like: 34,
        toggle: false,
      });
      setIsLoading(false);
    }
    get();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  const onLike = async () => {
    // await GetLike({ name: user, PostName: post });
    setData({
      ...data,
      like: data.toggle ? data.like - 1 : data.like + 1,
      toggle: !data.toggle,
    });
  };

  return (
    <>
      <Header />
      <S.PortfolioWrapper>
        <h1 className="title">{data.title}</h1>
        <div className="user">
          <S.UserImg image={data.img} />
          <div className="info">
            <h3>{data.name}</h3>
            <p>{data.createDate}</p>
          </div>
          <div className="heart">
            <p>{data.like}</p>
            <Heart toggle={data.toggle} onLike={onLike} />
          </div>
        </div>
        <div className="view">
          <Viewer initialValue={data.description} />
        </div>
      </S.PortfolioWrapper>
    </>
  );
}
