import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default Layout;
