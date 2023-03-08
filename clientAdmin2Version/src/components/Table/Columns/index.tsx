import { ColumnsType } from "antd/lib/table/interface";
import { IMenuPropsColumns } from "./columns.props";
import { Button, Space } from "antd";
import { MdCancel, MdOutlineModeEditOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { getMenuUrl } from "src/api/configs/api.config";
import { MenuUrlRoute } from "src/utils";
import ColomunsStyled from './Style'
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
  {
    title: "Действия",
    key: "id",
    dataIndex: "id",
    render: (id) => (
      <>
        <ColomunsStyled>
          <Link  className="warning__edit" to={`${MenuUrlRoute}/${id}`}>
            <MdOutlineModeEditOutline />
          </Link>
          <Link  className="warning__delete" to={`${MenuUrlRoute}/${id}`}>
             <MdCancel />
          </Link>
        </ColomunsStyled>
      </>
    ),
  },
];
