import React from 'react';
import Portal from '../../Portals/Portal';
import { Header, ModalBlock, Content } from './Modal.styles';

interface Props {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, openModal, setOpenModal }: Props) => {
  const handleCloseButton: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget === e.target) {
      setOpenModal(false);
    }
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  window.addEventListener('keyup', (event) => {
    if (event.key !== 'Escape') return;
    setOpenModal(false);
    console.log(openModal);
  });

  return (
    <Portal>
      <ModalBlock onClick={handleCloseButton}>
        <Content>
          <Header>
            헤더
            <button type="button" onClick={modalClose}>
              닫기
            </button>
          </Header>
          {children}
        </Content>
      </ModalBlock>
    </Portal>
  );
};

export default Modal;
