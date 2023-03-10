import { useState } from "react";
import { Button, Row, Table } from "antd";
import MenuPageStyled, { StyledIconColums } from "./Style";
import Col from "antd/lib/grid/col";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IMenuAdd } from "./Menu.props";
import { MenuService } from "src/services/menu/menu.service";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { MenuValidation, MenuValidationMenu } from "src/utils/validationsForms";
import { useDebounce } from "src/hooks/useDebounce";
import { Link } from "react-router-dom";
import { MdCancel, MdOutlineModeEditOutline } from "react-icons/md";
import { MenuUrlRoute } from "src/utils";
import { IMenuPropsColumns } from "src/components/Table/Columns/columns.props";
import { ColumnsType } from "antd/lib/table/interface";

function MenuPage() {
  const { handleSubmit, control, reset } = useForm<IMenuAdd>();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  // Api cols
  const { errors } = useFormState({
    control,
  });

  const queryData = useQuery(
    ["menu list", debouncedSearch],
    () => MenuService.getAll(debouncedSearch),
    {
      select: ({ data }: any) => {
        return data.data;
      },
      onError(error: any) {
        toastError(error, "actor list");
      },
    }
  );
  const { data, isLoading, error, isError } = queryData;

  const { mutateAsync } = useMutation(
    "create menu",
    (data: IMenuAdd) => MenuService.create(data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("Меню", "Меню успешно добавлен");
        queryData.refetch();
      },
    }
  );
  const { mutateAsync: deleteAsync } = useMutation(
    "delete menu",
    (genreId: string) => MenuService.delete(genreId),
    {
      onError(error) {
        toastError(error, "Ошибка при удаление");
      },
      onSuccess() {
        toastr.success("Удаление", "успешно удалён");
        queryData.refetch();
      },
    }
  );
  const onSubmit: SubmitHandler<IMenuAdd> = async (data: IMenuAdd) => {
    await mutateAsync(data);
    reset();
  };
  const Userscolumns: ColumnsType<IMenuPropsColumns> = [
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
      render: (id: string) => {
        return (
          <>
            <StyledIconColums>
              <Link className="warning__edit" to={`${MenuUrlRoute}/${id}`}>
                <MdOutlineModeEditOutline />
              </Link>
              <Button onClick={() => deleteAsync(id)} type="primary" danger>
                <MdCancel />
              </Button>
            </StyledIconColums>
          </>
        );
      },
    },
  ];
  return (
    <MenuPageStyled>
      <div>
        <div>
          <h3>Добавить меню</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="name"
              rules={MenuValidation}
              render={({ field }) => (
                <TextField
                  label="Добавить название меню"
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ""}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors?.name?.message}
                  helperText={errors?.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="url"
              rules={MenuValidationMenu}
              render={({ field }) => (
                <TextField
                  label="Добавить линк"
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ""}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors?.url?.message}
                  helperText={errors?.url?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="icon"
              rules={MenuValidation}
              render={({ field }) => (
                <TextField
                  label="Добавить название иконки - React_icon_md"
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ""}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors?.icon?.message}
                  helperText={errors?.icon?.message}
                />
              )}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth={true}
              disableElevation={true}
              sx={{
                marginTop: 2,
              }}
            >
              Добавить
            </LoadingButton>
          </form>
        </div>
      </div>
      <h3 className="marTop">Список Меню</h3>
      <Row>
        <Col xl={16}>
          <Table
            loading={isLoading}
            rowKey="id"
            columns={Userscolumns}
            dataSource={data}
          />
        </Col>
      </Row>
    </MenuPageStyled>
  );
}

export default MenuPage;
