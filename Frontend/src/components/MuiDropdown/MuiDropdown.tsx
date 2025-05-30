import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./Styles.scss";

// ✅ Export this for use in parent component
export interface DropdownOption {
  label: string;
  value: any;
}

interface MuiDropdownProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: DropdownOption[];
}

export default function MuiDropdown({
  label,
  value,
  onChange,
  options,
}: MuiDropdownProps) {
  return (
    <Box className="mui-dropdown">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={onChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
