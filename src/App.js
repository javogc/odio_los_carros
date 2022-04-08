import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Layout from "./components/layout/Layout";

// import Map from "./components/Map";

function App() {
  return (
    <div>
      <Layout>
        <AboutPage />
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
