import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EmptyPage from "./components/pages/EmptyPage/EmptyPage";
import Layout from "./components/layout/Layout";

// import Map from "./components/Map";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volcanes" element={<EmptyPage />} />
          <Route path="/projects" element={<EmptyPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
