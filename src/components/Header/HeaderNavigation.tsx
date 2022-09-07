import React, { useState } from 'react';
import LoginModal from '../Login/LoginModal';
import { NavigationBlock, Wrapper, LoginButton, CategoryBlock } from './HeaderNavigation.styles';

const HeaderNavigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
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
          <LoginButton onClick={handleModalOpen}>
            로그인
            {openModal && <LoginModal openModal={openModal} setOpenModal={setOpenModal} />}
          </LoginButton>
        </Wrapper>
      </NavigationBlock>
    </>
  );
};

export default HeaderNavigation;
