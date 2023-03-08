import { ColumnsType } from "antd/lib/table/interface";
import { IMenuPropsColumns } from "./columns.props";


export const Userscolumns: ColumnsType<IMenuPropsColumns> = [
  {
    title: "Имя",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "URL адрес",
    key: "url",
    dataIndex: "url",
  },
  {
    title: "Иконка",
    key: "icon",
    dataIndex: "icon",
  },
];
