import * as React from "react";
import Button from "@mui/material/Button";
import { ComponentPropsWithoutRef } from "react";
import "./Styles.scss";

type props = ComponentPropsWithoutRef<typeof Button> & {
  label: string;
  handleClick: () => void;
  variant?: "text" | "outlined" | "contained"; // means only allowed types are text, outlined, contained anything other than this is not allowed
  buttonSize?: "small" | "medium" | "large" | "fullWidth"; // only these 4 types are allowed anything other than these 4 is not allowed
  // Add other props here as needed
};

export default function MuiButton({
  label,
  handleClick,
  variant = "contained",
  buttonSize = "small",
  ...rest
}: props) {
  return (
    <Button
      variant={variant}
      className={`mui-button ${buttonSize}`}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </Button>
  );
}
