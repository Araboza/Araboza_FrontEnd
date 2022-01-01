import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../../components/Editor";
import Header from "../../components/Header";
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
    imgUrl:
      "https://cdnportal.mobalytics.gg/production/2021/06/23e17717-teemo-beemo-splash-crop.png",
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {}, []);

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
    const { tagValue, ...data } = value;

    if (!data.title || !data.contents) {
      alert("제목과 내용을 입력해 주세요");
      return;
    }

    // dispatch(addPost({ ...data, tags }));
    navigate("/");
  };

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
                  value={value.tagValue}
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
