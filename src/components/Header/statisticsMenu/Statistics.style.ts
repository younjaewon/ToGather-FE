import styled from "@emotion/styled";
import COLOR from "../../../constants/colors";

interface statisticsProps{
  statisticsIsOpen:boolean
}

const StatisticsContainer = styled.div`
  display: ${ ( {statisticsIsOpen} : statisticsProps) => statisticsIsOpen ? 'block' : 'none'};
  width:50%;
  height:200px;
  position:fixed;
  right:10%;
  top:4rem;
  z-index:9999;
  cursor:default;
  box-shadow: 0px 4px 5px ${COLOR.GRAY_100};
  padding: 1rem;
`

export { StatisticsContainer }