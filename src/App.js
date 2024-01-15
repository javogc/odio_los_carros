import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/layout/Layout";

// import Map from "./components/Map";

function App() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js"></script>
      </Helmet>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
