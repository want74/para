import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainPage from './routes/mainPage'
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from './error_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/unions",
    // element: ,
    errorElement: <ErrorPage/>
  },
  {
    path:"/event_catalog",
    // element: ,
    errorElement: <ErrorPage/>
  },
  {
    path:"/calendar",
    // element: ,
    errorElement: <ErrorPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  //   <Navbar></Navbar>
  // </React.StrictMode>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

