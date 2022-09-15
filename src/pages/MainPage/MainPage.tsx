import HeaderNavigation from 'src/components/Header/HeaderNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import StudyListContainer from 'src/components/Study/StudyContainer';
import Statistics from '../../components/Statistics/Statistics';
import { Main } from './MainPage.style';

const queryClient = new QueryClient();

const MainPage = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Statistics />
        <Main>
          <StudyListContainer />
        </Main>
      </QueryClientProvider>
    </>
  );
};

export default MainPage;
