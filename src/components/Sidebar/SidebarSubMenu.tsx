// src/components/Sidebar/SidebarSubMenu.tsx

import { SidebarItem } from "../config/sidebarConfig";
import { SidebarItem as SidebarItemComponent } from "./SidebarItem";

interface SidebarSubMenuProps {
  subItems: SidebarItem[];
  isSidebarOpen: boolean;
}

export const SidebarSubMenu = ({
  subItems,
  isSidebarOpen,
}: SidebarSubMenuProps) => {
  return (
    <ul className="nav flex-column">
      {subItems.map((subItem) => (
        <SidebarItemComponent
          key={subItem.title}
          item={subItem}
          isSidebarOpen={isSidebarOpen}
          isSubItem
        />
      ))}
    </ul>
  );
};
