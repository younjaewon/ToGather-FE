import { StatisticsContainer } from "./Statistics.style";

interface statisticsProps {
  statisticsIsOpen: boolean
}

const Statistics = ({statisticsIsOpen} : statisticsProps) => {
  return(

      <StatisticsContainer statisticsIsOpen={statisticsIsOpen}/>

  )
}

export default Statistics;