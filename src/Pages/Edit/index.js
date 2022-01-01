import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../../components/Editor";
import Header from "../../components/Header";
import { getPortfolio } from "../../lib/api/getPortfolio";
import { postUpdatePortfolio } from "../../lib/api/postUpdatePortfolio";
import { setPost } from "../../modules/posts";
import * as S from "./style";

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, post } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState({
    title: "",
    contents: "",
    tagValue: "",
    imgUrl: "",
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function get() {
      // 유저가 맞는지 확인
      // 아니면 다른 페이지로 이동
      // 에러 페이지가 좋을까?

      const { tags, ...res } = await getPortfolio({
        user,
        post,
      });

      setTags(tags);

      setValue({
        ...res,
      });
      setIsLoading(false);
    }
    get();
  }, [user, post]);

  const onSubmit = (e) => {
    e.preventDefault();
    const tagValue = value.tagValue.replace(" ", "");
    if (tagValue === "") {
    } else if (tags.findIndex((i) => i === tagValue) === -1) {
      setTags([...tags, tagValue]);
    }
    setValue({ ...value, tagValue: "" });
  };

  const onClick = (e) => {
    setTags(tags.filter((i) => i !== e.target.innerText));
  };

  const onImg = (e) => {
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      setValue({ ...value, imgUrl: finishedEvent.currentTarget.result });
    };
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const onUpload = (e) => {
    e.preventDefault();
    const { tagValue, user, like, createDate, id, ...data } = value;

    if (!data.title || !data.contents) {
      alert("제목과 내용을 입력해 주세요");
      return;
    }

    postUpdatePortfolio(user, post, { ...data, tags });
    dispatch(setPost());
    navigate("/");
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <S.AddWrapper>
        <input
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          type="text"
          placeholder="제목을 입력하세요"
        />
        <div className="uploadImg">
          <input type="file" onChange={onImg} id="imgInput" />
          <label htmlFor="imgInput">
            {value.imgUrl ? (
              <div
                style={{ backgroundImage: `url(${value.imgUrl})` }}
                className="cover_img"
              />
            ) : (
              <span>커버 이미지</span>
            )}
          </label>
        </div>

        <Editor value={value} setValue={setValue} />

        <div className="footer">
          <div className="tags">
            <ul>
              {tags.map((i) => (
                <li onClick={onClick} key={i}>
                  # {i}
                </li>
              ))}
            </ul>
            {tags.length <= 30 && (
              <form onSubmit={onSubmit}>
                <input
                  value={value.tagValue || ""}
                  type="text"
                  placeholder="입력하고 Enter"
                  onChange={(e) =>
                    setValue({ ...value, tagValue: e.target.value })
                  }
                />
              </form>
            )}
          </div>
          <form onSubmit={onUpload}>
            <button type="submit">올리기</button>
          </form>
        </div>
      </S.AddWrapper>
    </>
  );
}
