// src/components/config/sidebarConfig.ts

export interface SidebarItemType {
  title: string;
  icon: string;
  path?: string;
  subItems?: SidebarItemType[];
  permission?: string; // Nuevo: para control de acceso
}

export const SidebarConfig: SidebarItemType[] = [
  {
    title: "Ventas",
    icon: "bi-cart-fill",
    path: "/ventas",
  },
  {
    title: "Cuentas por Pagar",
    icon: "bi-credit-card-fill",
    path: "/cuentas-por-pagar",
  },
  {
    title: "Cuentas por Cobrar",
    icon: "bi-wallet-fill",
    path: "/cuentas-por-cobrar",
  },
  {
    title: "Inventario",
    icon: "bi-box-fill",
    subItems: [
      {
        title: "Producto",
        icon: "bi-box",
        path: "/Inventario/producto",
      },
    ],
  },
  {
    title: "Activos Fijos",
    icon: "bi-building",
  },
  {
    title: "Bancos",
    icon: "bi-bank",
    subItems: [
      {
        title: "Cuentas Bancarias",
        icon: "bi-wallet2",
        path: "/bancos/cuentas-bancarias",
      },
    ],
  },
  {
    title: "Contabilidad",
    icon: "bi-calculator",
    subItems: [
      {
        title: "Plan de Cuentas",
        icon: "bi-list-check",
        path: "/contabilidad/plan-de-cuentas",
      },
    ],
  },
  {
    title: "Impuestos",
    icon: "bi-cash-coin",
    path: "/impuestos",
  },
  {
    title: "Administración",
    icon: "bi-gear",
    subItems: [
      {
        title: "Usuarios",
        icon: "bi-people",
        path: "/administracion/usuarios",
      },
      {
        title: "Cliente/Proveedor",
        icon: "bi-person-lines-fill",
        path: "/administracion/cliente-proveedor",
      },
    ],
  },
];

// Función helper para obtener rutas válidas
export const getValidRoutes = (config: SidebarItemType[]): string[] => {
  return config.flatMap((item) => [
    ...(item.path ? [item.path] : []),
    ...(item.subItems ? getValidRoutes(item.subItems) : []),
  ]);
};
