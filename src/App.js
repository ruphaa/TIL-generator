import React, { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import Preview from './components/Preview';
import EditorContext from './editorContext.js';
import './App.css';

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <div className="app-container">
        <h2 className="title">TIL generator</h2>
        <div className="editorContainer">
          <MarkdownEditor />
          <Preview />
        </div>
      </div>
    </EditorContext.Provider>
  );
}

export default App;
