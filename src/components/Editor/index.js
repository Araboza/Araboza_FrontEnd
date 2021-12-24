import React from "react";
import ReactQuill, { Quill } from "react-quill";
import MarkdownShortcuts from "quill-markdown-shortcuts";

import "react-quill/dist/quill.bubble.css";

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

export default function Editor({ value, setValue }) {
  const onChange = (mark) => {
    setValue({
      ...value,
      context: mark,
    });
  };

  return (
    <ReactQuill
      style={{ height: "60vh" }}
      placeholder="글을 작성하세요"
      theme="bubble"
      modules={modules}
      formats={formats}
      value={value.context || ""}
      onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
    />
  );
}
