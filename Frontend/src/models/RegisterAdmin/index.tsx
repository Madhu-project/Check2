import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WrapperPage from "../../pages/wrapperPage";
import { loadComponent } from "../../layouts/store/LayoutSlice";
import { AdminMapping } from "../../pages/mapping";
import { RootState } from "../../pages/store/store";
export * from "./store/index";

function RegisterAdmin() {
  const dispatch = useDispatch();
  const component = useSelector((state: RootState) => state?.layout?.component);

  useEffect(() => {
    dispatch(loadComponent("register-admin"));
  }, []);

  return <WrapperPage components={AdminMapping} index={component} />;
}

export default RegisterAdmin;
