// src/router/AppRouter.tsx

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/Auth/ProtectedRoute";
import { MainLayout } from "@/layouts/MainLayout";
import { Login } from "@/pages/Login"; // Corregir importación
import { Unauthorized } from "@/pages/Unauthorized"; // Añadir importación

// Función de pre-carga mejorada
const preloadLazy = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  const Component = lazy(factory);
  factory(); // Inicia la carga inmediatamente
  return Component;
};

// Componentes con pre-carga
const Dashboard = preloadLazy(() => import("@/pages/Dashboard"));
const Ventas = preloadLazy(() => import("@/modules/Ventas/Ventas"));
const CuentasPorPagar = preloadLazy(
  () => import("@/modules/CuentasPorPagar/CuentasPorPagar")
);
const CuentasPorCobrar = preloadLazy(
  () => import("@/modules/CuentasPorCobrar/CuentasPorCobrar")
);
const Inventario = preloadLazy(() => import("@/modules/Inventario/Inventario"));
const UnderConstruction = preloadLazy(
  () => import("@/pages/UnderConstruction")
);

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          Cargando...
        </div>
      }
    >
      <Routes>
        {/* Ruta pública para login */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="cuentas-por-pagar" element={<CuentasPorPagar />} />
            <Route path="cuentas-por-cobrar" element={<CuentasPorCobrar />} />
            <Route path="inventario" element={<Inventario />} />
          </Route>
        </Route>

        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
