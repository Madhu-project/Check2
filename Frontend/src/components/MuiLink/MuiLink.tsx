/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Link from "@mui/material/Link";

interface linkProps {
  label: string;
  handleClick?: () => void;
  // Add other props here as needed
}

export default function MuiLink({ label, handleClick }: linkProps) {
  return (
    <Link component="button" variant="body2" onClick={handleClick}>
      {label}
    </Link>
  );
}
