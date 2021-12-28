import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Editor from "../../components/Editor";
import Header from "../../components/Header";
import { addPost } from "../../modules/posts";
import * as S from "./style";

export default function Add() {
  const { user, posts } = useSelector((state) => ({
    user: state.myInfo.user,
    posts: state.posts.posts,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    title: "",
    context: "",
    tagValue: "",
    img: null,
  });
  const [tags, setTags] = useState([]);

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
      setValue({ ...value, img: finishedEvent.currentTarget.result });
    };
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const onUpload = (e) => {
    e.preventDefault();
    const { tagValue, ...data } = value;

    if (!data.title || !data.context) {
      alert("제목과 내용을 입력해 주세요");
      return;
    }

    dispatch(
      addPost({ ...data, tag: tags, name: user.username, id: posts.length + 1 })
    );
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
            {value.img ? (
              <div
                style={{ backgroundImage: `url(${value.img})` }}
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
