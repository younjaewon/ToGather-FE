import { atom } from 'recoil';

interface data {
  naver: String;
  github: String;
  google: String;
  kakao: String;
}

export const authAtom = atom<data>({
  key: 'AUTH_TOKEN',
  default: {
    naver: '',
    github: '',
    google: '',
    kakao: '',
  },
});
