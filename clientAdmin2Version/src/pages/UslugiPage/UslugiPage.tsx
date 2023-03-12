import {  Fragment, useRef, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import SliderPageStyled from "./Style";
import { ISliderAdd } from "./Slider.props";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import UploadImage from "src/components/FileUpload";
import { MenuValidation } from "src/utils/validationsForms";
import { useMutation, useQuery } from "react-query";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { toastr } from "react-redux-toastr";
import { ColumnsType } from "antd/lib/table/interface";
import { ISlidePropsColumns } from "src/components/Table/Columns/columns.props";
import { Link } from "react-router-dom";
import { UslugiUrlRoute } from "src/utils/urlsRouter";
import { Button, Col, Row, Table } from "antd";
import { MdCancel, MdOutlineModeEditOutline } from "react-icons/md";
import { useDebounce } from "src/hooks/useDebounce";
import { UslugiService } from "src/services/uslugi/uslugi.service";

function UslugiPage() {
  const { handleSubmit, control, reset } = useForm<ISliderAdd>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { errors } = useFormState({
    control,
  });
  const queryData = useQuery(
    ["uslugi list", debouncedSearch],
    () => UslugiService.getAll(debouncedSearch),
    {
      select: ({ data }: any) => {
        return data.data;
      },
      onError(error: any) {
        toastError(error, "uslugi list");
      },
    }
  );
  const { data, isLoading, error, isError } = queryData;
  const { mutateAsync } = useMutation(
    "create slide",
    (data: any) => UslugiService.create(data),
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
    "delete uslugi",
    (genreId: string) => UslugiService.delete(genreId),
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
  const onSubmit: SubmitHandler<ISliderAdd> = async (data: ISliderAdd) => {
    const { text, url } = data;
    await mutateAsync({ text,  url, show: true });
    reset();
  };
  const Uslugicolumns: ColumnsType<ISlidePropsColumns> = [
    {
      title: "Загаловка слидера",
      key: "text",
      dataIndex: "text",
    },
    {
      title: "Картинка",
      key: "url",
      dataIndex: "url",
      render: (url: string) => {
        return (
          <SliderPageStyled>
            <img className="image__colomns" src={`${url}`} alt="png" />
          </SliderPageStyled>
        );
      },
    },
    {
      title: "Действия",
      key: "id",
      dataIndex: "id",
      render: (id: string) => {
        return (
          <SliderPageStyled>
            <Link className="warning__edit" to={`${UslugiUrlRoute}/${id}`}>
              <MdOutlineModeEditOutline />
            </Link>
            <Button onClick={() => deleteAsync(id)} type="primary" danger>
              <MdCancel />
            </Button>
          </SliderPageStyled>
        );
      },
    },
  ];
  return (
    <SliderPageStyled>
      <h2>Услуги</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="text"
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
              error={!!errors?.text?.message}
              helperText={errors?.text?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="url"
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
            columns={Uslugicolumns}
            dataSource={data}
          />
        </Col>
      </Row>
    </SliderPageStyled>
  );
}

export default UslugiPage;
