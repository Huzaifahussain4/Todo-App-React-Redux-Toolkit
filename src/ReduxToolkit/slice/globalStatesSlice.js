import { createSlice } from "@reduxjs/toolkit";

export const GlobalStatesSlice = createSlice({
  name: "GlobalStatesSlice",
  initialState: {
    userFormDetails: [],
    todoList: [],
  },
  reducers: {
    userFormDetailsReducer: (state, action) => {
      state.userFormDetails = action.payload;
    },
    todoListReducer: (state, action) => {
      state.todoList = action.payload;
    },
    deleteTask: (state, action) => {
      let newArray = state.todoList.filter(
        (item, index) => index !== action.payload
      );
      state.todoList = newArray;
    },
    editTask: (state, action) => {
      const { index, editedTask } = action.payload;
      state.todoList[index].todoData = editedTask;
    },
  },
});

export const { userFormDetailsReducer, todoListReducer, deleteTask, editTask } =
  GlobalStatesSlice.actions;

export const GlobalStatesData = (state) => state.parentReducer;
export default GlobalStatesSlice.reducer;
