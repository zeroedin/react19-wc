import React from 'react';
import ReactDOM from 'react-dom/client';
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import './webawesome';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
