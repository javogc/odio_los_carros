import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Projects from "./components/pages/Projects/Projects";
import ProjectDetail from "./components/pages/Projects/ProjectDetail/ProjectDetail";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/projects/*",
        children: [
          { index: true, element: <Projects /> },
          { path: "*", element: <ProjectDetail /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <div>
      <Layout />
      <Routes></Routes>
    </div>
  );
}
