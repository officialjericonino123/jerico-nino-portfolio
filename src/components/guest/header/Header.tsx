import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import SideNav from "../../../components/guest/sidenav/SideNav";
import CV from "../../../assets/NIÑO-CV-NOVA-2024.pdf";

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const Header = () => {
  // HUMBERGER TOGGLE
  const [ishamburgerToggle, setHamburgerToggle] = useState(false);
  // // SIDECART OPEN
  // const [issidecartShow, setSideCartShow] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // BODY OVER FLOW HIDDEN
  useEffect(() => {
    if (ishamburgerToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [ishamburgerToggle]);

  const HamburgerToggle = () => {
    setHamburgerToggle(!ishamburgerToggle); // Toggle the state between true and false
  };

  // const SideCartShow = () => {
  //   setSideCartShow(true);
  //   closeDropdown(); // Close the dropdown menu
  // };

  return (
    <>
      <header className="absolute top-0 z-50 w-full font-[Montserrat] font-[500]">
        <nav className="flex justify-start lg:justify-evenly items-center p-5 uppercase font-semibold bg-transparent text-[#00ADB5] font-Inter h-[100px]">
          <div className="flex justify-start">
            <Link to="/">
              {/* <img src={Logo} alt="Logo" className="w-[150px]"/> */}
              <h1 className="text-[2.5rem] font-bold text-[#222831] md:text-[#00ADB5] hover:text-[#EEEEEE] duration-500 ease-in-out">{"<J/>"}</h1>
            </Link>
          </div>
          <div className="hidden lg:flex gap-[20px] font-bold">
            <Link
              to="/jerico-nino-portfolio/"
              className="text-base hover:text-[#EEEEEE] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              Home
            </Link>
            <Link
              to="/jerico-nino-portfolio/projects"
              className="text-base hover:text-[#EEEEEE] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              Projects
            </Link>
            <Link
              to="/jerico-nino-portfolio/services"
            
              className="text-base hover:text-[#EEEEEE] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              Services
            </Link>
            <Link
              to="/jerico-nino-portfolio/about"
            
              className="text-base hover:text-[#EEEEEE] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              About
            </Link>
            <Link
              to={CV}
              target="_blank"
              rel="noopener noreferrer"
            
              className="text-base hover:text-[#EEEEEE] transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              CV
            </Link>
          </div>

          {/* hamburger */}
          <button
            onClick={HamburgerToggle}
            className="absolute top-[33px] right-[30px] lg:hidden text-[1.5rem] md:text-[#222831] hover:text-[#EEEEEE] duration-1000 ease-in-out hover:animate-bounce"
          >
            <FaBars />
          </button>

          {ishamburgerToggle && (
            <SideNav onClose={() => setHamburgerToggle(false)} />
          )}

          {/* <div className="hidden lg:flex justify-center items-center gap-[10px]">
            {user.role === "" && !user.status && (
              <Link to="/login">
                <button className="border-2 p-[10px] rounded-[10px] uppercase hover:text-white transition duration-300 ease-in-out hover:bg-zinc-900 hover:scale-[1.1]">
                  Login
                </button>
              </Link>
            )}
            <button
              onClick={SideCartShow}
              className="p-[10px] text-[2rem] text-center text-white hover:-translate-y-1 hover:text-[#f12020] duration-300"
            >
              <FaCartShopping />
            </button>
            {issidecartShow && (
              <SideCart
                onClose={() => {
                  setSideCartShow(false);
                }}
              />
            )}
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
