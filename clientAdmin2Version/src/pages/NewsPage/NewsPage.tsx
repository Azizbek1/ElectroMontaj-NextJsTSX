import React, { ReactElement, useState } from "react";
import NewsStyled from "./Style";
import { Link } from "react-router-dom";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { INewsAdd } from "./News.props";
import { ColumnsType } from "antd/es/table";
import { INewsPropsColumns } from "src/components/Table/Columns/columns.props";
import { MdCancel, MdOutlineModeEditOutline } from "react-icons/md";
import { Button, Col, Row, Table } from "antd";
import { NewsUrlRoute } from "src/utils/urlsRouter";
import { LoadingButton } from "@mui/lab";
import UploadImage from "src/components/FileUpload";
import { MenuValidation } from "src/utils/validationsForms";
import { TextField } from "@mui/material";
import { useDebounce } from "src/hooks/useDebounce";
import { NewsService } from "src/services/news/news.service";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";
interface Props {}

function NewsPage({}: Props): ReactElement {
  const { handleSubmit, control, reset } = useForm<INewsAdd>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { errors } = useFormState({
    control,
  });
  const queryData = useQuery(
    ["news list", debouncedSearch],
    () => NewsService.getAll(debouncedSearch),
    {
      select: ({ data }: any) => {
        return data.data;
      },
      onError(error: any) {
        toastError(error, "news list");
      },
    }
  );
  const { mutateAsync } = useMutation(
    "create news",
    (data: any) => NewsService.create(data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("Новости", "Новости успешно добавлен");
        queryData.refetch();
      },
    }
  );
  const { mutateAsync: deleteAsync } = useMutation(
    "delete news",
    (genreId: string) => NewsService.delete(genreId),
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
  const { data, isLoading} = queryData;
  const Newscolumns: ColumnsType<INewsPropsColumns> = [
    {
      title: "Загаловка Новости",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Картинка",
      key: "file",
      dataIndex: "file",
      render: (url: string) => {
        return (
          <NewsStyled>
            <img className="image__colomns" src={`${url}`} alt="jpg" />
          </NewsStyled>
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
          <NewsStyled>
            <Link className="warning__edit" to={`${NewsUrlRoute}/${id}`}>
              <MdOutlineModeEditOutline />
            </Link>
            <Button onClick={() => deleteAsync(id)} type="primary" danger>
              <MdCancel />
            </Button>
          </NewsStyled>
        );
      },
    },
  ];
  const onSubmit: SubmitHandler<INewsAdd> = async (data: INewsAdd) => {
    await mutateAsync(data);
    reset();
  };
  return (
    <>
      <h2>NewsPage</h2>
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
          name="text"
          render={({ field }) => (
            <TextField
              label="Добавить текст"
              rules={MenuValidation}
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              fullWidth={true}
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors?.text?.message}
              helperText={errors?.text?.message}
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
        <Col xl={16}>
          <Table
            loading={isLoading}
            rowKey="id"
            columns={Newscolumns}
            dataSource={data}
          />
        </Col>
      </Row>
    </>
  );
}

export default NewsPage;
