import { useNavigate } from "react-router-dom";
import { Apresentacao } from "../../componentes/apresentacao";
import { SectionHome } from "./styled";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <SectionHome>
      <Apresentacao />
    </SectionHome>
  );
};
