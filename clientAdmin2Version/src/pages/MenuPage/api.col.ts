import { useMutation } from "react-query";
import { toastr } from "react-redux-toastr";
import { MenuService } from "src/services/menu/menu.service";
import { toastError } from "src/settings/ToastReact/ToastReact";

export const MenuEdit = () => {
  const { mutateAsync: deleteAsync } = useMutation(
    "delete menu",
    (menuId: string) => MenuService.delete(menuId),
    {
      onError(error) {
        toastError(error, "Ошибка при удаление");
      },
      onSuccess() {
        toastr.success("Удалился", "успешно удалён");
      },
    }
  );
  const HandlaDelete = async (id: string) => {
    if (prompt("Точно хотите удалить ?")) {
      await deleteAsync(id);
    } else {
      return false;
    }
  };
  return {HandlaDelete};
};
