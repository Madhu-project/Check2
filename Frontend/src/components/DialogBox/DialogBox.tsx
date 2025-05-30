import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type props = {
  closeIconNotRequired?: boolean;
  message: string;
  buttonLabel: string;
  handleClick: () => void;
  open: boolean;
  className?: string;
};

export default function DialogBox({
  closeIconNotRequired = false,
  message,
  buttonLabel,
  handleClick,
  open,
  className,
}: props) {
  const handleClose = () => {
    handleClick();
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        className={className}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <ErrorIcon />
        </DialogTitle>
        {!closeIconNotRequired && (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        )}
        <DialogContent dividers>
          <Typography gutterBottom>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{buttonLabel}</Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
