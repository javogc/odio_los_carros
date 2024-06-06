import React from "react";
import NavBar from "./NavBar/NavBar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
