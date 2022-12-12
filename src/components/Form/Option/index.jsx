import { OptionStyled } from "./style";

export const OptionSelect = ({ value, children }) => {
  return <OptionStyled value={value}>{children}</OptionStyled>;
};
