const Footer = () => {
  return (
    <footer className="mt-auto text-center">
      <span className="inline-block p-5 border-2 border-transparent rounded-md bg-white cursor-pointer hover:underline hover:underline-offset-2 dark:border-neutral-600 dark:bg-neutral-700 dark:text-gray-400">
        {new Date().getFullYear()} &#9400;
      </span>
    </footer>
  );
};

export default Footer;
