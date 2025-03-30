// src/App.tsx

import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/App.css"; // Asegurar que los estilos están cargados
import { ErrorBoundary } from "@/components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error en la aplicación</div>}>
      <AppRouter />
    </ErrorBoundary>
  );
}
export default App;
