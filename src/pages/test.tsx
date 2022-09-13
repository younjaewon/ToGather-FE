import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';

const Test = () => {
  const [authToken] = useRecoilState(authAtom);

  useEffect(() => {
    console.log(authToken);
  }, []);
  return <div>1231231231231231</div>;
};

export default Test;
