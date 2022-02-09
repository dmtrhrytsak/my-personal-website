import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

interface NavLinkProps {
  href: string;
  exact: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  exact,
  className,
  children,
}: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={classNames(className, {
          'p-2 rounded-md bg-white font-semibold dark:text-black': isActive,
        })}
      >
        {children}
      </a>
    </Link>
  );
}
