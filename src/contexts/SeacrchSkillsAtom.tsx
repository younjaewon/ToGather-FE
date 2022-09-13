import { atom, DefaultValue, selector } from 'recoil';
import { SkillsNameTable } from '../mocks/SkillsTableTest';

interface FilterProps {
  skills: string []
}

interface filteredSkillsToNumber {
  skills: number[]
}

const filterOptionAtom = atom<FilterProps>({
  key: 'SEARCHED_SKILLS',
  default: {
    skills: []
  },
});

const filteredSkillsToNumber = selector({
  key: 'SKILL_STRING_TO_NUMBER',
  get: ({get}) => {
    return get(filterOptionAtom)
    .skills
    .map(skill => {
      return SkillsNameTable[skill]
    })
  },
/*   set: ({set}, newValue) => {
    set(
      filterOptionAtom,
      newValue instanceof DefaultValue ? newValue : newValue.map((skill:string) => SkillsTableTest[skill])
    )
  } */
});

export {filterOptionAtom}
export {filteredSkillsToNumber}