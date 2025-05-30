import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { loadComponent } from "../layouts/store/LayoutSlice";
import { get } from "lodash";
import { RootState } from "./store/store";

interface ComponentType {
  id: any;
  child: React.ReactNode;
  isBack?: boolean;
  // isBackHistory?: boolean;
  // customBack?: () => void;
}

interface WrapperProps {
  components?: ComponentType[];
  index?: any;
}
function WrapperPage({ components = [], index }: WrapperProps) {
  const dispatch = useDispatch();
  const previousPage = useSelector(
    (state: RootState) => state?.layout?.pageHistory?.previousPage
  );

  //  const { components, index } = props;
  const getcomponent = components.filter((item) => item.id === index);
  console.log(
    "inside wrapper:",
    getcomponent,
    "components=",
    components,
    "index=",
    index
  );
  const handleBack = () => {
    console.log("hi");
    dispatch(loadComponent(previousPage));
  };
  return (
    <>
      {getcomponent.map((component) => (
        <>
          {component?.isBack && (
            <ArrowBackIcon
              onClick={handleBack}
              className={`back-arrow ${component.id}`}
            />
          )}
          {/* {backButton(component.isBackHistory, component.customBack)} */}
          <div key={component.id}>{component.child}</div>
        </>
      ))}
    </>
  );
}

export default WrapperPage;
