import Head from 'next/head';
import { BsTelegram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { AiFillPhone } from 'react-icons/ai';

import ContactItem from '../components/contact-item';
import { useModalContext } from '../contexts/popup-modal-context';

const Contact = () => {
  const { showModal } = useModalContext();

  const copyToClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);

    showModal('Copied!');
  };

  return (
    <section>
      <Head>
        <title>Contact | Hrytsak.js</title>
        <meta
          name="description"
          content="Personal website of Software Engineer Dmytro Hrytsak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center h-52 mb-8 border-2 border-transparent rounded-md bg-white dark:border-neutral-600 dark:bg-neutral-700 md:h-80">
        <p className="text-lg dark:text-white">
          I&apos;d love to hear from you!
        </p>
        <p>❤️💌</p>
      </div>

      <section className="mb-10">
        <p className="mb-5 text-3xl font-bold dark:text-white">Contacts</p>

        <div className="space-y-4">
          <ContactItem
            icon={
              <BsTelegram className="text-2xl dark:text-gray-400 dark:group-hover:text-white" />
            }
            text="@dmtrhrytsak"
            onClick={copyToClipBoard}
          />

          <ContactItem
            icon={
              <SiGmail className="text-2xl dark:text-gray-400 dark:group-hover:text-white" />
            }
            text="hrytsakmail@gmail.com"
            onClick={copyToClipBoard}
          />

          <ContactItem
            icon={
              <AiFillPhone className="text-2xl dark:text-gray-400 dark:group-hover:text-white" />
            }
            text="+380 (96) 453 0936"
            onClick={copyToClipBoard}
          />
        </div>
      </section>
    </section>
  );
};

export default Contact;
