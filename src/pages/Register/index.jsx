import { Container } from "../../styles/container";
import {
  HeaderDiv,
  RegisterFormContainer,
  RegisterPageContainer,
} from "./style";
import LogoDesktop from "../../assets/img/LogoDesktop.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledText, StyledTitle } from "../../styles/typography";
import { ButtonStyled } from "../../styles/button";

export const RegisterPage = ({ userRegister, navigate }) => {
  const handleReturn = () => {
    navigate("");
  };

  return (
    <>
      <Container>
        <RegisterPageContainer>
          <HeaderDiv>
            <img src={LogoDesktop} alt="Kenzie Hub" />
            <ButtonStyled
              weigth={600}
              buttonStyle="defaultButtonSmall"
              onClick={handleReturn}
            >
              Voltar
            </ButtonStyled>
          </HeaderDiv>
          <RegisterFormContainer>
            <StyledTitle
              tag="Title1"
              titleStyle
              color="#F8F9FA"
              textAlign="center"
            >
              Crie sua conta
            </StyledTitle>
            <StyledText tag="Headline" color="#868E96" textAlign="center">
              Rapido e grátis, vamos nessa
            </StyledText>
            <RegisterForm userRegister={userRegister} />
          </RegisterFormContainer>
        </RegisterPageContainer>
      </Container>
    </>
  );
};
