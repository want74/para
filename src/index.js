import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './Root';
import MainPage from './routes/mainPage'
import ErrorPage from './error_page';
import Unions from './routes/unions';
import Events from './routes/events';
import Calendar from './routes/calendar';
import Topbar from "./topbar";
import BottomBar from "./bottomBar";
import Root from "./Root";
import EventPage from "./routes/eventPage";
import Auth from "./routes/auth";
import TelAuth from "./routes/tel_auth";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element:<MainPage/>
      },
      {
        path:"/unions",
        element:<Unions/>
      },
      {
        path:"/events",
        element:<Events/>
      },
      {
        path:"/calendar",
        element:<Calendar></Calendar>
      },
      {
        path:"events/:eventId",
        element:<EventPage></EventPage>
      }
    ],
  },
  {
    path:'/auth',
    element: <Auth/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'/auth/tel_auth',
    element: <TelAuth/>,
    errorElement: <ErrorPage/>,
  },
],
{
  future: {
    v7_partialHydration: true,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
