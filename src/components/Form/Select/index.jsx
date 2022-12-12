import { FieldSetStyled, LabelStyled } from "../Input/style";
import { SelectStyled } from "./styled";

export const Select = ({ id, label, disabled, register, name, children }) => {
  return (
    <FieldSetStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <SelectStyled name={name} disabled={disabled} {...register}>
        {children}
      </SelectStyled>
    </FieldSetStyled>
  );
};
