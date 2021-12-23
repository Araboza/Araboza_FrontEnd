import React, { useState } from "react";
import Header from "../../components/Header";
import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";

import "react-quill/dist/quill.bubble.css";
import * as S from "./style";

Quill.register("modules/markdownShortcuts", MarkdownShortcuts);

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
  markdownShortcuts: {},
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

export default function Add() {
  const [value, setValue] = useState({
    title: "",
    text: "",
    tagValue: "",
    img: null,
  });
  const [tags, setTags] = useState([]);

  const onChange = (mark) => {
    setValue({
      ...value,
      text: mark,
    });
  };

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
        <ReactQuill
          style={{ height: "60vh" }}
          placeholder="글을 작성하세요"
          theme="bubble"
          modules={modules}
          formats={formats}
          value={value.text || ""}
          onChange={(content, delta, source, editor) =>
            onChange(editor.getHTML())
          }
        />
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
          <button>올리기</button>
        </div>
      </S.AddWrapper>
    </>
  );
}
