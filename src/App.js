import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/layout/Layout";

// import Map from "./components/Map";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
