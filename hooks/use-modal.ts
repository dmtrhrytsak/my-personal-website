import { useState } from 'react';

const useModal = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('');

  const hideModal = () => {
    setIsActive(false);
  };

  const showModal = (modalMessage: string) => {
    setIsActive(true);
    setMessage(modalMessage);

    setTimeout(() => {
      hideModal();
    }, 900);
  };

  return { isActive, message, showModal, hideModal };
};

export default useModal;
