import { ChangeEvent, Fragment, useRef, useState } from "react";
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
import { useMutation } from "react-query";
import { toastError } from "src/settings/ToastReact/ToastReact";
import { toastr } from "react-redux-toastr";
import { SlideService } from "src/services/sliders/slide.service";

function SliderPage() {
  const { handleSubmit, control, reset } = useForm<ISliderAdd>();
  const [file, setFile] = useState<File>();
  const { errors } = useFormState({
    control,
  });

  const { mutateAsync } = useMutation(
    "create slide",
    (data: any) => SlideService.create(data),
    {
      onError(error: any) {
        toastError(error, "Ошибка");
      },
      onSuccess() {
        toastr.success("Слидер", "Слидер успешно добавлен");
      },
    }
  );
  const onSubmit: SubmitHandler<ISliderAdd> = async (data: ISliderAdd) => {
    console.log(data);
    await mutateAsync(data);
    reset();
  };
  return (
    <SliderPageStyled>
      <h2>SliderPage</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fragment></Fragment>
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
          name="slogan"
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
    </SliderPageStyled>
  );
}

export default SliderPage;
