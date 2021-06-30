/** @format */

import { ModalStyles } from './modalStyles';

export const Modal = ({ children, openModal, setOpenModal }) => {
  return (
    <ModalStyles openModal={openModal}>
      <div
        className="close"
        onClick={() => (setOpenModal ? setOpenModal(!openModal) : null)}>
        <h1>X</h1>
      </div>
      {children}
    </ModalStyles>
  );
};
