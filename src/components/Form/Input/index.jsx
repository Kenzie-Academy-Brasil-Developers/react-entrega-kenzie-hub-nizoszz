import React from "react";
import { FieldSetStyled, InputStyled, LabelStyled } from "./style";
export const Input = ({ id, type, placeholder, disabled, label, register }) => {
  return (
    <FieldSetStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </FieldSetStyled>
  );
};
