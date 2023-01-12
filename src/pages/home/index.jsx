import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TitleContent, Title, TitleHiglight } from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  const handleclickSair = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHiglight>
              Implemente
              <br />
            </TitleHiglight>
            o seu futuro global agora!
          </Title>
          <TitleContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts
          </TitleContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleclickSair}
          />
        </div>
        <div>
          <img
            src="https://hermes.digitalinnovation.one/public/components/pages/home/how-it-works/emerging-technologies.png"
            alt="Imagem principal"
          />
        </div>
      </Container>
    </>
  );
};
