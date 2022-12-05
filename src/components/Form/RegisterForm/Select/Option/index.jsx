import { OptionStyled } from "./style";

export const OptionSelectModule = ({ value, children }) => {
  return <OptionStyled value={value}>{children}</OptionStyled>;
};
