import React from "react";
import { CircularProgress, Dialog } from "@mui/material";
import "./Styles.scss";

const Loader: React.FC<{ open?: boolean }> = ({ open = true }) => {
  return (
    <Dialog className="loader-dialog" open={open}>
      <CircularProgress color="primary" />
    </Dialog>
  );
};

export default Loader;
