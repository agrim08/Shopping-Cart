import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.tsx";
import Store from "./components/Store.tsx";
import Home from "./components/Home.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={appRouter}></RouterProvider>
    </ShoppingCartProvider>
    ,
  </StrictMode>
);
