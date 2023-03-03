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
import { Button } from "@mui/material";
import { ISignInForm } from "./Sigin.props";



function SiginPage() {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
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
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{
              marginTop: 2,
            }}
          >
            Войти
          </Button>
        </form>
      </div>
    </SiginPageStyled>
  );
}

export default SiginPage;
