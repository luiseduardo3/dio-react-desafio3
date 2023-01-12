import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputCadas } from "../../components/InputCadastro";

import {
  Column,
  Container,
  CriarText,
  TextInfo,
  RowColumn,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

export const Cadastro = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>

            <form>
              <InputCadas placeholder="Nome Completo" leftIcon={<MdPerson />} />
              <InputCadas placeholder="email" leftIcon={<MdEmail />} />
              <InputCadas placeholder="Password" leftIcon={<MdLock />} />

              <Button title="Criar Conta" variant="secondary" type="submit" />
            </form>
            <RowColumn>
              <TextInfo>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </TextInfo>
              <CriarText>
                Já tenho conta.{" "}
                <CriarText className="CriarText2">
                  <Link to="/login">Fazer login</Link>
                </CriarText>
              </CriarText>
            </RowColumn>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
