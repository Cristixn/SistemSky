// src/components/Auth/ProtectedRoute.tsx

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  roles?: string[];
  redirectTo?: string;
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  roles = [],
  redirectTo = "/login",
  children,
}) => {
  const { isAuthenticated, user, hasRole } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (roles.length > 0 && (!user || !hasRole(roles[0]))) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
