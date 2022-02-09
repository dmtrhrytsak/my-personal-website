import type { AppProps } from 'next/app';

import Layout from '../components/layout';
import { DarkModeProvider } from '../contexts/dark-mode-context';
import { ModalProvider } from '../contexts/popup-modal-context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
