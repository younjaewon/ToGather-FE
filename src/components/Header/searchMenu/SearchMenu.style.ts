import styled from '@emotion/styled';
import Flex from '../../../styles/Flex';
import COLOR from '../../../constants/colors';
import SkillsIconSize from '../../../constants/SkillsIconSize';

const skillIconTheme = {
  width: '14px',
  height: '14px',
};

interface searchAreaProps {
  searchIsOpen: boolean;
}

const SearchContainer = styled.div`
  display: ${({ searchIsOpen }: searchAreaProps) => (searchIsOpen ? 'block' : 'none')};
  width: 50%;
  height: 200px;
  position: fixed;
  margin: 0 auto;
  top: 4rem;
  z-index: 9999;
  cursor: default;
  box-shadow: 0px 4px 5px ${COLOR.GRAY_100};
  padding: 1rem;
`;

const SkillsContainer = styled.div`
  ${Flex({ columnGap: '2rem', flexWrap: 'wrap', rowGap: '1rem' })}
`;

const SkillBtn = styled.button`
  width: 8rem;
  border-radius: 100px;
  gap: 10px;
  padding: 12px 20px 12px 15px;
  ${Flex({ alignItems: 'center' })}
  border: 1px solid ${COLOR.GRAY_100};
  background-color: white;
  svg {
    width: ${SkillsIconSize.width};
    height: ${SkillsIconSize.height};
  }
  transition: 0.2s;

  :hover {
    transform: translate3d(-2px, -2px, -100px);
  }
`;

export { SearchContainer, SkillsContainer, SkillBtn, skillIconTheme };
