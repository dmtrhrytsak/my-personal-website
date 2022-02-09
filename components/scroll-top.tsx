import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      title="Scroll to top"
      className="fixed right-5 bottom-12 flex items-center justify-center w-16 h-16 text-2xl transition-transform duration-300 hover:-translate-y-2 dark:text-white"
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollTop;
