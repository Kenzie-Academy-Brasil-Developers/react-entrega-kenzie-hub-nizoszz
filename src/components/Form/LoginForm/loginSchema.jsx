import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Enter valid email"),
  password: yup.string().required("Enter valid password"),
});
