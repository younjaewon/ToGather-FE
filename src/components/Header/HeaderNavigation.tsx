import React, { useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalContext } from '../../contexts/ModalContext';
import LoginModal from '../Login/LoginModal';
import { NavigationBlock, Wrapper, LoginButton, CategoryBlock } from './HeaderNavigation.styles';

const HeaderNavigation = () => {
  const openModal = useContext(modalContext)?.openModal;

  const handleOpenModal = () => {
    openModal?.(<LoginModal />);
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
          <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
        </Wrapper>
      </NavigationBlock>
    </>
  );
};

export default HeaderNavigation;
