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
    ["link", "image"],
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
  const [value, setValue] = useState();

  const onChange = (mark) => {
    console.log(mark);
    setValue(mark);
  };

  return (
    <>
      <Header />
      <S.AddWrapper>
        <input type="text" placeholder="제목을 입력하세요" />
        <ReactQuill
          style={{ height: "65vh" }}
          placeholder="글을 작성하세요"
          theme="bubble"
          modules={modules}
          formats={formats}
          value={value || ""}
          onChange={(content, delta, source, editor) =>
            onChange(editor.getHTML())
          }
        />
      </S.AddWrapper>
    </>
  );
}
