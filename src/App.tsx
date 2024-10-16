import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Projects from "./components/pages/Projects/Projects";
import ProjectDetail from "./components/pages/Projects/ProjectDetail/ProjectDetail";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
// import Accidentes from "./components/pages/Accidentes/Accidentes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <HomePage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetail />,
      },

      // {
      //   path: "/accidentes",
      //   element: <Accidentes />,
      // },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <div className="bg-odioGreen min-h-screen">
      <Layout />
    </div>
  );
}
