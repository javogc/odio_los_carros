import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
