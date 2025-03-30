// src/components/Sidebar/SidebarItem.tsx

import { SidebarItemType } from "@/components/config/sidebarConfig";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "@/styles/SidebarItem.css";

interface SidebarItemProps {
  item: SidebarItemType;
  isSidebarOpen: boolean;
  isSubMenuOpen: boolean;
  onToggle: () => void;
}

export const SidebarItem = ({
  item,
  isSidebarOpen,
  isSubMenuOpen,
  onToggle,
}: SidebarItemProps) => {
  // Componente para items con submenú
  if (item.subItems) {
    return (
      <ListGroup.Item
        action
        as="div"
        className={`sidebar-item has-submenu ${isSubMenuOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <i className={`${item.icon} sidebar-icon`} />
        {isSidebarOpen && (
          <>
            <span className="menu-text">{item.title}</span>
            <i
              className={`menu-arrow bi bi-chevron-${
                isSubMenuOpen ? "down" : "right"
              }`}
            />
          </>
        )}
      </ListGroup.Item>
    );
  }

  // Componente para items normales (Link)
  return (
    <ListGroup.Item
      action
      as={Link}
      to={item.path || "#"}
      className="sidebar-item"
    >
      <i className={`${item.icon} sidebar-icon`} />
      {isSidebarOpen && <span className="menu-text">{item.title}</span>}
    </ListGroup.Item>
  );
};
