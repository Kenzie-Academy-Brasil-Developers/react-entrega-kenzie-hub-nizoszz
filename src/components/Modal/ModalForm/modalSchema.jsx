import * as yup from "yup";

export const ModalSchema = yup.object().shape({
  title: yup
    .string()
    .required("Enter technology")
    .min(3, "Technology name must contain at least three characters"),
  status: yup.string().required("Select technology level"),
});
