import React, { useState } from 'react';
import Modal from './Modal';

const useModal = (initialstate = false) => {
  const [isOpen, setOpenState] = useState(initialstate);
  const handleCloseModal = () => setOpenState(false);
  const handleOpenModal = () => setOpenState(true);

  return {
    Modal,
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
