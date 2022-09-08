import React, { Children, createContext, useContext, useState } from 'react';
import { modalContext } from '../../contexts/ModalContext';
import NavMenuWidth from 'src/constants/NavMenuWidth';
import LoginModal from '../Login/LoginModal';
import { NavigationBlock, Wrapper, LoginButton, CategoryBlock, NavMenu, Favorites, MenuBtn, GpsContainer } from './HeaderNavigation.styles';
import SearchMenu from './searchMenu/SearchMenu' ;
import Statistics from './statisticsMenu/Statistics';
import { GpsIcon } from "../@icons";



const HeaderNavigation = () => {
  const openModal = useContext(modalContext)?.openModal;

  const handleOpenModal = () => {
    openModal?.(<LoginModal />);
  };



  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [favoriteIsOpen, setFavoriteIsOpen] = useState(false)
  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false)
  const [gpsIsOpen, setGpsIsOpen] = useState(false)

  return (
    <>
      <NavigationBlock>
        <Wrapper>
          <div>로고</div>
          <CategoryBlock>
            <NavMenu
              widthProp={NavMenuWidth.search}
              onMouseEnter ={() => {
                setSearchIsOpen(true)
              }}
              onMouseLeave={() => setSearchIsOpen(false)}>
              <MenuBtn onClick={() => setSearchIsOpen(true)}
            >
                공고 검색
              </MenuBtn>
                <SearchMenu searchIsOpen={searchIsOpen}/> 
            </NavMenu>
            <NavMenu
              widthProp={NavMenuWidth.favorite}
              onMouseEnter ={() => {
                setFavoriteIsOpen(true)
              }}
              onMouseLeave={() => setFavoriteIsOpen(false)}>
              <MenuBtn onClick={() => setFavoriteIsOpen(true)}
            >
                좋아요 한 공고
              </MenuBtn>
              <Favorites favoriteIsOpen = {favoriteIsOpen}>
                
              </Favorites>
            </NavMenu>
            <NavMenu
              widthProp={NavMenuWidth.statistics}
              onMouseEnter ={() => {
                setStatisticsIsOpen(true)
              }}
              onMouseLeave={() => setStatisticsIsOpen(false)}>
              <MenuBtn onClick={() => setStatisticsIsOpen(true)}
            >
                통계 자료
              </MenuBtn>
                <Statistics statisticsIsOpen = {statisticsIsOpen}/>
            </NavMenu>
            <GpsContainer
              widthProp={NavMenuWidth.gps}
              onMouseEnter ={() => {
                setGpsIsOpen(true)
              }}
              onMouseLeave={() => setGpsIsOpen(false)}
              onClick={() => setGpsIsOpen(true)}
            >
              <GpsIcon />

            </GpsContainer>
          </CategoryBlock>
          <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
        </Wrapper>
      </NavigationBlock>
    </>
  );
};

export default HeaderNavigation;
