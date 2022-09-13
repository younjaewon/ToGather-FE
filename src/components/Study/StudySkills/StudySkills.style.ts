import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Flex from 'src/styles/Flex';
import COLOR from '../../../constants/colors'
import FontSizes from 'src/constants/FontSizes';
import { Skills } from 'src/components/@icons';

const StudySkillsBlock = styled.div`
  ${Flex({rowGap:'1rem', alignItems: 'center', justifyContent: 'center', flexWrap:'nowrap'})};
  width: 200px;
  height:4rem;
  svg{
    width:40px;
    height:40px;
  }
  margin: 0 auto 5%;
`

const SkillIconContainer = styled.div`
`

export {StudySkillsBlock, SkillIconContainer}