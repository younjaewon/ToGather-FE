import styled from '@emotion/styled';

const ModalBlock = styled.div`
  position: fixed;
  inset: 0px;
  max-width: 100%;
  min-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: 'visible';
`;

const Header = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1rem;
  justify-content: space-between;
`;

const Content = styled.div`
  max-width: 100%;
  min-width: 40%;
  min-height: 40vh;
  border-radius: 1rem;
  top: 20%;
  right: 50%;
  position: absolute;
  background-color: #ffffff;
  transform: translate(50%);
`;

const CloseButton = styled.button`
  display: flex;
  border: none;
  background-color: #f8f9fa;
  font-size: 1.5rem;
  color: #868e96;
  cursor: pointer;
`;
export { Header, ModalBlock, Content, CloseButton };
