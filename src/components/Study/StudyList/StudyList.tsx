import { Study, StudyDeadline, StudyTitle, StudyFooter, StudyAuthor, StudyViewer} from './StudyList.style';
import StudySkills from '../StudySkills/StudySkills'
import { StudyListTest } from '../../../mocks/StudyListTest';
import { Link } from 'react-router-dom';
import { Skills } from '../../@icons/Skills/Skills';
import Slider from "react-slick";
import { filteredSkillsToNumber } from '../../../contexts/SeacrchSkillsAtom';
import { useRecoilValue } from 'recoil';

import { filterOptionAtom } from '../../../contexts/SeacrchSkillsAtom';

const StudyList = () => {

  const filteredSkillsArray = useRecoilValue(filteredSkillsToNumber)


  return (
    <>
      {StudyListTest.map(list => (
        <Study key={list.id} to='/'>
          <StudySkills skillsList={list.techs} />
            <StudyDeadline>
              마감 예정일
              <span aria-hidden='true'>
                |
              </span>
              {list.deadline}
            </StudyDeadline>
          <StudyTitle>
            {list.search.title}
          </StudyTitle>
          <StudyFooter>
            <StudyAuthor>
              <img src='/' width='36px' height='36px' />
              {list.search.author}
            </StudyAuthor>
            <StudyViewer>
              viewerArea
            </StudyViewer>
          </StudyFooter>  
        </Study>
      ))}
    </>
    
  );
}

export default StudyList;