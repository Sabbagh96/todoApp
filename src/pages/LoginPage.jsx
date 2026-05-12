import AppNav from "../components/AppNav";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const pageClasses =
    theme === "dark"
      ? "min-h-screen bg-slate-950 text-white"
      : "min-h-screen bg-slate-100 text-slate-950";

  const cardClasses =
    theme === "dark"
      ? "w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      : "w-full max-w-2xl rounded-3xl border border-slate-300 bg-white p-8 shadow-2xl";
  function handleUserLogin() {
    login();
    navigate("/profile");
  }
  function handleAdminLogin() {
    login("admin");
    navigate("/admin");
  }
  return (
    <main className={pageClasses}>
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-10">
        <div className={cardClasses}>
          <AppNav />

          <p className="mb-3 text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
            Authentication
          </p>

          <h1 className="text-center text-4xl font-bold md:text-6xl">
            Login Page
          </h1>
          <p className="mt-4 text-center text-base text-slate-300 md:text-lg">
            Choose how you want to log in.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleUserLogin}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Login as User
            </button>

            <button
              onClick={handleAdminLogin}
            >
              Login as Admin
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
