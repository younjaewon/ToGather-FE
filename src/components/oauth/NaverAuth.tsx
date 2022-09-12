import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';

const NaverAuth = () => {
  const [authToken, setAuthToken] = useRecoilState(authAtom);
  const location = useLocation();
  const navigate = useNavigate();

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    debugger;
    setAuthToken({ ...authToken, naver: token });
  };
  useEffect(() => {
    getNaverToken();
    navigate('/');
    console.log(authToken);
  }, []);
  return <div>로딩중 입니다.</div>;
};

export default NaverAuth;
