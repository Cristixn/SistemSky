// src/hooks/useAuth.ts
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { loginSuccess, logout } from "@/store/slices/authSlice";
import type { User } from "@/types/auth"; // Usamos type-only import

// Definimos la estructura completa del usuario mock
interface MockUser {
  username: string;
  password: string;
  userData: User; // Aquí usamos el tipo User
}

// Datos de usuarios mock (solo para desarrollo)
const mockUsers: MockUser[] = [
  {
    username: "admin",
    password: "admin123",
    userData: {
      id: "1",
      username: "admin",
      name: "Administrador",
      email: "admin@example.com",
      role: "admin",
      permission: [],
    },
  },
  {
    username: "usuario",
    password: "usuario123",
    userData: {
      id: "2",
      username: "usuario",
      name: "Usuario Normal",
      email: "usuario@example.com",
      role: "user",
    },
  },
];

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const hasPermission = (permission?: string) => {
    if (!permission) return true; // Si no requiere permiso, permite acceso
    if (!user?.permissions) return false; // Si no hay permisos definidos

    // Implementa tu lógica de permisos aquí
    return user.permissions.includes(permission);
  };

  const login = async (credentials: { username: string; password: string }) => {
    try {
      // Simular delay de red
      await new Promise((resolve) => setTimeout(resolve, 500));

      const foundUser = mockUsers.find(
        (u) =>
          u.username === credentials.username &&
          u.password === credentials.password
      );

      if (!foundUser) {
        throw new Error("Credenciales incorrectas");
      }

      dispatch(loginSuccess(foundUser.userData));
      return foundUser.userData;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const hasRole = (role: string) => {
    return user?.role === role;
  };

  return {
    isAuthenticated,
    user,
    login,
    logout: handleLogout,
    hasRole,
    hasPermission,
  };
};
