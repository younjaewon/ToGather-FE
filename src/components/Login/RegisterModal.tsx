import React from 'react';
import { InputBoxBlock, Title, InputLabel, InputText, Wrapper } from './RegisterModal.styles';

const RegisterModal = () => {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <InputBoxBlock>
        <InputLabel htmlFor="inputNickname">닉네임</InputLabel>
        <InputText id="inputNickname" name="nickname" type="text" />
      </InputBoxBlock>
      <InputBoxBlock>
        <InputLabel htmlFor="inputNickname">프로필</InputLabel>
        <InputText id="inputNickname" name="nickname" type="text" />
      </InputBoxBlock>
      <InputBoxBlock>
        <InputLabel htmlFor="position">포지션</InputLabel>
        <InputText id="position" name="position" type="text" />
      </InputBoxBlock>
      <InputBoxBlock>
        <InputLabel htmlFor="skill">기술 태그</InputLabel>
        <InputText id="skill" name="skill" type="text" />
      </InputBoxBlock>
    </Wrapper>
  );
};

export default RegisterModal;
