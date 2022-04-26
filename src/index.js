import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import { useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let portfolio_json = require('./data/portfolio_json_template.json')
portfolio_json = portfolio_json.portfolio;
root.render(
  <React.StrictMode>
    <Main value={portfolio_json}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
