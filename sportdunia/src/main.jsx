import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Blog from "./page/Blog.jsx";
import Service from "./page/Service.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/blog",
        element:<Blog/>
      },{
        path:"/service",
        element:<Service/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
