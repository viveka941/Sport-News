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
import { Auth0Provider } from "@auth0/auth0-react";
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-2jwn86df6bp6swqx.us.auth0.com"
    clientId="HWmRpxvnhLN1tcgJZTCoiDoLCONyKDBJ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
