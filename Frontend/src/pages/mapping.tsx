import React, { lazy } from "react";
import ToDo from "../models/ToDo/ToDo";
import RegisterAdministrator from "../models/RegisterAdmin/RegisterAdministrator";
import AddTask from "../models/ToDo/AddTask";
import MyRegistration from "../models/LoginRegistration/Registration/MyRegistration";
import ViewUsers from "../models/UserManagement/ViewUsers";
const MyProfile = lazy(() => import("../models/Profile/MyProfile"));
const LoginPage = lazy(
  () => import("../models/LoginRegistration/Login/MyLogin")
);

export const LoginMapping = [{ id: "login", child: <LoginPage /> }];
export const ProfileMapping = [{ id: "my-profile", child: <MyProfile /> }];

export const TodoMapping = [
  { id: "to-do", child: <ToDo /> },
  { id: "add-task", child: <AddTask />, isBack: true },
  { id: "update-task", child: <AddTask update />, isBack: true },
];

export const RegistrationMapping = [
  { id: "registration", child: <MyRegistration /> },
];

export const AdminMapping = [
  { id: "register-admin", child: <RegisterAdministrator /> },
];

export const UsersMapping = [{ id: "users-list", child: <ViewUsers /> }];
