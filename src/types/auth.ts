// src/types/auth.ts

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: string;
  // Agrega más campos según necesites
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
