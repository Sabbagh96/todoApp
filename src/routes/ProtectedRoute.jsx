import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

import React from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
