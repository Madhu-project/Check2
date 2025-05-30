import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WrapperPage from "../../pages/wrapperPage";
import { ProfileMapping } from "../../pages/mapping";
import { loadComponent } from "../../layouts/store/LayoutSlice";
import { RootState } from "../../pages/store/store";
export * from "./store/index";

function Profile() {
  const dispatch = useDispatch();

  const component = useSelector((state: RootState) => state?.layout?.component);

  useEffect(() => {
    dispatch(loadComponent("my-profile"));
  }, []);

  return <WrapperPage components={ProfileMapping} index={component} />;
}

export default Profile;
