import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/fonts/Outfit-Regular.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: [
   
  ]
  },
  {
    path: "/team",
    element: [
   
    ]
  },
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);