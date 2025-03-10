import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/styles/home.css"
import HeaderHome from '../src/components/HeaderHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderHome />
  </React.StrictMode>
);