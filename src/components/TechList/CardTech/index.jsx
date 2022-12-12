import { StyledText, StyledTitle } from "../../../styles/typography";
import { CardTechStyled, TrashButton } from "./style";
import trasher from "../../../assets/img/trasher.svg";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { useState } from "react";

export const CardTech = ({ techStatus, techTitle, id }) => {
  const {
    deleteTechnology,
    setModal,
    setCreateTechnology,
    setIdTechnology,
    setTechnologyEdit,
  } = useContext(TechContext);
  const [loading, setLoading] = useState(false);

  const removeTechnology = (event) => {
    event.stopPropagation();
    deleteTechnology(id, setLoading);
  };

  const submit = () => {
    setModal(true);
    setIdTechnology(id);
    setTechnologyEdit({
      title: techTitle,
      status: techStatus,
    });
    setCreateTechnology(false);
  };
  return (
    <CardTechStyled onClick={submit}>
      <StyledTitle color="#F8F9FA" tag="Title3" titleStyle="Title3">
        {techTitle}
      </StyledTitle>
      <div>
        <StyledText
          tag="HeadlineBold"
          titleStyle="HeadlineBold"
          color="#868E96"
        >
          {techStatus}
        </StyledText>
        <TrashButton
          onClick={(event) => removeTechnology(event)}
          disabled={loading}
        >
          <img src={trasher} alt="" />
        </TrashButton>
      </div>
    </CardTechStyled>
  );
};
