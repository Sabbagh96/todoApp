import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AppNav() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navLinkClassName = ({ isActive }) =>
    isActive
      ? "rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950"
      : "rounded-lg bg-slate-800 px-4 py-2 font-semibold text-white transition hover:bg-slate-700";

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="mb-6 flex justify-center gap-3">
      <NavLink to="/" className={navLinkClassName} end>
        Home
      </NavLink>
      <NavLink to="/api-tasks" className={navLinkClassName}>
        API Tasks
      </NavLink>
      {!isAuthenticated ? (
        <NavLink to="/login" className={navLinkClassName}>
          Login
        </NavLink>
      ) : (
        <>
          <NavLink to="/profile" className={navLinkClassName}>
            Profile
          </NavLink>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-400"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default AppNav;
