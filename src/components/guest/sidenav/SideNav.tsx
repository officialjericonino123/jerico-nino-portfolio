import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/img/Logo/Artboard 1.png";
// import { IconContext } from "react-icons";
import Resume from "../../../assets/jerico-u.-niño.pdf";

// CLOSING SIDE NAV WHEN CLICKING LINKS
interface SideNavProps {
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ onClose }) => {
  
  const handleLinkClicked = () => {
    onClose();
  };

  // SHOP TOGGLE
  const [sideNavShop, setSideNavShop] = useState<boolean>(false);

  const toggleShopEnter = () => {
    setSideNavShop(!sideNavShop); // Toggle the state between true and false
  };


  return (
    <div className="fixed w-[300px] sm:w-[500px] md:w-[600px] lg:hidden h-[100%] inset-0 bg-black z-20 p-[20px] overflow-y-scroll">
      <div className="flex justify-center text-white">
        <Link to="/jerico-nino-portfolio/">
          <img src={Logo} alt="Logo" onClick={handleLinkClicked} className="w-[150px]" />
        </Link>
      </div>

      <div className="flex flex-col justify-center text-center p-[20px] gap-[40px] text-[1.1rem] font-[Montserrat] uppercase font-[500]">
        <Link to="/jerico-nino-portfolio/" onClick={handleLinkClicked} className="text-white">
          Home
        </Link>
        <Link onClick={toggleShopEnter} to="#" className="text-white">
          Projects
        </Link>

        {/* SHOP DROPDOWN */}
        {sideNavShop && (
          <div className="flex flex-col border-[1px] border-stone-500 rounded-[10px] h-auto p-[20px] gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <span className="text-[1.5rem] font-[600] text-white">
                Projects
              </span>
              <Link
                to="/jerico-nino-portfolio/hgtr"
                onClick={handleLinkClicked}
                className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
              >
                Hugotero Clothing
              </Link>
              <Link
                to="/jerico-nino-portfolio/kittly"
                onClick={handleLinkClicked}
                className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
              >
                Kittly
              </Link>
              <Link
                to="#"
                onClick={handleLinkClicked}
                className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
              >
                L&C Group of Companies
              </Link>
            </div>
          </div>
        )}
        <Link
          to="/jerico-nino-portfolio/services"
          onClick={handleLinkClicked}
          className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          Services
        </Link>
        <Link
          to="/jerico-nino-portfolio/about"
          onClick={handleLinkClicked}
          className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          About
        </Link>
        <Link
          to={Resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClicked}
          className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          CV
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
