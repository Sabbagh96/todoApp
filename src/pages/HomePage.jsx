import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppNav from "../components/AppNav";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import {
  addTask,
  deleteTask,
  setTaskName,
  toggleTaskCompleted,
  setFilter,
} from "../features/tasks/tasksSlice";

function HomePage() {
  const taskInputRef = useRef(null);
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { taskName, tasks, filter } = useSelector((state) => state.tasks);
  const tasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const pendingTasksCount = tasks.filter((task) => !task.completed).length;
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });
  const pageClasses =
    theme === "dark"
      ? "min-h-screen bg-slate-950 text-white"
      : "min-h-screen bg-slate-100 text-slate-950";

  const cardClasses =
    theme === "dark"
      ? "w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      : "w-full max-w-2xl rounded-3xl border border-slate-300 bg-white p-8 shadow-2xl";

  useEffect(() => {
    document.title = `Tasks: ${tasksCount}`;
  }, [tasksCount]);

  function handleTaskNameChange(event) {
    dispatch(setTaskName(event.target.value));
  }

  function handleAddTask(event) {
    event.preventDefault();

    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskName,
    };

    dispatch(addTask(newTask));
    taskInputRef.current.focus();
  }

  function handleDeleteTask(taskId) {
    dispatch(deleteTask(taskId));
  }
  function handleToggleTaskCompleted(taskId) {
    dispatch(toggleTaskCompleted(taskId));
  }

  return (
    <main className={pageClasses}>
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-2">
        <div className={cardClasses}>
          <h1 className="text-center text-2xl mb-4 justify-start  font-bold md:text-4xl">
            TaskFlow Dashboard
          </h1>
          <AppNav />

          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          <div className="mt-8 grid gap-4 text-center md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 ">
              <p className="text-sm text-slate-400 ">All Tasks</p>
              <h2 className="mt-2 text-4xl font-bold text-cyan-300">
                {tasksCount}
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 ">
              <p className="text-sm text-slate-400 ">Completed</p>
              <h2 className="mt-2 text-4xl font-bold text-emerald-300">
                {completedTasksCount}
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 ">
              <p className="text-sm text-slate-400 ">Pending</p>
              <h2 className="mt-2 text-4xl font-bold text-amber-300">
                {pendingTasksCount}
              </h2>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => dispatch(setFilter("all"))}
              className={
                filter === "all"
                  ? "rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950"
                  : "rounded-xl bg-slate-700 px-4 py-2 font-semibold text-white"
              }
            >
              All
            </button>
            <button
              onClick={() => dispatch(setFilter("done"))}
              className={
                filter === "done"
                  ? "rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-white"
                  : "rounded-xl bg-slate-700 px-4 py-2 font-semibold text-white"
              }
            >
              Done
            </button>
            <button
              onClick={() => dispatch(setFilter("pending"))}
              className={
                filter === "pending"
                  ? "rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-white"
                  : "rounded-xl bg-slate-700 px-4 py-2 font-semibold text-white"
              }
            >
              Pending
            </button>
          </div>
          <TaskForm
            taskName={taskName}
            onTaskNameChange={handleTaskNameChange}
            onAddTask={handleAddTask}
            inputRef={taskInputRef}
          />

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white">Tasks List</h3>

            {filteredTasks.length === 0 ? (
              <p className="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-800/50 p-4 text-slate-400">
                No tasks yet, Add your first task.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                    handleToggleTaskCompleted={handleToggleTaskCompleted}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
