import Link from 'next/link';
import Menu from './menu';

export default function Header() {
  return (
    <header className="mb-10">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-semibold hover:underline hover:underline-offset-2 dark:text-white">
            Hrytsak.js
          </a>
        </Link>

        <Menu />
      </nav>
    </header>
  );
}
