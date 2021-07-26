import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { ModalWrapper } from './Modal.elements';
import { Button } from '../../atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleCloseModal, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.append(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDom.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleCloseModal}>Close</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
