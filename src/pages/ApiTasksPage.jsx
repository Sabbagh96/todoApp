import { useEffect, useState } from "react";
import AppNav from "../components/AppNav";
import { useTheme } from "../context/ThemeContext";

function ApiTasksPage() {
  const { theme } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pageClasses =
    theme === "dark"
      ? "min-h-screen bg-slate-950 text-white"
      : "min-h-screen bg-slate-100 text-slate-950";

  const cardClasses =
    theme === "dark"
      ? "w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      : "w-full max-w-3xl rounded-3xl border border-slate-300 bg-white p-8 shadow-2xl";

  useEffect(() => {
    async function getTasks() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getTasks();
  }, []);

  return (
    <main className={pageClasses}>
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-10">
        <div className={cardClasses}>
          <AppNav />

          <p className="mb-3 text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
            Data Fetching
          </p>

          <h1 className="text-center text-4xl font-bold md:text-5xl">
            API Tasks Page
          </h1>

          <p className="mt-4 text-center text-base text-slate-300 md:text-lg">
            These tasks are coming from an API using fetch.
          </p>

          {loading ? (
            <p className="mt-8 text-center text-slate-300">Loading tasks...</p>
          ) : error ? (
            <p className="mt-8 text-center text-red-400">{error}</p>
          ) : (
            <ul className="mt-8 space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-4"
                >
                  <p
                    className={
                      task.completed ? "line-through text-slate-400" : ""
                    }
                  >
                    {task.title}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default ApiTasksPage;
