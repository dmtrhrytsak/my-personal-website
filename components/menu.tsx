import { useState } from 'react';
import classNames from 'classnames';
import { HiMenuAlt4 } from 'react-icons/hi';

import NavLink from './nav-link';
import ThemeSwitcher from './theme-switcher';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    setIsMenuClosing(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMenuClosing(true);
  };

  return (
    <div
      className={classNames(
        'fixed z-10 right-[theme(space.6)] md:right-[theme(space.8)] flex items-center gap-6',
        { 'animate-expend': isMenuOpen },
        { 'animate-close': isMenuClosing }
      )}
    >
      <div
        className={classNames(
          'p-2 rounded-full cursor-pointer bg-gray-200 outline outline-offset-2 outline-2 outline-transparent',
          {
            'outline-cyan-500': isMenuOpen,
          }
        )}
        onClick={isMenuOpen ? closeMenu : openMenu}
      >
        <HiMenuAlt4 className="text-xl" />
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
