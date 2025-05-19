import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { RouterProvider } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import router from "./routes/Router.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
