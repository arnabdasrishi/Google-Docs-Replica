import { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import DocumentPageHeader from "./DocumentPageHeader";


const TOOLBAR_OPTIONS = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
  ["link", "image"],
];

const TextEditor = () => {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);

    new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } });
  });

  return (
    <div>
        <DocumentPageHeader />
      <div className="container" ref={wrapperRef}></div>
    </div>
  );
};

export default TextEditor;
