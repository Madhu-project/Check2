import { Box, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import MuiTextfield from "../../components/MuiTextfield/MuiTextfield";
import MuiButton from "../../components/MuiButton/MuiButton";
import { loadComponent } from "../../layouts/store/LayoutSlice";
import { useDispatch, useSelector } from "react-redux";
import MuiDropdown, {
  DropdownOption,
} from "../../components/MuiDropdown/MuiDropdown";
import "./Styles.scss";
import { addTask, updateTask } from "./store/TodoSlice";
import { useAppDispatch } from "../../components/AppDispatch/useAppDispatch";
import { RootState } from "../../pages/store/store";
import { get } from "lodash";

interface AddtaskProps {
  update?: boolean;
}

function AddTask({ update = false }: AddtaskProps) {
  const selectedItem = useSelector(
    (state: RootState) => state?.toDo?.updateSelect
  );
  const selectedTitle = get(selectedItem, "title", "");
  const selectedDescription = get(selectedItem, "description", "");
  const selectedCompletion = get(selectedItem, "completed", "");
  const selectedId = get(selectedItem, "id", "");

  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>(update ? selectedTitle : "");
  const [description, setDescription] = useState<string>(
    update ? selectedDescription : ""
  );
  const [completed, setCompleted] = useState<string>(
    update ? selectedCompletion : ""
  );

  const options: DropdownOption[] = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCompleted(event.target.value);
  };
  return (
    <Box className="add-task">
      <Typography className="title">
        {update ? "Update Task" : "Add Task"}
      </Typography>
      <Box className="task-details">
        <Box className="task-information">
          <Box className="task-field">
            <Typography>Title</Typography>
            <MuiTextfield
              label="Title"
              value={title}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
          </Box>
          <Box className="task-field">
            <Typography>Description</Typography>
            <MuiTextfield
              label="Description"
              value={description}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value);
              }}
            />
          </Box>
          <Box className="task-field">
            <Typography>Completed?</Typography>
            <MuiDropdown
              label="Confirm"
              value={completed}
              onChange={handleChange}
              options={options}
            />
          </Box>
        </Box>
        <Box className="task-button">
          <MuiButton
            label={update ? "Update Task" : "Add Task"}
            handleClick={() => {
              if (update) {
                dispatch(
                  updateTask({ id: selectedId, title, description, completed })
                );
              } else {
                dispatch(addTask({ title, description, completed }));
              }

              dispatch(loadComponent("to-do"));
            }}
            buttonSize="medium"
            disabled={title === "" || description === "" || completed === ""}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AddTask;
