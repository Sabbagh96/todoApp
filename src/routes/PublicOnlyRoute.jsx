import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import React from "react";

const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }
  return children;
};

export default PublicOnlyRoute;
