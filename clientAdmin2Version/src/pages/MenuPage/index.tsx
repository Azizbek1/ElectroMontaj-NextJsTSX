import { Row } from "antd";
import MenuPageStyled from "./Style";
import Col from "antd/lib/grid/col";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IMenuAdd } from "./Menu.props";
import { MenuValidation } from "./Validate.menu";


function MenuPage() {
  const { handleSubmit, control, reset } = useForm<IMenuAdd>();
  const { errors } = useFormState({
    control,
  });
  const onSubmit:SubmitHandler<IMenuAdd> = (data: IMenuAdd) => {
    console.log(data);
    reset()
  };

  return (
    <MenuPageStyled>
      <h2>MenuPage</h2>
      <div>
        <div>
          <h3>Добавить меню</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="menu"
              rules={MenuValidation}
              render={({ field }) => (
                <TextField
                  label="Добавить меню"
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ""}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors?.menu?.message}
                  helperText={errors?.menu?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="key"
              rules={MenuValidation}
              render={({ field }) => (
                <TextField
                  label="Добавить линк"
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ""}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors?.key?.message}
                  helperText={errors?.key?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="icon"
              rules={MenuValidation}
              render={({ field }) => (
                <TextField
                  label="Добавить название иконки - React_icon_md"
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ""}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  className="auth-form__input"
                  error={!!errors?.icon?.message}
                  helperText={errors?.icon?.message}
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
        </div>
      </div>
      <Row>
        <Col></Col>
      </Row>
    </MenuPageStyled>
  );
}

export default MenuPage;
