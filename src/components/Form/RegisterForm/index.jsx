import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonStyled } from "../../../styles/button";
import { Input } from "../Input";
import { RegisterSchema } from "./registerSchema";
import { SelectCourseModule } from "./Select";
import { ErrorParagraph, FormRegisterStyled } from "./style";
export const RegisterForm = ({ userRegister }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const submit = (data) => {
    userRegister(data, setLoading);
  };
  return (
    <FormRegisterStyled onSubmit={handleSubmit(submit)} noValidate>
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        disabled={loading}
      />
      {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
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
      <Input
        id="passwordConfirmation"
        label="Confirmar senha"
        type="password"
        placeholder="Digite novamente sua senha"
        register={register("passwordConfirmation")}
        disabled={loading}
      />
      {errors.passwordConfirmation && (
        <ErrorParagraph>{errors.passwordConfirmation.message}</ErrorParagraph>
      )}
      <Input
        id="bio"
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        disabled={loading}
      />
      {errors.bio && <ErrorParagraph>{errors.bio.message}</ErrorParagraph>}
      <Input
        id="contact"
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        register={register("contact")}
        disabled={loading}
      />
      {errors.contact && (
        <ErrorParagraph>{errors.contact.message}</ErrorParagraph>
      )}
      <SelectCourseModule
        id="course_module"
        label="Selecionar módulo"
        register={register("course_module")}
        disabled={loading}
      />
      {errors.course_module && (
        <ErrorParagraph>{errors.course_module.message}</ErrorParagraph>
      )}
      {!isValid ? (
        <ButtonStyled
          type="submit"
          buttonStyle="disabledButton"
          disabled={!isValid}
        >
          Cadastrar
        </ButtonStyled>
      ) : (
        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
      )}
    </FormRegisterStyled>
  );
};
