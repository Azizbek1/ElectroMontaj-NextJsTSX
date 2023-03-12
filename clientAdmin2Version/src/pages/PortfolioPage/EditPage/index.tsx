import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { ReactElement } from "react";
import EditNewsStyle from '../Style'
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
import { toastError } from "src/settings/ToastReact/ToastReact";
import { INewsPort } from "../News.props";
import { PrortFolioService } from "src/services/portfolio/portfolio.service";


function PortfolioPage(): ReactElement {
  const { handleSubmit, control, reset } = useForm<INewsPort>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { errors } = useFormState({
    control,
  });
  const { isLoading, data } = useQuery(
    ["show Portfolio"],
    () => PrortFolioService.show(id),
    {
      onSuccess({ data }) {},
      onError(error) {
        toastError(error, "Get movie");
      },
    }
  );
  const { mutateAsync } = useMutation(
    "update Portfolio",
    (data: any) => PrortFolioService.update(id, data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("портфолио", "портфолио успешно редактирован");
        navigate("/portfolio");
      },
    }
  );
  const onSubmit = async (data: any) => {
    const { name, text, file } = data;
    await mutateAsync({ name, text, file});
  };
  return (
    <EditNewsStyle>
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
              label="Добавить текст"
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
          name="file"
          render={({ field }) => (
            <UploadImage onChange={(e) => field.onChange(e)} />
          )}
        />
        <img
          src={data?.data.data.file}
          alt="png"
          className="imageWidth"
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
    </EditNewsStyle>
  );
}
export default PortfolioPage;
