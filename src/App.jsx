import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/routes";

export const router = createBrowserRouter(appRoutes);

export const App = () => <RouterProvider router={router} />;
