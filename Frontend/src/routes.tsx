import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./models/LoginRegistration/index";
import Registration from "./models/LoginRegistration/Registration";
import ToDo from "./models/ToDo";
import Profile from "./models/Profile";
import RegisterAdmin from "./models/RegisterAdmin";
import UserManagement from "./models/UserManagement";
import { ProtectedRoute } from "./utils/privateRoute";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Login />, index: true },
        { path: "login", element: <Login />, index: true },
        {
          path: "register",
          element: <Registration />,
        },
        {
          path: "toDo",
          element: (
            // <ProtectedRoute>
            <ToDo />
            // </ProtectedRoute>
          ),
        },
        { path: "profile", element: <Profile /> },
        { path: "adminRegistration", element: <RegisterAdmin /> },
        {
          path: "users",
          element: (
            // <ProtectedRoute>
            <UserManagement />
            // </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return routes;
}
