// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/auth";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  permissions?: string[];
}

// Recuperar estado de localStorage si existe
const loadInitialState = (): AuthState => {
  const storedAuth = localStorage.getItem("auth");
  return storedAuth
    ? JSON.parse(storedAuth)
    : {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
};

const initialState: AuthState = loadInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;

      // Persistir en localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: action.payload,
          loading: false,
          error: null,
        })
      );
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // Limpiar localStorage
      localStorage.removeItem("auth");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
