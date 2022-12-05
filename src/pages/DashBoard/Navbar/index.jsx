import { ButtonStyled } from "../../../styles/button";
import { Container } from "../../../styles/container";
import { NavContentContainer, NavStyle } from "./style";
import LogoDesktop from "../../../assets/img/LogoDesktop.svg";

export const Navbar = ({ userLogout }) => {
  return (
    <NavStyle>
      <Container>
        <NavContentContainer>
          <img src={LogoDesktop} alt="Kenzie Hub" />
          <ButtonStyled
            weigth={600}
            buttonStyle="defaultButtonSmall"
            onClick={userLogout}
          >
            Voltar
          </ButtonStyled>
        </NavContentContainer>
      </Container>
    </NavStyle>
  );
};
