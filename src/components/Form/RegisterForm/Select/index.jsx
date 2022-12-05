import { FieldSetStyled, LabelStyled } from "../../Input/style";
import { OptionSelectModule } from "./Option";
import { SelectStyled } from "./styled";

export const SelectCourseModule = ({ id, label, disabled, register }) => {
  return (
    <FieldSetStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <SelectStyled name="course_module" disabled={disabled} {...register}>
        <OptionSelectModule value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </OptionSelectModule>
        <OptionSelectModule value="Primeiro módulo (Introdução ao Frontend)">
          Segundo módulo (Frontend Avançado)
        </OptionSelectModule>
        <OptionSelectModule value="Primeiro módulo (Introdução ao Frontend)">
          Terceiro módulo (Introdução ao Backend)
        </OptionSelectModule>
        <OptionSelectModule value="Primeiro módulo (Introdução ao Frontend)">
          Quarto módulo (Backend Avançado)
        </OptionSelectModule>
      </SelectStyled>
    </FieldSetStyled>
  );
};
