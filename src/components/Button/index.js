import React, { useContext } from 'react';
import { useState } from 'react';
import { saveToGithubAPI } from '../../service.js';
import editorContext from '../../editorContext';

const Button = () => {
  const [ response, setResponse ] = useState('');
  const { markdownText } = useContext(editorContext);

  const saveToGithub = async (e) => {
    const currentDate = new Date();
    const pathName = currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getUTCFullYear();
    const response = await saveToGithubAPI(pathName, markdownText)
    setResponse(response);
  }

  return (
    <button onClick={saveToGithub}>Submit to Github</button>
  )  
}

export default Button;