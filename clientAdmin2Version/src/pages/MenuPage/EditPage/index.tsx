import { ReactElement, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IMenuAdd } from "../Menu.props";
import { TextField } from "@mui/material";
import { MenuValidation } from "src/utils/validationsForms";
import { LoadingButton } from "@mui/lab";
import { MenuService } from "src/services/menu/menu.service";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { useMutation, useQuery } from "react-query";
import { Col, Row } from "antd";
import { toastr } from "react-redux-toastr";

function EditPage(): ReactElement {
  const { handleSubmit, control, reset } = useForm<IMenuAdd>();
  // Api cols
  const { errors } = useFormState({
    control,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(
    ["show menu"],
    () => MenuService.show(id),
    {
      onSuccess({ data }) {},
      onError(error) {
        toastError(error, "Get movie");
      },
    }
  );
  const { mutateAsync } = useMutation(
    "create menu",
    (data: any) => MenuService.update(id, data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("Меню", "Меню успешно редактирован");
        navigate("/menus");
      },
    }
  );
  const onSubmit: SubmitHandler<IMenuAdd> = async (data: any) => {
    const { name, icon, url } = data;
    await mutateAsync({ name, icon, url });
  };
  return (
    <div>
      <h3>Редактировать меню</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={MenuValidation}
          render={({ field }) => (
            <TextField
              label="Редактировать название меню"
              onChange={(e) => field.onChange(e)}
              value={field.value || data?.data.data.name}
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
          render={({ field }) => (
            <TextField
              label="Редактировать линк"
              onChange={(e) => field.onChange(e)}
              value={field.value || data?.data.data.url}
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
          render={({ field }) => (
            <TextField
              label="Редактировать название иконки - React_icon_md"
              onChange={(e) => field.onChange(e)}
              value={field.value || data?.data.data.icon}
              fullWidth={true}
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors?.icon?.message}
              helperText={errors?.icon?.message}
            />
          )}
        />
        <Row gutter={16}>
          <Col xl={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth={true}
              disableElevation={true}
              sx={{
                marginTop: 2,
              }}
            >
              Редактировать
            </LoadingButton>
          </Col>
          <Col xl={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth={true}
              disableElevation={true}
              sx={{
                marginTop: 2,
              }}
            >
              Назад
            </LoadingButton>
          </Col>
        </Row>
      </form>
    </div>
  );
}
export default EditPage;
