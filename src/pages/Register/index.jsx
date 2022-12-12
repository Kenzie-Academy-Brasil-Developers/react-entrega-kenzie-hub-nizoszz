import { Container } from "../../styles/container";
import {
  HeaderDiv,
  RegisterFormContainer,
  RegisterPageContainer,
  RegisterWrapper,
} from "./style";
import LogoDesktop from "../../assets/img/LogoDesktop.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledText, StyledTitle } from "../../styles/typography";
import { ButtonStyled } from "../../styles/button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const RegisterPage = () => {
  const { navigate } = useContext(AuthContext);
  const handleReturn = () => {
    navigate("");
  };

  return (
    <RegisterWrapper>
      <Container>
        <RegisterPageContainer>
          <HeaderDiv>
            <img src={LogoDesktop} alt="Kenzie Hub" />
            <ButtonStyled
              weigth={600}
              buttonStyle="defaultButtonSmall"
              onClick={handleReturn}
            >
              Back
            </ButtonStyled>
          </HeaderDiv>
          <RegisterFormContainer>
            <StyledTitle
              tag="Title1"
              titleStyle
              color="#F8F9FA"
              textAlign="center"
            >
              Create your account
            </StyledTitle>
            <StyledText tag="Headline" color="#868E96" textAlign="center">
              Fast and free, let's go!
            </StyledText>
            <RegisterForm />
          </RegisterFormContainer>
        </RegisterPageContainer>
      </Container>
    </RegisterWrapper>
  );
};
