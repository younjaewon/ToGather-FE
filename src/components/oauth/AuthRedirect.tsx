import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const AuthRedirect = () => {
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const navigation = useNavigate();
  const location = useLocation();
  const { social } = useParams();

  // token
  // git, kakao = new URL
  // google = location
  // naver = token

  const googleToken = location;
  // const token = location.hash.split('=')[1].split('&')[0];
  const param = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (social) {
      // 백엔드에 authToken 전송
      // 백엔드 api 와 통신 후 authToken이 아닌  refresh와 access 토큰 넣기 atom initial 값 구조 변경
      setAuthToken({ ...authToken, [social]: param });
    }
    navigation('/');
  }, []);

  const getAccessToken = async (token: string) => {
    // github, naver, kakao, google 분기 처리 후 서버와 통신 후 refresh토큰과 access토근 얻어오기
  };
  debugger;

  return <div>로딩중</div>;
};

export default AuthRedirect;
