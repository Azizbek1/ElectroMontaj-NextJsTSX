import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { ChangeEvent, ReactElement, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm, useFormState } from "react-hook-form";
import UploadImage from "src/components/FileUpload";

interface Props {}

export default function ContactPage({}: Props): ReactElement {
  const { handleSubmit, control, reset } = useForm();
  const [file, setFile] = useState();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
    reset();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  };
  const uploadInputRef = useRef(null);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              label="Добавить Загаловку"
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
          name="slogan"
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
      </form>
    </div>
  );
}
