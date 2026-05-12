function TaskItem({ task, handleDeleteTask, handleToggleTaskCompleted }) {
  return (
    <li className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-4">
      <span className={task.completed ? "line-through text-slate-400" : ""}>
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gradient-to-tr from-emerald-200 via-emerald-400 to-emerald-600 "
          onClick={() => handleToggleTaskCompleted(task.id)}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gradient-to-tr from-red-200 via-red-400 to-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
