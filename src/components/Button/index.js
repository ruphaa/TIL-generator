import React, { useContext } from 'react';
import { useState } from 'react';
import { saveToGithubAPI } from '../../service.js';
import editorContext from '../../editorContext';
import './index.css';

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
    <button className="button" onClick={saveToGithub}>Push to Github</button>
  )  
}

export default Button;