// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/Service";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Service /> },
    ],
  },
]);

export default router;
