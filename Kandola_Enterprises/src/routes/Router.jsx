// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Form from "../pages/Form"
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Service /> },
      { path: "services/form", element: <Form /> },
    ],
  },
]);

export default router;
