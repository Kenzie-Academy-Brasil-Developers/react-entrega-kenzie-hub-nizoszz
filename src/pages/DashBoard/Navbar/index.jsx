import { ButtonStyled } from "../../../styles/button";
import { Container } from "../../../styles/container";
import { NavContentContainer, NavStyle } from "./style";
import LogoDesktop from "../../../assets/img/LogoDesktop.svg";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const Navbar = () => {
  const { userLogout } = useContext(AuthContext);
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
