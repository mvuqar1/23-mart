import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css"

import App from "./App"
import Second from './Component/Pages/Second';
import First from './Component/Pages/First';
import CounterIndex from './Component/Pages/CounterIndex';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/counterIndex",
        element: <CounterIndex />,
      },
      {
        path: "/first",
        element: <First />,
      },
      {
        path: "/second",
        element: <Second />,
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

