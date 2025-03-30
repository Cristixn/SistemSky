import React, { useMemo } from "react";
import { SidebarConfig } from "@/components/config/sidebarConfig";
import { SidebarItem } from "./SidebarItem";
import { useSidebar } from "@/hooks/useSidebar";
import { useAuth } from "@/hooks/useAuth";

export const Sidebar = React.memo(() => {
  const { isSidebarOpen, openSubMenu, toggleSidebar, toggleSubMenu } =
    useSidebar();
  const { hasPermission } = useAuth();

  const filteredConfig = useMemo(
    () => SidebarConfig.filter((item) => hasPermission(item.permission)),
    [hasPermission, SidebarConfig]
  );

  return (
    <aside
      className={`sidebar ${isSidebarOpen ? "sidebar-expanded" : ""}`}
      onMouseEnter={() => toggleSidebar(true)}
      onMouseLeave={() => toggleSidebar(false)}
    >
      <div className="sidebar-content">
        {/* Contenido del sidebar optimizado */}
        {filteredConfig.map((item) => (
          <SidebarItem
            key={item.title}
            item={item}
            isSidebarOpen={isSidebarOpen}
            isSubMenuOpen={openSubMenu === item.title}
            onToggle={() => isSidebarOpen && toggleSubMenu(item.title)}
          />
        ))}
      </div>
    </aside>
  );
});
