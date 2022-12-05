import { StyledTitle } from "./typography";

export const MessageToast = ({ message }) => {
  return (
    <StyledTitle tag="Title3" titleStyle="Title3" color="#F8F9FA">
      {message}
    </StyledTitle>
  );
};
