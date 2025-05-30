import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../pages/store/store";
import "./Styles.scss";
export * from "./store/index";

function DashboardLayout() {
  const isUserLoggedIn = useSelector(
    (state: RootState) => state?.login?.isUserLoggedIn
  );
  console.log("isUserLoggedIn=", isUserLoggedIn);

  return (
    <div className="dashboard">
      <Header isUserLoggedIn={isUserLoggedIn} />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
