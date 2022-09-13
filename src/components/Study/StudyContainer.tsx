import { StudySection } from './StudyContainer.style';
import { useRecoilValue } from 'recoil';
import StudyList from './StudyList/StudyList';
import getStudy from '../../apis/studyTest';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';




const StudyListContainer = () => {
/*   const { isLoading, error, data, isFetching } = useQuery(
    ["StudyList"],
    () => {
      
    } ) */


  
  return (
    <StudySection>
      <StudyList />
    </StudySection>
  );
}

export default StudyListContainer;

