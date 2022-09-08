import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useRecoilState } from 'recoil';
import { registerForm } from '../../contexts/RegisterAtom';
import { InputBoxBlock, Title, InputLabel, InputText, Wrapper } from './RegisterModal.styles';

const position = [
  { value: 'backEnd', label: '백엔드' },
  { value: 'frontEnd', label: '프론트엔드' },
  { value: 'webbDesiner', label: '웹디자이너' },
];

const stackSkill = [
  { value: 'React', label: 'React' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Vue', label: 'Vue' },
  { value: 'NodeJs', label: 'NodeJs' },
  { value: 'Spring', label: 'Spring' },
  { value: 'Java', label: 'Java' },
  { value: 'Go', label: 'Go' },
  { value: 'C', label: 'C' },
  { value: 'Python', label: 'Python' },
  { value: 'Django', label: 'Django' },
];

const RegisterModal = () => {
  const [formData, setFormData] = useRecoilState(registerForm);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (targetValue: any, targetName: any) => {
    const { name } = targetName;
    const { value } = targetValue;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectClear = (targetValue: any, targetAction: any) => {
    const { action, name } = targetAction;
    if (action === 'clear') {
      setFormData({ ...formData, [name]: [] });
    } else {
      for (let item of targetValue) {
        let { value } = item;
        setFormData({ ...formData, [name]: [...formData[name], value] });
      }
    }
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <form>
        <InputBoxBlock>
          <InputLabel htmlFor="nickname">닉네임</InputLabel>
          <InputText
            id="nickname"
            name="nickname"
            type="text"
            value={formData.nickname}
            onChange={handleChangeInput}
          />
        </InputBoxBlock>
        <InputBoxBlock>
          <InputLabel htmlFor="profile">프로필</InputLabel>
          <InputText
            id="profile"
            name="profile"
            type="text"
            value={formData.profile}
            onChange={handleChangeInput}
          />
        </InputBoxBlock>
        <InputBoxBlock>
          <InputLabel htmlFor="position">포지션</InputLabel>
          <Select
            className="customSelect"
            defaultValue={position[0]}
            id="position"
            name="position"
            placeholder="포지션"
            options={position}
            onChange={handleSelectChange}
          />
        </InputBoxBlock>
        <InputBoxBlock>
          <InputLabel htmlFor="skill">기술 태그</InputLabel>
          <CreatableSelect
            isClearable
            isMulti
            id="skill"
            className="customSelect"
            name="skill"
            placeholder="기술 태그"
            options={stackSkill}
            onChange={handleSelectClear}
          />
        </InputBoxBlock>
      </form>
    </Wrapper>
  );
};

export default RegisterModal;
