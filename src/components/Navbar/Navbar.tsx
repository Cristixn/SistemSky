//src/components/Navbar/Navbar.tsx

import { Link, useLocation } from "react-router-dom";
import "@/styles/Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = true; // Reemplazar con estado global Redux

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link className="nav-link text-white" to="/">
              Inicio
            </Link>
          </li>
          {isAuthenticated && (
            <>
              <li
                className={`nav-item ${
                  location.pathname === "/ventas" ? "active" : ""
                }`}
              >
                <Link className="nav-link text-white" to="/ventas">
                  Ventas
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/usuarios" ? "active" : ""
                }`}
              >
                <Link className="nav-link text-white" to="/usuarios">
                  Usuarios
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
