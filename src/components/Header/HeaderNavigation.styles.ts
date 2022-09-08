import styled from '@emotion/styled';

const NavigationBlock = styled.div`
  width: 100%;
  height: 4rem;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  position: sticky;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  top: 0px;
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 30px;
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const RegisterButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7rem;
`;

export { Wrapper, NavigationBlock, LoginButton, RegisterButton, CategoryBlock, ButtonBlock };
