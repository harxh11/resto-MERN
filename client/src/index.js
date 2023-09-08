import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import react-router-dom components and create a whole basic front-end design..  
// create a login page which include username password fields along with the Google Sign in button.. test the Google sign in method


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);