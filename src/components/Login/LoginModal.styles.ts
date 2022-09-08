import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  border-radius: 0 0 1rem 1rem;
  height: 100%;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  span {
    color: #854141;
  }
`;

const SocialLoginBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 80%;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonTitle = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: #565656;
  letter-spacing: -0.8px;
`;
export { Wrapper, SocialLoginBlock, Title, ButtonBlock, ButtonTitle };
