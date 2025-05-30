import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WrapperPage from "../../../pages/wrapperPage";
import { loadComponent } from "../../../layouts/store/LayoutSlice";
import { RegistrationMapping } from "../../../pages/mapping";
import { RootState } from "../../../pages/store/store";
export * from "./store/index";

function RegistrationPage() {
  const dispatch = useDispatch();
  const component = useSelector((state: RootState) => state?.layout?.component);

  useEffect(() => {
    dispatch(loadComponent("registration"));
  }, []);

  return <WrapperPage components={RegistrationMapping} index={component} />;
}

export default RegistrationPage;
