import styled from '@emotion/styled';
import Flex from '../../../styles/Flex';
import COLOR from '../../../constants/colors';
import FontSizes from '../../../constants/FontSizes';

interface searchAreaProps {
  searchIsOpen: boolean;
}

const SearchContainer = styled.div`
  display: ${({ searchIsOpen }: searchAreaProps) => (searchIsOpen ? 'block' : 'none')};
  left: 50%;
  transform: translateX(-50%);
  width: 1180px;
  height: 300px;
  position: fixed;
  top: 4rem;
  cursor: default;
  box-shadow: 0px 4px 5px ${COLOR.GRAY_100};
  padding: 1rem;
  z-index: 9999;
  background-color:${COLOR.WHITE};
`;

const SkillsContainer = styled.div`
  ${Flex({ columnGap: '2rem', flexWrap: 'wrap', rowGap: '1rem' })}
  z-index: 9999;
`;

const SkillBtn = styled.button`
  width: 6rem;
  border-radius: 100px;
  gap: 10px;
  padding: 8px 12px 8px 14px;
  ${Flex({ alignItems: 'center' })}
  border: 1px solid ${COLOR.GRAY_100};
  background-color: white;
  svg {
    width: ${FontSizes.Skills_Icon_Width};
    height: ${FontSizes.Skills_Icon_Height};
  }
  transition: 0.2s;

  :hover {
    transform: translate3d(-2px, -2px, -100px);
  }
`;

export { SearchContainer, SkillsContainer, SkillBtn };
