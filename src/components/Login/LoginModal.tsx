import React, { useState } from 'react';
import GithubSocialLogin from '../social/GithubSocialLogin';
import GoogleSocialLogin from '../social/GoogleSocialLogin';
import KaKaoSocialLogin from '../social/KaKaoSocialLogin';
import NaverSocialLogin from '../social/NaverSocialLogin';
import { ButtonBlock, SocialLoginBlock, Title, Wrapper, ButtonTitle } from './LoginModal.styles';

const LoginModal = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <span>ToGather</span>에 오신 것을 환영합니다!
        </Title>
        <SocialLoginBlock>
          <ButtonBlock>
            <GoogleSocialLogin />
            <ButtonTitle>Google 로그인</ButtonTitle>
          </ButtonBlock>
          <ButtonBlock>
            <GithubSocialLogin />
            <ButtonTitle>Github 로그인</ButtonTitle>
          </ButtonBlock>
          <ButtonBlock>
            <KaKaoSocialLogin />
            <ButtonTitle>Kakao 로그인</ButtonTitle>
          </ButtonBlock>
          <ButtonBlock>
            <NaverSocialLogin />
            <ButtonTitle>Naver 로그인</ButtonTitle>
          </ButtonBlock>
        </SocialLoginBlock>
      </Wrapper>
    </>
  );
};

export default LoginModal;
