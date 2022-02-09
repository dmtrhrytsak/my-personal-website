type ContactItemProps = {
  icon: JSX.Element;
  text: string;
  onClick: (text: string) => void;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, onClick }) => {
  return (
    <article className="group flex gap-3">
      <div className="w-max p-2 border-2 border-transparent rounded-md bg-white dark:border-neutral-600 dark:bg-neutral-700">
        {icon}
      </div>

      <div className="flex-grow p-2 pr-4 border-2 border-transparent rounded-md bg-white dark:border-neutral-600 dark:bg-neutral-700">
        <p
          className="text-right cursor-pointer dark:text-gray-400"
          onClick={() => onClick(text)}
        >
          {text}
        </p>
      </div>
    </article>
  );
};

export default ContactItem;
