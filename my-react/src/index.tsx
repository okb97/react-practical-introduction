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
import MaterialBasic from './chap06/MaterialBasic';
import MaterialDrawer from './chap06/MaterialDrawer';
import QueryPre from './chap06/QueryPre';
import { QueryClient, QueryClientProvider } from 'react-query';
import QueryBasic from './chap06/QueryBasic';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cli = new QueryClient
root.render(
  <QueryClientProvider client={cli}>
    <QueryBasic />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
