import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="relative py-8 bg-gray-100 dark:bg-neutral-800">
        <div className="container flex flex-col min-h-screen mx-auto px-6 md:px-8">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <div id="popupModal" />
    </>
  );
};

export default Layout;
