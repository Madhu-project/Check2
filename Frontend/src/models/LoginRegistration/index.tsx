import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComponent } from "../../layouts/store/LayoutSlice";
import WrapperPage from "../../pages/wrapperPage";
import { LoginMapping } from "../../pages/mapping";
import { setUserLoggedIn } from "./Login/store/LoginSlice";
import { RootState } from "../../pages/store/store";
export * from "./Login/store/index";

function LoginPage() {
  const dispatch = useDispatch();
  const component = useSelector((state: RootState) => state?.layout?.component);

  useEffect(() => {
    dispatch(setUserLoggedIn(false));
    dispatch(loadComponent("login"));
  }, []);

  return <WrapperPage components={LoginMapping} index={component} />;
}

export default LoginPage;
