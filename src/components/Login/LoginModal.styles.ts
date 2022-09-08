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
  text-align: center;
  span {
    color: #854141;
  }
`;

const SocialLoginBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  margin: 2rem 0;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoogleButton = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GithubButton = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #272e33;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const KakaoButton = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #fae100;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NaverButton = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #00c63b;
  color: #00c63b;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonTitle = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: #565656;
  letter-spacing: -0.8px;
`;
export {
  Wrapper,
  SocialLoginBlock,
  Title,
  ButtonBlock,
  GoogleButton,
  GithubButton,
  KakaoButton,
  NaverButton,
  ButtonTitle,
};
