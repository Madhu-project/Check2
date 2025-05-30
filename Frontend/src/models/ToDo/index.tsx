import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WrapperPage from "../../pages/wrapperPage";

import { loadComponent } from "../../layouts/store/LayoutSlice";
import { TodoMapping } from "../../pages/mapping";
import { RootState } from "../../pages/store/store";
export * from "./store/index";

function Todo() {
  const dispatch = useDispatch();
  const component = useSelector((state: RootState) => state.layout.component);

  useEffect(() => {
    dispatch(loadComponent("to-do"));
  }, []);

  return <WrapperPage components={TodoMapping} index={component} />;
}

export default Todo;
