// src/layouts/MainLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Navbar } from "@/components/Navbar/Navbar";
import UnderConstruction from "@/pages/UnderConstruction";
import Container from "react-bootstrap/Container";
import { getValidRoutes } from "@/components/config/routesConfig";
import "@/styles/MainLayout.css";

export const MainLayout = () => {
  const location = useLocation();
  const validRoutes = getValidRoutes();
  const isRouteValid = validRoutes.includes(location.pathname);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        <Navbar />
        <main className="main-content">
          <Container fluid>
            {isRouteValid ? <Outlet /> : <UnderConstruction />}
          </Container>
        </main>
      </div>
    </div>
  );
};
