import { useContext, useState } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalSchema } from "./modalSchema";
import { ModalStyledForm } from "./style";
import { Input } from "../../Form/Input";
import { ErrorParagraph } from "../../Form/LoginForm/style";
import { Select } from "../../Form/Select";
import { OptionSelect } from "../../Form/Option";
import { ButtonStyled } from "../../../styles/button";

export const ModalForm = () => {
  const [buttonText, setButtonText] = useState();
  const [loading, setLoading] = useState();
  const {
    addTechnology,
    setModal,
    createTechnology,
    deleteTechnology,
    idTechnology,
    editTechnology,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(ModalSchema),
    defaultValues: {
      title: "",
    },
  });

  const submit = (data) => {
    addTechnology(data, setLoading);
    setModal(false);
  };

  const edit = (data) => {
    buttonText === "Delete"
      ? deleteTechnology(idTechnology, setLoading)
      : editTechnology(idTechnology, data, setLoading);
    setModal(false);
  };

  return (
    <>
      {createTechnology ? (
        <ModalStyledForm onSubmit={handleSubmit(submit)}>
          <Input
            id="title"
            label="Name"
            type="text"
            placeholder="Enter technology name here"
            register={register("title")}
            disabled={loading}
          />
          {errors.title && (
            <ErrorParagraph>{errors.title.message}</ErrorParagraph>
          )}
          <Select
            id="status"
            label="Select status"
            register={register("status")}
            disabled={loading}
          >
            <OptionSelect value="Beginner">Beginner</OptionSelect>
            <OptionSelect value="Intermediate">Intermediate</OptionSelect>
            <OptionSelect value="Advanced">Advanced</OptionSelect>
          </Select>
          {errors.status && (
            <ErrorParagraph>{errors.status.message}</ErrorParagraph>
          )}
          {!isValid ? (
            <ButtonStyled
              type="submit"
              buttonStyle="disabledButton"
              disabled={!isValid}
            >
              Register technology
            </ButtonStyled>
          ) : (
            <ButtonStyled type="submit"> Register technology</ButtonStyled>
          )}
        </ModalStyledForm>
      ) : (
        <ModalStyledForm onSubmit={handleSubmit(edit)}>
          <Input
            id="title"
            label="Project name"
            type="text"
            placeholder="Enter technology name here"
            register={register("title")}
            disabled={loading}
          />
          {errors.title && (
            <ErrorParagraph>{errors.title.message}</ErrorParagraph>
          )}
          <Select
            id="status"
            label="Status"
            register={register("status")}
            disabled={loading}
          >
            <OptionSelect value="Beginner">Beginner</OptionSelect>
            <OptionSelect value="Intermediate">Intermediate</OptionSelect>
            <OptionSelect value="Advanced">Advanced</OptionSelect>
          </Select>
          {errors.status && (
            <ErrorParagraph>{errors.status.message}</ErrorParagraph>
          )}
          <div>
            {!isValid ? (
              <ButtonStyled
                type="submit"
                buttonStyle="disabledButton"
                disabled={!isValid}
              >
                Save change
              </ButtonStyled>
            ) : (
              <ButtonStyled
                type="submit"
                onClick={(event) => setButtonText(event.target.innerText)}
              >
                Save change
              </ButtonStyled>
            )}
            <ButtonStyled
              buttonStyle="greyButtonDelete"
              onClick={(event) => setButtonText(event.target.innerText)}
            >
              Delete
            </ButtonStyled>
          </div>
        </ModalStyledForm>
      )}
    </>
  );
};
