import Sidebar from './Sidebar';
import Footer from './Footer';
import "../app/globals.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;