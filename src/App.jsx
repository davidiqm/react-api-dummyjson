import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import PageNotFoundScreen from "./screens/PageNotFoundScreen";
import CreateScreen from "./screens/CreateScreen";
import EditScreen from "./screens/EditScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsScreen />,
  },
  {
    path: "/login",
    element: <ProductsScreen />,
  },
  {
    path: "/crear",
    element: <CreateScreen />,
  },
  {
    path: "/editar/:id",
    element: <EditScreen />,
  },
  {
    path: "*",
    element: <PageNotFoundScreen />,
  },
]);

function App() {
  const cookies = new Cookies();

  if (!cookies.get("token")) {
    return <LoginScreen />;
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
