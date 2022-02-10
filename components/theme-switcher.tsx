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
        'p-2 rounded-full cursor-pointer list-none ring-offset-4 active:ring-cyan-500 ring-offset-gray-100/80 dark:ring-offset-neutral-800/50 ring-2 ring-transparent',
        { 'bg-gray-200 hover:bg-gray-400 active:bg-gray-400': !isDarkMode },
        { 'bg-blue-600 hover:bg-blue-500 active:bg-blue-500': isDarkMode }
      )}
      onClick={toggleDarkMode}
    >
      <div className="animate-ping-finite absolute h-6 w-6 rounded-full bg-blue-500 opacity-75"></div>
      {isDarkMode ? (
        <HiSun className="text-2xl" />
      ) : (
        <MdModeNight className="text-2xl" />
      )}
    </li>
  );
};

export default ThemeSwitcher;
