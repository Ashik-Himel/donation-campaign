import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
