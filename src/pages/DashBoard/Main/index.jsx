import { Container } from "../../../styles/container";
import { StyledText, StyledTitle } from "../../../styles/typography";
import { MainContentContainer, MainStyled } from "./style";

export const Main = () => {
  return (
    <MainStyled>
      <Container>
        <MainContentContainer>
          <StyledTitle tag="Title1" color="#F8F9FA">
            Que pena! Estamos em desenvolvimento :(
          </StyledTitle>
          <StyledText tag="Headline" color="#F8F9FA">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </StyledText>
        </MainContentContainer>
      </Container>
    </MainStyled>
  );
};
