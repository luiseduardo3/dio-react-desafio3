import { IconContainer, InputText, InputContainer } from "./styles";

export const InputCadas = ({ leftIcon, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <InputText {...rest} />
      </InputContainer>
    </>
    // se(?) se não (:)
  );
};
