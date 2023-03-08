import { ColumnsType } from "antd/lib/table/interface";
import { IMenuPropsColumns } from "./columns.props";
import { Button, Space } from "antd";
import { MdCancel, MdOutlineModeEditOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { getMenuUrl } from "src/api/configs/api.config";
import { MenuUrlRoute } from "src/utils";
import ColomunsStyled from "./Style";
import { useMutation } from "react-query";
import { MenuService } from "src/services/menu/menu.service";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { toastr } from "react-redux-toastr";

// const { mutateAsync: deleteAsync } = useMutation(
//   "delete menu",
//   (genreId: string) => MenuService.delete(genreId),
//   {
//     onError(error) {
//       toastError(error, "Ошибка при удаление");
//     },
//     onSuccess() {
//       toastr.success("Удалился", "успешно удалён");
//     },
//   }
// );
// const HandlaDelete = (id: string) => {
//   if (prompt("Точно хотите удалить ?")) {
//     deleteAsync(id);
//   } else {
//     return false;
//   }
// };
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
    render: (id) => {
      return (
        <>
          <ColomunsStyled>
            <Link className="warning__edit" to={`${MenuUrlRoute}/${id}`}>
              <MdOutlineModeEditOutline />
            </Link>
            <Button type="primary" danger>
              <MdCancel />
            </Button>
          </ColomunsStyled>
        </>
      );
    },
  },
];
