import classNames from 'classnames';
import { MdModeNight } from 'react-icons/md';
import { HiSun } from 'react-icons/hi';

import { useDarkModeContext } from '../contexts/dark-mode-context';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <li
      title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
      className={classNames(
        'p-2 rounded-full cursor-pointer list-none outline outline-transparent outline-offset-4 active:outline-2 active:outline-gray-500 dark:active:outline-blue-600/80',
        { 'bg-gray-200 hover:bg-gray-400 active:bg-gray-400': !isDarkMode },
        { 'bg-blue-600 hover:bg-blue-500 active:bg-blue-500': isDarkMode }
      )}
      onClick={toggleDarkMode}
    >
      <div className="animate-ping-finite absolute h-5 w-5 rounded-full bg-blue-500 opacity-75"></div>
      {isDarkMode ? (
        <HiSun className="text-2xl" />
      ) : (
        <MdModeNight className="text-2xl" />
      )}
    </li>
  );
};

export default ThemeSwitcher;
