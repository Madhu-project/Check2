import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../pages/store/store";

interface props {
  children: any;
}

export const ProtectedRoute = ({ children }: props) => {
  const isUserLoggedIn = useSelector(
    (state: RootState) => state?.login?.isUserLoggedIn
  );
  // if (!isUserLoggedIn) {
  // user is not authenticated
  return <Navigate to="/login" />;
  //  }
  return children;
};
