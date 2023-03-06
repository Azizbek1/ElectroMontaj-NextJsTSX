import React from "react";
import SiginPageStyled from "./Style";
import { Typography } from "@mui/material";
import {
  SubmitHandler,
  useFormState,
  useForm,
  Controller,
} from "react-hook-form";
import { TextField } from "@mui/material";
import { loginValidation, passwordValidation } from "./Sigin.validate";
import { LoadingButton } from '@mui/lab';
import { ISignInForm } from "./Sigin.props";
import { useActions } from "src/hooks/useActions";
import { useAuth } from "src/hooks/useAuth";
import { setIsAuth, setIsStatus } from "src/store/Dispatch";




function SiginPage() {
  const { handleSubmit, control, reset } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });
  const { isLoading } = useAuth()

	const { login} = useActions()
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    login(data)
    setIsAuth('admin')
    setIsStatus(true)
    reset()
  };
  return (
    <SiginPageStyled>
      <div className="auth-form">
        <Typography variant="h4" component="div">
          Войдите
        </Typography>
        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                label="Логин"
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                fullWidth={true}
                size="small"
                margin="normal"
                className="auth-form__input"
                error={!!errors.login?.message}
                helperText={errors?.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                label="Пароль"
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                fullWidth={true}
                size="small"
                margin="normal"
                type="password"
                className="auth-form__input"
                error={!!errors?.password?.message}
                helperText={errors?.password?.message}
              />
            )}
          />
          <LoadingButton
            loading={isLoading}
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{
              marginTop: 2,
            }}
          >
            Войти
          </LoadingButton>
        </form>
      </div>
    </SiginPageStyled>
  );
}

export default SiginPage;
