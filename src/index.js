import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import { FontGlobalStyles } from "./shared/fonts";
import CatalogPage from "./pages/CatalogPage";
import BlogPage from "./pages/BlogPage";
import UsefulPage from "./pages/UsefulPage";
import ProjectPage from "./pages/ProjectsPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/catalog/:node",
    element: <CatalogPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/useful",
    element: <UsefulPage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FontGlobalStyles />

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
