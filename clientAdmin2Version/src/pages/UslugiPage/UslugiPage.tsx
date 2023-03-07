import React, { ReactElement } from "react";

interface Props {}

export default function UslugiPage({}: Props): ReactElement {
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
    <div>
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
