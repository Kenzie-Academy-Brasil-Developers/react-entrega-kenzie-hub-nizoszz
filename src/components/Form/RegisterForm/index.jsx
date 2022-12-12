import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { ButtonStyled } from "../../../styles/button";
import { Input } from "../Input";
import { OptionSelect } from "../Option";
import { Select } from "../Select";
import { RegisterSchema } from "./registerSchema";
import { ErrorParagraph, FormRegisterStyled } from "./style";
export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      bio: "",
      contact: "",
    },
  });

  const submit = (data) => {
    userRegister(data, setLoading);
  };
  return (
    <FormRegisterStyled onSubmit={handleSubmit(submit)} noValidate>
      <Input
        id="name"
        label="Name"
        type="text"
        placeholder="Enter your name"
        register={register("name")}
        disabled={loading}
      />
      {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Enter your e-mail"
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register("password")}
        disabled={loading}
      />
      {errors.password && (
        <ErrorParagraph>{errors.password.message}</ErrorParagraph>
      )}
      <Input
        id="passwordConfirmation"
        label="Confirm password"
        type="password"
        placeholder="Enter your password again"
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
        placeholder="Talk about you"
        register={register("bio")}
        disabled={loading}
      />
      {errors.bio && <ErrorParagraph>{errors.bio.message}</ErrorParagraph>}
      <Input
        id="contact"
        label="Contact"
        type="text"
        placeholder="Contact option"
        register={register("contact")}
        disabled={loading}
      />
      {errors.contact && (
        <ErrorParagraph>{errors.contact.message}</ErrorParagraph>
      )}
      <Select
        id="course_module"
        label="Select module"
        register={register("course_module")}
        disabled={loading}
      >
        <OptionSelect value="First module (Basic Frontend)">
          First module (Basic Frontend)
        </OptionSelect>
        <OptionSelect value="Second module (Frontend Advanced)">
          Second module (Frontend Advanced)
        </OptionSelect>
        <OptionSelect value="Third module (Basic Backend)">
          Third module (Basic Backend)
        </OptionSelect>
        <OptionSelect value="Fourth module (Backend Advanced)">
          Fourth module (Backend Advanced)
        </OptionSelect>
      </Select>
      {errors.course_module && (
        <ErrorParagraph>{errors.course_module.message}</ErrorParagraph>
      )}
      {!isValid ? (
        <ButtonStyled
          type="submit"
          buttonStyle="disabledButton"
          disabled={!isValid}
        >
          Sign up
        </ButtonStyled>
      ) : (
        <ButtonStyled type="submit">Sign up</ButtonStyled>
      )}
    </FormRegisterStyled>
  );
};
