import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Column, Container, Title, TitleHiglight } from "./styles";

export const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <TitleHiglight># RANKING 5 TOP DA SEMANA</TitleHiglight>
          <UserInfo
            percentual={90}
            nome="Luis Eduardo"
            image="https://hermes.digitalinnovation.one/users/student/7ecfd96a-80e5-4fbf-8a65-6355cbb8a928.png"
          />
          <UserInfo
            percentual={2}
            nome="Luis Eduardo"
            image="https://hermes.digitalinnovation.one/users/student/7ecfd96a-80e5-4fbf-8a65-6355cbb8a928.png"
          />
          <UserInfo
            percentual={12}
            nome="Luis Eduardo"
            image="https://hermes.digitalinnovation.one/users/student/7ecfd96a-80e5-4fbf-8a65-6355cbb8a928.png"
          />
          <UserInfo
            percentual={40}
            nome="Luis Eduardo"
            image="https://hermes.digitalinnovation.one/users/student/7ecfd96a-80e5-4fbf-8a65-6355cbb8a928.png"
          />
        </Column>
      </Container>
    </>
  );
};
