import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/fonts/Outfit-Regular.ttf";
import { RouterProvider,  HashRouter } from "react-router-dom";

const router = HashRouter(
  [
    {
      path: "/portfolio",
      element: [],
    },
    {
      path: "/team",
      element: [],
    },
    {
      path: "/",
      element: <App />,
    },
  ],
);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);