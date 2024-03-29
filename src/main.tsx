import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/index.tsx";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
