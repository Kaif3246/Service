import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Form from "../pages/Form";
import React from "react";

// Import new pages for Solutions
import BusinessStrategy from "../pages/Service1";
import BrandBuilding from "../pages/Service2";
import FundingCapitalOptimization from "../pages/Service3";
import Marketing from "../pages/Service4";
import DigitalArchitecture from "../pages/Service5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Service /> },
      { path: "services/form", element: <Form /> },

      // Solutions routes
      { path: "business-strategy", element: <BusinessStrategy /> },
      { path: "brand-building", element: <BrandBuilding /> },
      { path: "funding-capital-optimization", element: <FundingCapitalOptimization /> },
      { path: "marketing", element: <Marketing /> },
      { path: "digital-architecture", element: <DigitalArchitecture /> },
    ],
  },
]);

export default router;
