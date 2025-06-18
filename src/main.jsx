import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Components/Register/Register";
import Add from "./Components/Add/Add";
import AllItems from "./Components/AllItems/AllItems";
import MyItems from "./Components/MyItems/MyItems";
import Details from "./Components/Details/Details";
import Update from "./Components/Update/Update";
import AllRecovered from "./Components/AllRecovered/AllRecovered";
import PrivateRoute from "./Components/Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "add",
        element: <PrivateRoute><Add></Add></PrivateRoute> 
      },
      {
        path: "all",
        Component: AllItems,
        loader: () => fetch("http://localhost:3000/allItems"),
      },
      {
        path: "my",
        Component: MyItems,
      },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/items/${params.id}`),
        element: <PrivateRoute><Details></Details></PrivateRoute> 
      },
        {
        path: "update/:id",
          loader: ({ params }) =>
          fetch(`http://localhost:3000/items/${params.id}`),
        element: <PrivateRoute><Update></Update></PrivateRoute> 
      },
        {
        path: "all-recover",
        element: <PrivateRoute><AllRecovered></AllRecovered></PrivateRoute> 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
