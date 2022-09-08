import { atom } from 'recoil';

export const registerForm = atom({
  key: 'REGISTER_FORM',
  default: {
    nickname: '',
    profile: '',
    position: '',
    skill: [],
  },
});
