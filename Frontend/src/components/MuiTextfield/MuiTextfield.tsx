import * as React from "react";
import TextField from "@mui/material/TextField";
import "./Styles.scss";

type MuiTextfieldProps = {
  label: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  className?: string;
};

const MuiTextfield: React.FC<MuiTextfieldProps> = ({
  label,
  value,
  handleChange,
  error = false,
  helperText = "",
  className = "",
}) => {
  return (
    <TextField
      className={`mui-textfield ${className}`}
      label={label}
      variant="filled"
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
    />
  );
};

export default MuiTextfield;
