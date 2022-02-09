import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import classNames from 'classnames';

import { useModalContext } from '../contexts/popup-modal-context';

const PopupModal = () => {
  const { isActive, message } = useModalContext();
  const [isHydrate, setIsHydrate] = useState(false);

  useEffect(() => {
    setIsHydrate(true);
  }, []);

  if (!isHydrate) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={classNames(
        'fixed bottom-8 right-8 p-3 rounded-md bg-blue-500 text-white translate-y-96 transition-transform duration-300 ease-in-out',
        { 'translate-y-0': isActive }
      )}
    >
      {message}
    </div>,
    document.querySelector('#popupModal')!
  );
};

export default PopupModal;
