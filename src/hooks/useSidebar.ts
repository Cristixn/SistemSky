// src/hooks/useSidebar.ts

import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSidebar = (open?: boolean) => {
    const willOpen = open !== undefined ? open : !isSidebarOpen;

    // Cerrar submenús al colapsar el sidebar
    if (!willOpen) {
      setOpenSubMenu(null);
    }

    setSidebarOpen(willOpen);
  };

  const toggleSubMenu = (menu: string) => {
    // Solo permitir abrir submenús si el sidebar está abierto
    if (!isSidebarOpen && openSubMenu !== menu) return;

    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  };

  return {
    isSidebarOpen,
    openSubMenu,
    toggleSidebar,
    toggleSubMenu,
  };
};
