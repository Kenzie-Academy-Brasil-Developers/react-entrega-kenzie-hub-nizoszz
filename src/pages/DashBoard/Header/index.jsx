import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Container } from "../../../styles/container";
import { StyledText, StyledTitle } from "../../../styles/typography";
import { HeaderContentContainer, HeaderStyled } from "./style";

export const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <HeaderStyled>
      <Container>
        <HeaderContentContainer>
          <StyledTitle tag="Title1" color="#F8F9FA">
            Olá, {user.name}
          </StyledTitle>
          <StyledText
            tag="HeadlineBold"
            titleStyle="HeadlineBold"
            color="#868E96"
            alignSelf="center"
          >
            {user.course_module}
          </StyledText>
        </HeaderContentContainer>
      </Container>
    </HeaderStyled>
  );
};
