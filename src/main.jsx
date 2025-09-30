import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './assets/css/home.css';
import Homepage from './App.jsx'
// import from 'assests/css/boostrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Homepage />
    </BrowserRouter>
  </StrictMode>,
)
