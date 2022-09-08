import { atom } from 'recoil';

interface registerData {}

export const registerForm = atom({
  key: 'REGISTER_FORM',
  default: {
    nickname: '',
    profile: '',
    position: '',
    skill: '',
  },
});
