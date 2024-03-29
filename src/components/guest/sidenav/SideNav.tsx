import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
import CV from "../../../assets/NIÑO-CV-NOVA-2024.pdf";
import MyLogo from "../../../assets/images/img/MYLOGO4.png"

// CLOSING SIDE NAV WHEN CLICKING LINKS
interface SideNavProps {
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ onClose }) => {
  const handleLinkClicked = () => {
    onClose();
  };

  return (
    <div className="fixed w-[300px] sm:w-[500px] md:w-[600px] lg:hidden h-[100%] inset-0 bg-white drop-shadow-lg z-20 p-[20px]">
      <div className="flex justify-start">
        <Link to="/jerico-nino-portfolio/">
          <img src={MyLogo} alt="Logo" className="w-[200px]" />
          {/* <h1 className="text-[2.5rem] font-boldtext-[#EEEEEE] hover:text-[#393E46] duration-500 ease-in-out">{"<J/>"}</h1> */}
        </Link>
      </div>

      <div className="flex flex-col text-start p-[20px] gap-[20px] text-[1.1rem] font-Poppins uppercase font-[500]">
        <Link
          to="/jerico-nino-portfolio/"
          onClick={handleLinkClicked}
          className="text-base hover:text-[#6E06F2] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/jerico-nino-portfolio/projects"
          onClick={handleLinkClicked}
          className="text-base hover:text-[#6E06F2] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          Projects
        </Link>
        <Link
          to="/jerico-nino-portfolio/services"
          onClick={handleLinkClicked}
          className="text-base hover:text-[#6E06F2] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          Services
        </Link>
        <Link
          to="/jerico-nino-portfolio/about"
          onClick={handleLinkClicked}
          className="text-base hover:text-[#6E06F2] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          About
        </Link>
        <Link
          to={CV}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClicked}
          className="text-base hover:text-[#6E06F2] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
        >
          CV
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
