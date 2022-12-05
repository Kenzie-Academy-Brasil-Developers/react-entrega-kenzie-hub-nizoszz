import { useForm } from "react-hook-form";
import { ButtonStyled } from "../../../styles/button";
import { Input } from "../Input";
import { ErrorParagraph, FormLoginStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./loginSchema";
import { useState } from "react";

export const LoginForm = ({ userLogin }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const submit = (data) => {
    userLogin(data, setLoading);
  };

  return (
    <FormLoginStyled onSubmit={handleSubmit(submit)}>
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={loading}
      />
      {errors.password && (
        <ErrorParagraph>{errors.password.message}</ErrorParagraph>
      )}
      <ButtonStyled type="submit" buttonStyle disabled={loading}>
        {loading ? "Entrando" : "Entrar"}
      </ButtonStyled>
    </FormLoginStyled>
  );
};
