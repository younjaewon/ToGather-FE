import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';

const KakaoAuth = () => {
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const navigation = useNavigate();

  const param = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (param) {
      // 백엔드에 authToken 전송
      // 백엔드 api 와 통신 후 authToken이 아닌  refresh와 access 토큰 넣기 atom initial 값 구조 변경
      // 다른 소셜 로그인(Github 제외) 통신 구조 동일 하므로 추상화를 통해 구현 해야함
      setAuthToken({ ...authToken, kakao: param });
    }
    navigation('/');
  }, [param]);

  return <div>로딩중입니다.</div>;
};

export default KakaoAuth;
