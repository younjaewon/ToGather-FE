import styled, { CSS } from '@emotion/styled';
import COLOR from '../../constants/colors';
import Flex from '../../styles/Flex';
import { GpsIcon } from '../@icons';

interface favoriteProps {
  favoriteIsOpen: boolean;
}

interface menuWidthProp {
  widthProp: string;
}

const NavigationBlock = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  max-width: 1180px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: sticky;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  top: 0px;
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  left: 50%;
  height: 100%;
`;

const NavMenu = styled.div`
  ${Flex({ alignItems: 'center', justifyContent: 'center' })};
  width: ${({ widthProp }: menuWidthProp) => widthProp};
`;
const MenuBtn = styled.div`
  font-weight: 700;
  height: 50%;
  ${Flex({ alignItems: 'center' })}
  border-radius:15%;
  cursor: pointer;
`;

const Favorites = styled.div`
  display: ${({ favoriteIsOpen }: favoriteProps) => (favoriteIsOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 10%;
  height: 200px;
  position: fixed;
  margin: 0 auto;
  top: 4rem;
  z-index: 9999;
  cursor: default;
  box-shadow: 0px 4px 5px ${COLOR.GRAY_100};
  padding: 1rem;
`;

const FavoriteList = styled.div`
  height: 2rem;
  border: 1px solid blue;
`;

const GpsContainer = styled.div`
  ${Flex({ alignItems: 'center', justifyContent: 'center' })};
  width: ${({ widthProp }: menuWidthProp) => widthProp};
  margin-left: 1rem;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export {
  Wrapper,
  NavigationBlock,
  LoginButton,
  CategoryBlock,
  NavMenu,
  Favorites,
  MenuBtn,
  FavoriteList,
  GpsContainer,
};
