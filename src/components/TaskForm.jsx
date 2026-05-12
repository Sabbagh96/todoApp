function TaskForm({ taskName, onTaskNameChange, onAddTask, inputRef }) {
  return (
    <form onSubmit={onAddTask} className="mt-10">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Task Name
      </label>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          ref={inputRef}
          type="text"
          value={taskName}
          onChange={onTaskNameChange}
          placeholder="Write your task here"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
        />

        <button
          type="submit"
          className="rounded-xl bg-cyan-500 w-36 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Add Task
        </button>
      </div>

      <p className="mt-3 text-sm text-slate-400">
        Current Task:
        <span className="ml-2 text-cyan-300">{taskName || "No task yet"}</span>
      </p>
    </form>
  );
}

export default TaskForm;
