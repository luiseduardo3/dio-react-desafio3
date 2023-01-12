import { Button } from "../Button";
import {
  BuscarInputConatiner,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

import DioLogo from "../../assets/dio.png";

export const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={DioLogo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputConatiner>
                <Input placeholder="Buscar" />
              </BuscarInputConatiner>
              <Menu>Live code</Menu>
              <Menu>global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://hermes.digitalinnovation.one/users/student/7ecfd96a-80e5-4fbf-8a65-6355cbb8a928.png" />
          ) : (
            <>
              <MenuRight href="$">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
