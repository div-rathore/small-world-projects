import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ListOne from "./ListOne";
import ListTwo from "./ListTwo";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Body;
