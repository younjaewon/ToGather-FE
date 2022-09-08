import { SearchContainer, SkillsContainer, SkillBtn, skillIconTheme } from './SearchMenu.style';
import { Skills } from '../../@icons/index';
import { useRecoilState, atom, useRecoilValue } from 'recoil';

interface SearchMenuProps {
  searchIsOpen: boolean;
}

const skillsInitial = atom({
  key: 'selectedSkills',
  default: {},
});

const SearchMenu = ({ searchIsOpen }: SearchMenuProps) => {
  const [skills, setSkills] = useRecoilState(skillsInitial);

  return (
    <SearchContainer searchIsOpen={searchIsOpen}>
      <SkillsContainer>
        {Skills.map(({ skill, icon }) => (
          <SkillBtn key={skill} onClick={() => setSkills({ ...skills, skill })}>
            {icon()}
          </SkillBtn>
        ))}
      </SkillsContainer>
    </SearchContainer>
  );
};

export default SearchMenu;

export {};
