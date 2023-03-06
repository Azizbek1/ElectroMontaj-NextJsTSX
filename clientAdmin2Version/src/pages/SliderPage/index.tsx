import { Controller, SubmitHandler, useForm, useFormState } from "react-hook-form";
import SliderPageStyled from "./Style";
import { ISliderAdd } from "./Slider.props";
import { SliderValidation } from "./Validate.menu";
import { TextField } from '@mui/material';
import { LoadingButton } from "@mui/lab";

function SliderPage() {
  const { handleSubmit, control, reset } = useForm<ISliderAdd>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISliderAdd> = (data: ISliderAdd) => {
    console.log(data);
    reset();
  };

  return (
    <SliderPageStyled>
      <h2>SliderPage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="slogan"
          rules={SliderValidation}
          render={({ field }) => (
            <TextField
              label="Добавить меню"
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
          rules={SliderValidation}
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
          name="show"
          rules={SliderValidation}
          render={({ field }) => (
            <TextField
              label="Добавить название иконки - React_icon_md"
              onChange={(e) => field.onChange(e)}
              value={field.value || ""}
              fullWidth={true}
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors?.show?.message}
              helperText={errors?.show?.message}
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
    </SliderPageStyled>
  );
}

export default SliderPage;
