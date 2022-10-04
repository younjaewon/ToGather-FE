import React from 'react';
import { Link } from 'react-router-dom';
import {
  Study,
  StudyAuthor,
  StudyDeadline,
  StudyFooter,
  StudyTitle,
  StudyViewer,
} from './StudyList.style';
import StudyTechs from './StudyTechs';

interface Iprops {
  id: any;
  techs: any;
  deadline: any;
  title: any;
  author: any;
  profileImage: string;
}

const StudyComponent = ({ id, profileImage, techs, deadline, title, author }: Iprops) => {
  return (
    <Study to={`/studyDetail/${id}`}>
      <StudyTechs techsList={techs} />
      <StudyDeadline>
        마감 예정일
        <span aria-hidden="true">|</span>
        {deadline}
      </StudyDeadline>
      <StudyTitle>{title}</StudyTitle>
      <StudyFooter>
        <StudyAuthor>
          <img src={profileImage} width="36px" height="36px" />
          {author}
        </StudyAuthor>
      </StudyFooter>
    </Study>
  );
};

export default StudyComponent;
