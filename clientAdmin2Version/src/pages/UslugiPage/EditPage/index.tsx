import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { ReactElement } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";
import { useNavigate, useParams } from "react-router-dom";
import UploadImage from "src/components/FileUpload";
import { IMenuAdd } from "src/pages/MenuPage/Menu.props";
import { SlideService } from "src/services/sliders/slide.service";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { ISliderAdd } from "../Slider.props";
import { UslugiService } from "src/services/uslugi/uslugi.service";
import UslugiEditStyled from '../Style'
function EditUslugiPage(): ReactElement {
  const { handleSubmit, control, reset } = useForm<ISliderAdd>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { errors } = useFormState({
    control,
  });
  const { isLoading, data } = useQuery(
    ["show uslugi"],
    () => UslugiService.show(id),
    {
      onSuccess({ data }) {},
      onError(error) {
        toastError(error, "Get movie");
      },
    }
  );
  const { mutateAsync } = useMutation(
    "create uslugi",
    (data: any) => UslugiService.update(id, data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("Услуги", "Услуги успешно редактирован");
        navigate("/uslugi");
      },
    }
  );
  const onSubmit = async (data: any) => {
    const { name,  text, url } = data;
    await mutateAsync({ text, name,  url, show: true });
  };
  return (
    <UslugiEditStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              label="Добавить Загаловку"
              onChange={(e) => field.onChange(e)}
              value={field.value || data?.data?.data.name}
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
              label="Добавить Загаловку"
              onChange={(e) => field.onChange(e)}
              value={field.value || data?.data?.data.text}
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
        <img
          src={data?.data.data.url}
          alt="png"
          className="image_uslugi"
          style={{ borderRadius: "50%", width: "50px" }}
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
          Редактировать
        </LoadingButton>
      </form>
    </UslugiEditStyled>
  );
}
export default EditUslugiPage;
