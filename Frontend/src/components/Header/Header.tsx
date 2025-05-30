import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MuiLink from "../MuiLink/MuiLink";
import { RootState } from "../../pages/store/store";
import "./Styles.scss";

type props = {
  isUserLoggedIn: boolean;
};

function Header({ isUserLoggedIn = false }: props) {
  const component = useSelector((state: RootState) => state?.layout?.component);

  const navigate = useNavigate();
  return (
    <Box className="header">
      <Box className={`header-container ${isUserLoggedIn && "logged-header"}`}>
        <Typography className="title">User Management</Typography>
        {isUserLoggedIn && (
          <Box className="menu">
            <Typography
              onClick={() => {
                navigate("/users");
              }}
            >
              USERS
            </Typography>
            <Typography
              onClick={() => {
                navigate("/");
              }}
            >
              LOG OUT
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;
