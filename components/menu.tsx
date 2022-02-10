import { useState } from 'react';
import classNames from 'classnames';
import { HiMenuAlt4 } from 'react-icons/hi';

import NavLink from './nav-link';
import ThemeSwitcher from './theme-switcher';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-10 right-[theme(space.6)] md:right-[theme(space.8)] flex items-center gap-8">
      <div
        className={classNames(
          'p-2 rounded-full cursor-pointer bg-gray-200 ring-offset-2',
          {
            'ring-2 ring-transparent ring-cyan-500': isMenuOpen,
          }
        )}
        onClick={toggleMenu}
      >
        <HiMenuAlt4 className="text-2xl" />
      </div>

      {isMenuOpen && (
        <ul className="absolute z-10 top-14 flex flex-col items-center gap-4 w-full py-6 border-2 border-transparent rounded-md bg-gray-200 text-lg dark:border-white">
          <li>
            <NavLink
              href="/"
              className="dark:text-gray-400 hover:underline hover:underline-offset-2"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/contact"
              className="dark:text-gray-400 hover:underline hover:underline-offset-2"
              exact
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}

      <ThemeSwitcher />
    </div>
  );
};

export default Menu;
