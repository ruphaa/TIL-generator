import React, { useContext } from 'react';
import editorContext from '../../editorContext';
import './index.css';

const MarkdownEditor = () => {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  }

  return (
    <div className="markdown-container">
      <div className="title">Markdown Editor</div>
      <textarea onChange={onInputChange}></textarea>
    </div>
  )
}

export default MarkdownEditor;