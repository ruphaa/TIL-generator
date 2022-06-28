import React, { useContext } from 'react';
import ReactMarkdown from "react-markdown";
import editorContext from '../../editorContext';
import './index.css';

const Preview = () => {
  const { markdownText } = useContext(editorContext);
  return (
    <div className="preview-container">
      <div className="title">Preview</div>
      <div className="preview-area">
        <ReactMarkdown children={markdownText} />
      </div>
    </div>
  )
}

export default Preview;