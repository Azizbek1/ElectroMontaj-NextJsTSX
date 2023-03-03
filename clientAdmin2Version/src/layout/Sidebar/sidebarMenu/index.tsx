import * as React from "react";
import {
  StockOutlined,
  TeamOutlined,
  BarChartOutlined,
  AreaChartOutlined,
  FundOutlined,
  CommentOutlined,
  FundViewOutlined,
  TableOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons";
import { MenuProps, Tooltip } from "antd";

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
<Tooltip></Tooltip>;
export const items: MenuProps["items"] = [
  getItem("Главная страница", 1, <TeamOutlined />, null, [
    getItem("главная страница", "/", <AlignCenterOutlined />),
    getItem("слидер", "/slider", <FundViewOutlined />),
    getItem("меню", "/menus", <TableOutlined />),
  ]),
  getItem("о копмании", 2, <StockOutlined />),
  getItem("услуги", 3, <BarChartOutlined />),
  getItem("новости", 4, <AreaChartOutlined />),
  getItem("отзывы", 5, <CommentOutlined />),
  getItem("контакты", 6, <FundOutlined />),
];
