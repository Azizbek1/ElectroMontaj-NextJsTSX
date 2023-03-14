import React, { ReactElement, useState } from "react";
import ServicesPageStyled from "./Style";
import { Button, Col, Row, Table } from "antd";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { TextField } from "@mui/material";
import { MenuValidation } from "src/utils/validationsForms";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { MdCancel, MdOutlineModeEditOutline } from "react-icons/md";
import { LoadingButton } from "@mui/lab";
import UploadImage from "src/components/FileUpload";
import { useDebounce } from "src/hooks/useDebounce";
import { useMutation, useQuery } from "react-query";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { ServisesService } from "src/services/servis/portfolio.service";
import { toastr } from "react-redux-toastr";
import { ServisesUrlRoute } from "src/utils/urlsRouter";
import TextEditor from "src/components/formEditor/TextEditor";
export default function ServicesPage(): ReactElement {
  const { handleSubmit, control, reset } = useForm<any>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { errors } = useFormState({
    control,
  });
  const queryData = useQuery(
    ["servises list", debouncedSearch],
    () => ServisesService.getAll(debouncedSearch),
    {
      select: ({ data }: any) => {
        return data.data;
      },
      onError(error: any) {
        toastError(error, "servises list");
      },
    }
  );
  const { mutateAsync } = useMutation(
    "create servises",
    (data: any) => ServisesService.create(data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("Услуги", "Услуги успешно добавлен");
        queryData.refetch();
      },
    }
  );
  const { mutateAsync: deleteAsync } = useMutation(
    "delete servises",
    (genreId: string) => ServisesService.delete(genreId),
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
  const { data, isLoading } = queryData;
  const Newscolumns: ColumnsType<any> = [
    {
      title: "Загаловка Услуги",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Картинка",
      key: "file",
      dataIndex: "file",
      render: (url: string) => {
        return (
          <ServicesPageStyled>
            <img className="image__colomns" src={`${url}`} alt="jpg" />
          </ServicesPageStyled>
        );
      },
    },
    {
      title: "Текст",
      key: "text",
      dataIndex: "text",
    },
    {
      title: "Действия",
      key: "id",
      dataIndex: "id",
      render: (id: string) => {
        return (
          <ServicesPageStyled>
            <Link className="warning__edit" to={`${ServisesUrlRoute}/${id}`}>
              <MdOutlineModeEditOutline />
            </Link>
            <Button onClick={() => deleteAsync(id)} type="primary" danger>
              <MdCancel />
            </Button>
          </ServicesPageStyled>
        );
      },
    },
  ];
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    await mutateAsync(data);
    reset();
  };
  return (
    <ServicesPageStyled>
      <h2>Услуги</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              label="Добавить Загаловку"
              rules={MenuValidation}
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
          name="file"
          render={({ field }) => (
            <UploadImage onChange={(e) => field.onChange(e)} />
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
      <Row>
        <Col xl={24}>
          <Table
            loading={isLoading}
            rowKey="id"
            columns={Newscolumns}
            dataSource={data}
          />
        </Col>
      </Row>
    </ServicesPageStyled>
  );
}
