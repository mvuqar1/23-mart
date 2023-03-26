import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css"

import App from "./App"
import Second from './Component/Pages/Second';
import First from './Component/Pages/Products';
import CounterIndex from './Component/Pages/CounterIndex';
import Home from './Component/Pages/Home';
import Error from './Component/Pages/Error';
import Foto from './Component/Pages/Foto';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counterIndex",
        element: <CounterIndex />,
      },
      {
        path: "/products",
        element: <First />,
      },
      {
        path: "/second",
        element: <Second />,
      },
      {
        path: "/products/:id",
        element: <Foto />,
      },
      {
        path: "/*",
        element: <Error />,
      },

    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <RouterProvider router={router} />
    
  </React.StrictMode>
);

