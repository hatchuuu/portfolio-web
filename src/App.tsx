import "./index.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { lazy, Suspense } from "react";

const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  const listPage = [
    { element: <ExperiencePage />, path: "/experience" },
    { element: <ProjectPage />, path: "/project" },
    { element: <ContactPage />, path: "/contact" },
  ];
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      {listPage.map((page, index) => (
        <Route
          key={index}
          path={page.path}
          element={
            <Suspense
              fallback={
                <div className="flex w-full justify-center items-center h-64">
                  <p className="page-loader" />
                </div>
              }
            >
              {page.element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
