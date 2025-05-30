import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { loadComponent } from "../../layouts/store/LayoutSlice";
import { Box, Typography } from "@mui/material";
import MuiButton from "../../components/MuiButton/MuiButton";
import MuiCard from "../../components/MuiCard/MuiCard";
import { loadComponent } from "../../layouts/store/LayoutSlice";
import {
  completeTask,
  getTodos,
  inCompleteTask,
  removeTask,
  resetDeleteTaskData,
  resetTickMarkData,
  updateState,
} from "./store/TodoSlice";
import { useAppDispatch } from "../../components/AppDispatch/useAppDispatch";
import { RootState } from "../../pages/store/store";
import Loader from "../../components/Loader/Loader";

function ToDo() {
  const toDo = useSelector((state: RootState) => state.toDo.todoList as Task[]);
  const loading = useSelector((state: RootState) => state.toDo.loading);
  const removeItem = useSelector((state: RootState) => state.toDo.removeItem);

  const completeItem = useSelector(
    (state: RootState) => state.toDo.completeItem
  );
  const inCompleteItem = useSelector(
    (state: RootState) => state.toDo.inCompleteItem
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  useEffect(() => {
    if (removeItem?.length > 0) {
      dispatch(resetDeleteTaskData());
      dispatch(getTodos());
    }
  }, [removeItem]);

  useEffect(() => {
    if (
      Object.keys(completeItem).length > 0 ||
      Object.keys(inCompleteItem).length > 0
    ) {
      dispatch(resetTickMarkData());
      dispatch(getTodos());
    }
  }, [completeItem, inCompleteItem]);
  console.log("employeeList=", toDo);
  return (
    <Box className="toDo-task">
      {loading && <Loader />}
      <MuiButton
        label={"Add Task"}
        handleClick={() => {
          dispatch(loadComponent("add-task"));
        }}
      />
      <Typography className="my-tasks"> My Tasks: </Typography>
      <Box className="task-list">
        {toDo.map((taskItem) => (
          <MuiCard
            key={taskItem.id}
            title={taskItem.title}
            subHeading1="Description"
            subHeading2="Completion Status"
            cardActions={true}
            subPara1={taskItem.description}
            subPara2={taskItem.completed ? "Completed" : "Incomplete"}
            handleUpdate={() => {
              dispatch(updateState(taskItem));
              dispatch(loadComponent("update-task"));
            }}
            handleDelete={() => {
              dispatch(removeTask({ id: taskItem?.id }));
            }}
            clickCompletionStatusIcon={() => {
              if (!taskItem?.completed) {
                dispatch(completeTask({ id: taskItem?.id }));
              } else {
                dispatch(inCompleteTask({ id: taskItem?.id }));
              }
              console.log("hi hello");
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ToDo;

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};
