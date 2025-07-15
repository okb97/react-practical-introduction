import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LazyBasic from './chap05/LazyBasic';
import LazyMulti from './chap05/LazyMulti';
import SuspenseSimple from './chap05/SuspenseSimple';
import ThrowResult from './chap05/ThrowResult';
import SuspenseResult from './chap05/SuspenseResult';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SuspenseResult /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
