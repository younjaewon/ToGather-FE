import { SearchContainer, SkillsContainer, SkillBtn } from './SearchMenu.style';
import { Skills } from '../../@icons/index';
import { useRecoilState } from 'recoil';
import { filterOptionAtom } from '../../../contexts/SeacrchSkillsAtom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

interface SearchMenuProps {
  searchIsOpen: boolean;
}


const SearchMenu = ({ searchIsOpen }: SearchMenuProps) => {
  const [filtered, setFilteredOption] = useRecoilState(filterOptionAtom);


  const updateSelectedSkill = (skill:string) => {
    setFilteredOption({...filtered, skills:[...filtered.skills, skill]})
  }

  return (
    <SearchContainer searchIsOpen={searchIsOpen}>
      <SkillsContainer>
        {Skills.map(({ skill, icon }) => (
          <SkillBtn 
            key={skill} 
            onClick={() => {updateSelectedSkill(skill)}}
          >
            {icon()}
          </SkillBtn>
        ))}
      </SkillsContainer>
    </SearchContainer>
  );
};

export default SearchMenu;

export {};
