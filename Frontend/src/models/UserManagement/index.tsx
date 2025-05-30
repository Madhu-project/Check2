import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WrapperPage from "../../pages/wrapperPage";

import { loadComponent } from "../../layouts/store/LayoutSlice";
import { UsersMapping } from "../../pages/mapping";
import { RootState } from "../../pages/store/store";
export * from "./store/index";

function UserManagement() {
  const dispatch = useDispatch();
  const component = useSelector((state: RootState) => state.layout.component);

  useEffect(() => {
    dispatch(loadComponent("users-list"));
  }, []);

  return <WrapperPage components={UsersMapping} index={component} />;
}

export default UserManagement;
