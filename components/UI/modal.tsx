import React from 'react';

type ModalType = {
  isVisible: boolean;
  visibleAction: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ isVisible, visibleAction }: ModalType) => {
  return (
    <>
      {isVisible && (
        <div
          className='fixed top-0 left-0 h-[100vh] w-full bg-black/10 z-[800]'
          onClick={() => visibleAction((prev) => !prev)}
        />
      )}
    </>
  );
};

export default Modal;
