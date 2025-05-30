import { combineReducers } from "@reduxjs/toolkit";
import { toDoReducers } from "../../../models/ToDo";
import { layoutReducers } from "../../../layouts/store";
import { loginReducers } from "../../../models/LoginRegistration/Login/store";
import { ProfileReducers } from "../../../models/Profile/store";
import { RegistrationReducers } from "../../../models/LoginRegistration/Registration/store";
import { AdminReducers } from "../../../models/RegisterAdmin";
import { UserReducer } from "../../../models/UserManagement";

export const reducers = combineReducers({
  ...UserReducer,
  ...toDoReducers,
  ...ProfileReducers,
  ...loginReducers,
  ...RegistrationReducers,
  ...layoutReducers,
  ...AdminReducers,
});

export default reducers;
