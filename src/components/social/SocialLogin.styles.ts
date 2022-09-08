import styled from '@emotion/styled';

const SocialLoginButton = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const KakaoLoginButton = styled(SocialLoginButton)`
  background-color: #fae100;
`;

const NaverLoginButton = styled(SocialLoginButton)`
  background-color: #00c63b;
  color: #00c63b;
`;

const GoogleLoginButton = styled(SocialLoginButton)`
  background-color: white;
`;

const GithubLoginButton = styled(SocialLoginButton)`
  background-color: #272e33;
  color: white;
`;

export { KakaoLoginButton, NaverLoginButton, GoogleLoginButton, GithubLoginButton };
