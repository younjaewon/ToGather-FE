import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ openModal, setOpenModal }: Props) => {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      깃허브, 구글, 카카오, 네이버
    </Modal>
  );
};

export default LoginModal;
