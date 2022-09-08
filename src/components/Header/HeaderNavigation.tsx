import React, { useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalContext } from '../../contexts/ModalContext';
import LoginModal from '../Login/LoginModal';
import RegisterModal from '../Login/RegisterModal';
import {
  NavigationBlock,
  Wrapper,
  LoginButton,
  RegisterButton,
  CategoryBlock,
  ButtonBlock,
} from './HeaderNavigation.styles';

const HeaderNavigation = () => {
  const openModal = useContext(modalContext)?.openModal;

  const handleOpenModal = () => {
    openModal?.(<LoginModal />);
  };
  const handleOpenModal2 = () => {
    openModal?.(<RegisterModal />);
  };

  return (
    <>
      <NavigationBlock>
        <Wrapper>
          <div>로고</div>
          <CategoryBlock>
            <div>메뉴1</div>
            <div>메뉴2</div>
            <div>메뉴3</div>
            <div>메뉴4</div>
          </CategoryBlock>
          <ButtonBlock>
            <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
            <RegisterButton onClick={handleOpenModal2}>회원가입</RegisterButton>
          </ButtonBlock>
        </Wrapper>
      </NavigationBlock>
    </>
  );
};

export default HeaderNavigation;
