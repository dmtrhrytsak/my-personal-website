import React, { useContext } from 'react';

import PopupModal from '../components/popup-modal';
import useModal from '../hooks/use-modal';

type ModalContextType = {
  isActive: boolean;
  message: string;
  showModal: (modalMessage: string) => void;
  hideModal: () => void;
};

export const ModalContext = React.createContext<ModalContextType>({
  isActive: false,
  message: '',
  showModal: () => {},
  hideModal: () => {},
});

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { isActive, message, showModal, hideModal } = useModal();

  return (
    <ModalContext.Provider value={{ isActive, message, showModal, hideModal }}>
      {children}
      <PopupModal />
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
