import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  /*
      Basic layout component
  */
  return (
    <>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
