// src/components/config/routesConfig.ts
import { SidebarConfig } from "./sidebarConfig";

export const getValidRoutes = (): string[] => {
  const extractRoutes = (items: typeof SidebarConfig): string[] => {
    return items.flatMap((item) => {
      const routes = [];
      if (item.path) routes.push(item.path);
      if (item.subItems) routes.push(...extractRoutes(item.subItems));
      return routes;
    });
  };

  return ["/", ...extractRoutes(SidebarConfig)];
};
