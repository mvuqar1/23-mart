import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css"

import App from "./App"
import Home from './Component/Pages/Home';
import Counter from './Component/Pages/Counter';
import Products from './Component/Pages/Products';
import Second from './Component/Pages/Second';

import Foto from './Component/Pages/Foto';
import Error from './Component/Pages/Error';


import MerkeziData from './Component/Components/MerkeziData';


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
        element: <Counter />,
      },
      {
        path: "/products",
        element: <Products />,
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

    <MerkeziData>
      <RouterProvider router={router} />
    </MerkeziData>

  </React.StrictMode>
);

