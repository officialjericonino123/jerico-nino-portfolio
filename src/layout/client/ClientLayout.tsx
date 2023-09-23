import Header from "../../components/guest/header/Header";
import Footer from "../../components/guest/footer/Footer";
import {Outlet} from 'react-router-dom';

const ClientLayout = () => {
  return (
    <>
      <Header />

      <main className="overflow-hidden] bg-stone-900">
        <Outlet />
      </main>
      
      <Footer />
     
    </>
  );
};

export default ClientLayout;
