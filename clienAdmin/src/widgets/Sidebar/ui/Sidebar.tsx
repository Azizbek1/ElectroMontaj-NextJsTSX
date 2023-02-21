import React from "react";
import {
  StockOutlined,
  TeamOutlined,
  BarChartOutlined,
  AreaChartOutlined,
  FundOutlined,
  CommentOutlined,
  FundViewOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

import SidebarStyled from "./Style";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  danger?: boolean | null,
  children?: MenuItem[],
  theme?: "light" | "dark"
): MenuItem {
  return {
    label,
    key,
    icon,
    danger,
    children,
    theme,
  } as MenuItem;
}

export const items: MenuProps["items"] = [
  getItem("Главная страница", 1, <TeamOutlined />, null, [
    getItem("Слидер", "/slider", <FundViewOutlined />),
    getItem("Меню", "/menu", <TableOutlined />),
  ]),
  getItem("О компани", 2, <StockOutlined />),
  getItem("Услуги", 3, <BarChartOutlined />),
  getItem("Новости", 4, <AreaChartOutlined />),
  getItem("Отзывы", 5, <CommentOutlined />),
  getItem("Контакты", 6, <FundOutlined />),
];

export function Sidebar() {
  return (
    <SidebarStyled>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </SidebarStyled>
  );
}
