import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Projects from "./components/pages/Projects/Projects";
import ProjectDetail from "./components/pages/Projects/ProjectDetail/ProjectDetail";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetail />,
      },
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
      <Routes></Routes>
    </div>
  );
}
