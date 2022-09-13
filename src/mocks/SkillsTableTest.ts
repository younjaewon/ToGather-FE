import { Skills } from '../components/@icons/Skills/Skills';
import react from 'react';
import { EmotionJSX } from '@emotion/react';


interface SkillsNameTestType{
  [key: string] : number;
}

interface SkillsIdTestType{
  [key: string] : {id:number, skillName: string, icon: () => {}}
}

const createSkillsNameTable = (): SkillsNameTestType => {
  const SkillsNameTable:SkillsNameTestType = {};
  for(let i = 0; i<Skills.length; i++) {
    const { skill } = Skills[i];
    SkillsNameTable[skill] = i; 
  }
  return SkillsNameTable;
}


const createSkillsIdTable = (): SkillsIdTestType => {
  const SkillsIdTable:SkillsIdTestType = {};
  for(let i = 0; i<Skills.length; i++){
    const { skill, icon } = Skills[i];
    SkillsIdTable[i] = {id: i, skillName: skill, icon:icon};
  }
  return SkillsIdTable;
}


const SkillsNameTable = createSkillsNameTable();
const SkillsIdTable = createSkillsIdTable();

export { SkillsNameTable, SkillsIdTable };