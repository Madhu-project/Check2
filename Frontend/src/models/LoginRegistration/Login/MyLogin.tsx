import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiTextfield from "../../../components/MuiTextfield/MuiTextfield";
import { Box, Typography } from "@mui/material";
import MuiButton from "../../../components/MuiButton/MuiButton";
import { useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import { setUserLoggedIn } from "./store/LoginSlice";
import "./Styles.scss";
import MuiLink from "../../../components/MuiLink/MuiLink";

const MyLogin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box className="login-container">
      <MuiLink
        label={"Register?"}
        handleClick={() => {
          navigate("/register");
        }}
      />
      <Box className="login">
        <Box>
          <Box className="login-field">
            <Typography>User Name</Typography>
            <MuiTextfield
              label="Username"
              value={userName}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
              }}
            />
          </Box>
          <Box className="login-field">
            <Typography>Password</Typography>
            <MuiTextfield
              label="Password"
              value={password}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </Box>
        </Box>
        <Box className="login-button">
          <MuiButton
            label="Submit"
            handleClick={() => {
              dispatch(setUserLoggedIn(true));
              navigate("/toDo");
              // navigate("/users");
            }}
            buttonSize="large"
            startIcon={<LoginIcon />}
            disabled={userName === "" || password === ""}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MyLogin;
