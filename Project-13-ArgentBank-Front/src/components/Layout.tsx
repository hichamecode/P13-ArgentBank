import Header from './Header/Header';
import Footer from './Footer/Footer';

interface layoutProps {
  children: React.ReactNode
}

function Layout ({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;

