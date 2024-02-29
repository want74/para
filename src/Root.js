
import { BrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Topbar from './topbar';
import BottomBar from './bottomBar';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
     <Topbar/>
      <Outlet/>
     <BottomBar/>
    </>
  );
}

export default Root;
