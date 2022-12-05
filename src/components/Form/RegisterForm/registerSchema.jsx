import * as yup from "yup";
export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Insira seu nome")
    .min(3, "O nome deve conter no mínimo três caracteres"),
  email: yup
    .string()
    .required("Insira seu e-mail")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Insira sua senha")
    .matches(
      /(?=.*?[A-Z])/,
      "A senha deve conter no mínimo uma letra maiúscula."
    )
    .matches(
      /(?=.*?[a-z])/,
      "A senha deve conter no mínimo uma letra minúscula."
    )
    .matches(/(?=.*?[0-9])/, "A senha deve conter no mínimo um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha deve conter no mínimo um caractere especial"
    )
    .min(8, "A senha deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .required("A confirmação da senha é necessária")
    .oneOf([yup.ref("password")], "As senhas devem ser correspondentes"),
  bio: yup.string().required("Fale um pouco sobre você"),
  contact: yup.string().required("Insira um meio de contato"),
  course_module: yup.string().required("Selecione um módulo do curso"),
});
