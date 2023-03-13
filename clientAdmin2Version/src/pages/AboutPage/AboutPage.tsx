import React, { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";

import { LoadingButton } from "@mui/lab";
import UploadImage from "src/components/FileUpload";
import { TextField } from "@mui/material";
import { useDebounce } from "src/hooks/useDebounce";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";
import { IAboutPort } from "./About.props";
import { AboutService } from "src/services/about/about.service";
import { MenuValidation } from "src/utils/validationsForms";
import { Button } from "antd";
import AboutStyled from './Style'
interface Props {}

function AboutPage({}: Props): ReactElement {
  const { handleSubmit, control, reset } = useForm<IAboutPort>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const { errors } = useFormState({
    control,
  });
  const queryData = useQuery(
    ["About list", debouncedSearch],
    () => AboutService.getAll(debouncedSearch),
    {
      select: ({ data }: any) => {
        return data.data;
      },
      onError(error: any) {
        toastError(error, "About list");
      },
    }
  );
  const { mutateAsync } = useMutation(
    "create About",
    (data: any) => AboutService.create(data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("О нас", "О нас успешно добавлен");
        queryData.refetch();
      },
    }
  );
  const { mutateAsync: deleteAsync } = useMutation(
    "delete Abou",
    (genreId: string) => AboutService.delete(genreId),
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
  const Aboutcolumns = [];
  const onSubmit: SubmitHandler<IAboutPort> = async (data: IAboutPort) => {
    await mutateAsync(data);
    reset();
  };
  return (
    <AboutStyled>
      <h2>О нас</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="text"
          render={({ field }) => (
            <TextField
              label="Добавить текст"
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              fullWidth={true}
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors?.slogan?.message}
              helperText={errors?.slogan?.message}
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
        <div className="bt-Mar">
        <Button onClick={() => navigate("/about/edit")}>Редактировать</Button>
        </div>
      </form>
    </AboutStyled>
  );
}

export default AboutPage;
