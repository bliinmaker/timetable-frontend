import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Auth } from "../pages/Auth";
import { PageNotFound } from "../pages/PageNotFound";
import { Teachers } from "../pages/Teachers";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Timetable } from "../pages/Timetable";
import { WaitingForAccess } from "../pages/WaitingForAccess";
import { ProtectedRoute } from "../components/protectedRoute/ProtectedRoute";

export const appRoutes = [
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "waitingForAccess",
    element: <WaitingForAccess />,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "*",
        element: (
          <ProtectedRoute>
            <PageNotFound />
          </ProtectedRoute>
        ),
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Timetable />
          </ProtectedRoute>
        ),
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "teachers",
        element: (
          <ProtectedRoute>
            <Teachers />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
