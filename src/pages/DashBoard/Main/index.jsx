import { useContext } from "react";
import { TechList } from "../../../components/TechList";
import { TechContext } from "../../../contexts/TechContext";
import { ButtonStyled } from "../../../styles/button";
import { Container } from "../../../styles/container";
import { StyledTitle } from "../../../styles/typography";
import { MainContentContainer, MainStyled } from "./style";

export const Main = () => {
  const { setModal, setCreateTechnology } = useContext(TechContext);

  const addModal = () => {
    setModal(true);
    setCreateTechnology(true);
  };

  return (
    <MainStyled>
      <Container>
        <MainContentContainer>
          <div>
            <StyledTitle tag="Title1" color="#F8F9FA">
              Technologies
            </StyledTitle>
            <ButtonStyled
              weigth={400}
              fontSize="2.5rem"
              buttonStyle="buttonPlus"
              onClick={addModal}
            >
              +
            </ButtonStyled>
          </div>
          <TechList />
        </MainContentContainer>
      </Container>
    </MainStyled>
  );
};
