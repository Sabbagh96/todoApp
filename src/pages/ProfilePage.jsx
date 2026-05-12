import AppNav from "../components/AppNav";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const pageClasses =
    theme === "dark"
      ? "min-h-screen bg-slate-950 text-white"
      : "min-h-screen bg-slate-100 text-slate-950";

  const cardClasses =
    theme === "dark"
      ? "w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      : "w-full max-w-2xl rounded-3xl border border-slate-300 bg-white p-8 shadow-2xl";
  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }
  return (
    <main className={pageClasses}>
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-10">
        <div className={cardClasses}>
          <AppNav />

          <p className="mb-3 text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
            Protected Page
          </p>

          <h1 className="text-center text-4xl font-bold md:text-6xl">
            Profile Page
          </h1>

          <p className="mt-4 text-center text-base text-slate-300 md:text-lg">
            Welcome, {user?.name}. Your role is {user?.role}.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
