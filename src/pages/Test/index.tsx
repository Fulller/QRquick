import { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Home: FC = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: any) => {
    setContent(value);
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <main id="home-page">
      <ReactQuill value={content} onChange={handleChange} formats={formats} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export default Home;
