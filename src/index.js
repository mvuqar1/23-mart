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
import Third from './Component/Pages/Third';
import ThirdOne from './Component/Pages/ThirdOne';
import ThirdTwo from './Component/Pages/ThirdTwo';

import Foto from './Component/Pages/Foto';
import Error from './Component/Pages/Error';


import MerkeziData from './Component/Components/MerkeziData';
import DorduncununDatasi from './Component/Components/DorduncununDatasi';


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
        element: <MerkeziData>
          <Second />
        </MerkeziData>
      },
      {
        path: "/third",
        element:<DorduncununDatasi>

          <Third />
        </DorduncununDatasi>
        ,
        children: [
          {
            path: "/third/one",
            element:
              <ThirdOne />

          },
          {
            path: "/third/two",
            element:
              <ThirdTwo />

          }
        ]
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

