import { useContext } from "react";
import LogoDesktop from "../../assets/img/LogoDesktop.svg";
import { LoginForm } from "../../components/Form/LoginForm";
import { AuthContext } from "../../contexts/AuthContext";
import { ButtonStyled } from "../../styles/button";
import { Container } from "../../styles/container";
import { StyledText, StyledTitle } from "../../styles/typography";
import { LoginFormContainer, LoginPageContainer, LoginWrapper } from "./style";
export const LoginPage = () => {
  const { navigate } = useContext(AuthContext);

  const handleRedirect = () => {
    navigate("/register");
  };
  return (
    <LoginWrapper>
      <Container>
        <LoginPageContainer>
          <img src={LogoDesktop} alt="Kenzie Hub" />
          <LoginFormContainer>
            <StyledTitle
              tag="Title1"
              titleStyle
              color="#F8F9FA"
              textAlign="center"
            >
              Login
            </StyledTitle>
            <LoginForm />
            <StyledText
              tag="HeadlineBold"
              titleStyle="HeadlineBold"
              color="#868E96"
              textAlign="center"
            >
              Don't have an account yet?
            </StyledText>
            <ButtonStyled
              buttonStyle="greyButtonDefault"
              onClick={handleRedirect}
            >
              Sign up
            </ButtonStyled>
          </LoginFormContainer>
        </LoginPageContainer>
      </Container>
    </LoginWrapper>
  );
};
