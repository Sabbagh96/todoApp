import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskName: "",
  filter: "all",
  tasks: [],
};
const tasksSlice = createSlice({
  name: "tasks",

  initialState,
  reducers: {
    setTaskName(state, action) {
      state.taskName = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addTask(state, action) {
      const newTask = {
        id: action.payload.id,
        title: action.payload.title.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      state.tasks.push(newTask);
      state.taskName = "";
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompleted(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (!task) return;
      task.completed = !task.completed;
    },
  },
});
export const {
  setFilter,
  setTaskName,
  addTask,
  deleteTask,
  toggleTaskCompleted,
} = tasksSlice.actions;

export default tasksSlice.reducer;
