import styled from '@emotion/styled';

const Wrapper = styled.div`
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;

const InputBoxBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  height: 35px;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
`;

const InputLabel = styled.label`
  display: block;
  width: 80px;
`;

const InputText = styled.input`
  height: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0 1rem;
`;

export { Wrapper, Title, InputBoxBlock, InputLabel, InputText };
