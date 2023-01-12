import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  ImageBackground,
  UserInfo,
  HasInfo,
  PostInfo,
  UserPicture,
} from "./styles";

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground
        src="https://miro.medium.com/max/560/1*_0gD_n0rD3qDAQsdZIdmOA.png"
        width={100}
        height={20}
      />
      <Content>
        <UserInfo>
          <UserPicture src="https://hermes.digitalinnovation.one/users/student/7ecfd96a-80e5-4fbf-8a65-6355cbb8a928.png" />
          <div>
            <h4>Luis Eduardo</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp dio Global
            avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
