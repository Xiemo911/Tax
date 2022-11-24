import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from "react-router-dom"
import Weather from './components/Weather';
import ApiDisplay from './pages/ApiDisplay';
import ApiDisplayDays from './pages/ApiDisplayDays';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Weather />
    </BrowserRouter>
  </React.StrictMode>
);


