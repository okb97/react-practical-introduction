import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import books from './chap03/books';
import ForNest from './chap03/ForNest';
import StyledPanel from './chap03/StyledPanel';
import ListTemplate from './chap03/ListTemplate';
import StateBasic from './chap03/StateBasic';
import StateParent from './chap03/StateParent';
import EventMouse from './chap03/EventMouse';
import EventCompare from './chap03/EventCompare';
import EventKey from './chap03/EventKey';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <EventKey />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
