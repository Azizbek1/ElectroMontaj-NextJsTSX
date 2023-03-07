import { Badge, Switch, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IMenuPropsColumns } from "./columns.props";


// ======= DataUsersColumns  =======
export const Userscolumns: ColumnsType<IMenuPropsColumns> = [
  {
    title: "ID раками",
    key: "userId",
    dataIndex: "userId",
    render: (text) => <a href="javascirtip(void):001">{text}</a>,
  },
  {
    title: "Телефон раками",
    key: "number",
    dataIndex: "number",
    render: (text) => (
      <Text copyable strong>
        {text}
      </Text>
    ),
  },
  {
    title: "Руйхатдан уткан",
    key: "datareg",
    dataIndex: "dataReg",
  },
  {
    title: "Статус",
    key: "status",
    dataIndex: "status",
    render: (text: string, record) => (
      <div>
        {text === "active" ? (
          <span>
            <Badge status="success" /> Фаол
          </span>
        ) : (
          <span>
            <Badge size="small" status="error" /> Фаол эмас
          </span>
        )}
      </div>
    ),
    filters: [
      {
        text: "active",
        value: "active",
      },
      {
        text: "notactive",
        value: "notActive",
      },
    ],
    onFilter: (value: any, record) => record.status.startsWith(value),
  },
];

// ======= DataBuyurtmalarColumns  =======
export const BuyurtmalarColums: any = [
  {
    title: "Фойдаланувчи ID раками",
    key: "userId",
    dataIndex: "userId",
  },
  {
    title: "Суров ID раками",
    key: "surovId",
    dataIndex: "surovId",
  },
  {
    title: "Тулов вакти",
    key: "payTime",
    dataIndex: "payTime",
  },
  {
    title: "Тулов тури",
    key: "payType",
    dataIndex: "payType",
  },
  {
    title: "Раками",
    key: "numberItem",
    dataIndex: "numberItem",
  },
  {
    title: "Суммаси",
    key: "summa",
    dataIndex: "summa",
  },
  {
    title: "Статуси",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Текширилди",
    key: "examination",
    dataIndex: "examination",
  },
  {
    title: "Админ томондан утказилмаган",
    key: "adminIsSuccess",
    dataIndex: "adminIsSuccess",
  },
  {
    title: "Тулов тизими",
    key: "payService",
    dataIndex: "payService",
  },
];
