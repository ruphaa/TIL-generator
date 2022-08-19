import React, { useContext } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import classnames from "classnames";
import { saveToGithubAPI } from '../../service.js';
import editorContext from '../../editorContext';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const Button = () => {
  const [ responseData, setResponseData ] = useState('');
  const [ response, setResponse] = useState('default');
  const { markdownText, setMarkdownText } = useContext(editorContext);

  const saveToGithub = async (e) => {
    const currentDate = new Date();
    const pathName = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getUTCFullYear();
    const response = await saveToGithubAPI(pathName, markdownText);
    if(response) {
      setResponse('success');
      setResponseData(response);
      setMarkdownText('')
      toast.success('TIL pushed successfully! 🦄', {
        position: "top-left",
        className: 'toast-message',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else {
      setResponse('error');
      toast.error('Failed to push to github!', {
        position: "top-left",
        className: 'toast-message',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  }

  const errorMessage = {
    success: 'Pushed',
    error: 'Failed to push',
    default: 'Push to Github'
  }

  return (
    <>
    <button 
        className={classnames('button', {
          "done": response === 'success',
          "error": response === 'error',
          "disabled": response === 'success',
        })} 
        onClick={saveToGithub}
        disabled={response === 'success'}
    >
      {errorMessage[response]}
    </button>
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </>
  )  
}


export default Button;
