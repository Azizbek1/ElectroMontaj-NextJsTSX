import { ChangeEvent, Fragment, useRef, useState } from "react";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import SliderPageStyled from "./Style";
import { ISliderAdd } from "./Slider.props";
import { SliderValidation } from "./Validate.menu";
import { Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function SliderPage() {
  const { handleSubmit, control, reset } = useForm<ISliderAdd>();
  const [file, setFile] = useState<File>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISliderAdd> = (data: ISliderAdd) => {
    console.log(data);
    reset();
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const uploadInputRef = useRef(null);
  return (
    <SliderPageStyled>
      <h2>SliderPage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fragment></Fragment>
        <Controller
          control={control}
          name="name"
          rules={SliderValidation}
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
          rules={SliderValidation}
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
            <>
              <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => field.onChange(e)}
              />
              <Button
                onClick={() =>
                  uploadInputRef.current && uploadInputRef.current.click()
                }
                variant="contained"
              >
                Загрузить картинку 
              </Button>
            </>
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
    </SliderPageStyled>
  );
}

export default SliderPage;
