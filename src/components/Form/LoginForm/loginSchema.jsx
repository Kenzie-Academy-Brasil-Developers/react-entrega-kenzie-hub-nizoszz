import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Insira um email válido."),
  password: yup.string().required("Insira uma senha válida."),
});
