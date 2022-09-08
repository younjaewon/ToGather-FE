import React from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoAuth = () => {
  const navigation = useNavigate();
  const param = new URL(window.location.href).searchParams.get('code');
  console.log(param);

  navigation('/');

  return <div>로딩중입니다.</div>;
};

export default KakaoAuth;
