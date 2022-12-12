import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CardTech } from "./CardTech";
import { TechUl } from "./style";

export const TechList = () => {
  const { user } = useContext(AuthContext);
  return (
    <TechUl>
      {user.techs.map((tech) => {
        return (
          <CardTech
            key={tech.id}
            techStatus={tech.status}
            techTitle={tech.title}
            id={tech.id}
            onClick
          />
        );
      })}
    </TechUl>
  );
};
