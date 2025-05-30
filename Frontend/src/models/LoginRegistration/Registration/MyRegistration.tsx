import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import MuiTextfield from "../../../components/MuiTextfield/MuiTextfield";
import MuiButton from "../../../components/MuiButton/MuiButton";
import MuiLink from "../../../components/MuiLink/MuiLink";
import "./Styles.scss";

function MyRegistration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box className="register">
      <MuiLink
        label={"Login?"}
        handleClick={() => {
          navigate("/");
        }}
      />
      <Box>
        <Box>
          <Box className="register-field">
            <Typography>Name</Typography>
            <MuiTextfield
              label={"Name"}
              value={name}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
          </Box>
          <Box className="register-field">
            <Typography>User Name</Typography>
            <MuiTextfield
              label={"User Name"}
              value={userName}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
              }}
            />
          </Box>
          <Box className="register-field">
            <Typography>Email</Typography>
            <MuiTextfield
              label={"Email"}
              value={email}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </Box>
          <Box className="register-field">
            <Typography>Password</Typography>
            <MuiTextfield
              label={"Password"}
              value={password}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </Box>
        </Box>
        <Box className="register-button">
          <MuiButton
            label={"Submit"}
            handleClick={() => {
              navigate("/");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MyRegistration;
