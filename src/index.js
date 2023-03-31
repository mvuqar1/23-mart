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
import Third from './Component/Pages/Third/Third';
import ThirdOne from './Component/Pages/Third/ThirdOne';
import ThirdTwo from './Component/Pages/Third/ThirdTwo';
import Fifth from './Component/Pages/Fifth/Fifth';
import FifthOne from "./Component/Pages/Fifth/FifthOne"
import FifthTwo from "./Component/Pages/Fifth/FifthTwo"
import FifthThree from "./Component/Pages/Fifth/FifthThree"

import Foto from './Component/Pages/Foto';
import Error from './Component/Pages/Error';


import MerkeziData from './Component/Data/MerkeziData';
import CarData from './Component/Data/CarData';
import { Provider } from 'react-redux';
import store from './Component/Store/store';


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
        element:

          <MerkeziData>
            <Second />
          </MerkeziData>
      },
      {
        path: "/third",
        element:

          <CarData>
            <Third />
          </CarData>
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
        path: "/fifth",
        element: <Fifth />,
        children: [
          {
            path: "/fifth/one",
            element:
              <FifthOne/>
          },
          {
            path: "/fifth/two",
            element:
              <FifthTwo />
          },
          {
            path: "/fifth/three",
            element:
              <FifthThree />
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

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

