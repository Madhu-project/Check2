import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiCard from "../../components/MuiCard/MuiCard";
import { getUsers } from "./store/UserSlice";
import { useAppDispatch } from "../../components/AppDispatch/useAppDispatch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/store/store";
import Loader from "../../components/Loader/Loader";
import DialogBox from "../../components/DialogBox/DialogBox";
import { Box, Typography } from "@mui/material";
import MuiTextfield from "../../components/MuiTextfield/MuiTextfield";
import MuiButton from "../../components/MuiButton/MuiButton";
import "./Styles.scss";

function ViewUsers() {
  const userList = useSelector(
    (state: RootState) => state.userManagement.usersList as User[]
  );
  const loading = useSelector(
    (state: RootState) => state.userManagement.loading
  );

  const errorCode = useSelector(
    (state: RootState) => state.userManagement.error?.errorCode
  );
  const errorMessage =
    useSelector(
      (state: RootState) => state.userManagement.error?.errorMessage
    ) || "";

  const [openError, setOpenError] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (errorCode === "USERS_01") {
      setOpenError(true);
    }
  }, [errorCode]);

  useEffect(() => {
    setFilteredUsers(userList); // Initialize filtered list when data loads
  }, [userList]);

  const handleSearch = () => {
    const lowercasedSearch = search.toLowerCase();
    const results = userList.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercasedSearch) ||
        user.emailId.toLowerCase().includes(lowercasedSearch) ||
        user.companyName.toLowerCase().includes(lowercasedSearch) ||
        user.employeeLocation.toLowerCase().includes(lowercasedSearch) ||
        user.employeeId.toString().includes(lowercasedSearch)
    );
    setFilteredUsers(results);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredUsers(userList);
    }
  }, [search]);

  return (
    <Box className="user">
      <ArrowBackIcon
        onClick={() => {
          navigate("/toDo");
        }}
        className={`back-arrow `}
      />
      <Box className="view-user">
        {loading && <Loader />}

        {openError && (
          <DialogBox
            className="view-user-dialog-box"
            open
            closeIconNotRequired
            message={errorMessage}
            buttonLabel={"Log Out"}
            handleClick={() => {
              navigate("/");
            }}
          />
        )}
        <Box className="search-bar">
          <Typography className="filter">
            Filter the users by Search:{" "}
          </Typography>
          <Box className="result">
            <MuiTextfield
              label="Search"
              value={search}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
              }}
            />
            <MuiButton
              disabled={search === ""}
              label="Fetch Data"
              handleClick={handleSearch}
            />
          </Box>
        </Box>
        <Box className="user-list">
          {filteredUsers?.length > 0 ? (
            filteredUsers.map((user) => (
              <MuiCard
                key={user.employeeId}
                title={user.name}
                subHeading1="Email ID"
                subHeading2="Company Name"
                subHeading3="Employee Id"
                subHeading4="Employee Location"
                subPara1={user.emailId}
                subPara2={user.companyName}
                subPara3={`${user.employeeId}`}
                subPara4={user.employeeLocation}
              />
            ))
          ) : (
            <Typography className="no-result">No users found</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ViewUsers;

type User = {
  employeeId: number;
  name: string;
  emailId: string;
  companyName: string;
  employeeLocation: string;
};
