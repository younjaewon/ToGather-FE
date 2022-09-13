import {StudySkillsBlock, SkillIconContainer} from './StudySkills.style';
import { SkillsIdTable } from '../../../mocks/SkillsTableTest';
import Slider from "react-slick";
const {techs} = SkillsIdTable;

interface props{
  skillsList:Number[]
}

const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1
};

const StudySkills = ({skillsList} :props) => {
  return (
    <StudySkillsBlock>
        {skillsList.map(tech => (
          <SkillIconContainer key={SkillsIdTable[String(tech)].skillName}>
            {SkillsIdTable[String(tech)].icon()}
          </SkillIconContainer>
        ))}
    </StudySkillsBlock>
  )
}

export default StudySkills;