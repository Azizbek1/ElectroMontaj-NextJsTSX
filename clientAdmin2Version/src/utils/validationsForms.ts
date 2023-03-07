// export const MenuValidation: IValidate = {
//   required: "Обязательно для заполнения",
//   validate: (value) => {
//     if (value.match(/[а-яА-Я]/)) {
//       return "Логин не может содержать русские буквы";
//     } else if (value.length < 6) {
//       return "Символ должен длиннее 6-ти символов";
//     }
//     return true;
//   },
// };

interface IValidate {
  required: string;
  validate: (value: string) => boolean | string;
}
export const MenuValidation: IValidate = {
  required: "Обязательно для заполнения",
  validate: (value) => {
    if (!value.match(/[A-Za-zА-Яа-яЁё]/)) {
      return "Ведите толька быквы";
    }
    return true;
  },
};

interface IValidate {
  required: string;
  validate: (value: string) => boolean | string;
}
