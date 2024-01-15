import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Volcanes from "./components/pages/Volcanes/Volcanes";
import Projects from "./components/pages/Projects/Projects";
import Layout from "./components/layout/Layout";

// import Map from "./components/Map";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volcanes" element={<Volcanes />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
