import { Link, useLocation } from "react-router-dom";
import { useState, useEffect  } from "react";
import {FaBars } from "react-icons/fa6";
import SideNav from "../../../components/guest/sidenav/SideNav";
// import SideCart from "../../../components/guest/sidecart/SideCart";
import Resume from "../../../assets/jerico-u.-niño.pdf";
import Logo from "../../../assets/images/img/Logo/Artboard 1.png"

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

// import { UserContext } from "../../../context/AuthContext";

const Header = () => {
  // const { user } = useContext(UserContext); // Make sure UserContext is imported and properly set up
  // DROPDOWN
  const [isDropDown, setDropDown] = useState(false);
  // HUMBERGER TOGGLE
  const [ishamburgerToggle, setHamburgerToggle] = useState(false);
  // // SIDECART OPEN
  // const [issidecartShow, setSideCartShow] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleClick = () => {
    setDropDown(!isDropDown);
  };

  const closeDropdown = () => {
    setDropDown(false);
  };


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
        <nav className="flex justify-evenly items-center p-5 uppercase font-semibold bg-black text-stone-500 h-[100px]">
          <Link to="/" onClick={closeDropdown}>
            <img src={Logo} alt="Logo" className="w-[150px]"/>
          </Link>
          <div className="hidden lg:flex gap-[20px]">
            <Link
              to="/jerico-nino-portfolio/"
              onClick={closeDropdown}
              className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              Home
            </Link>
            <Link
              to="#"
              onClick={handleClick}
              className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              Projects
            </Link>
            {/* MEGA DROPDOWN */}
            {isDropDown && (
              <div className="lg:absolute lg:top-[90px] lg:left-[350px] xl:left-[600px] 2xl:left-[950px] right-0 w-[500px] h-auto bg-black rounded-[20px] pb-[20px]">
                <div className="flex justify-center mt-[50px] p-[10px]">
                  <div className="flex flex-col text-center gap-[20px]">
                    <span className="text-[2.5rem] font-[600] text-white font-RacingSans">
                      Projects
                    </span>
                    <Link
                      to="/jerico-nino-portfolio/hgtr"
                      onClick={closeDropdown}
                      className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
                    >
                      Hugotero Clothing
                    </Link>
                    <Link
                      to="/jerico-nino-portfolio/kittly"
                      onClick={closeDropdown}
                      className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
                    >
                      Kittly
                    </Link>
                    <Link
                      to="/minimalist-tees"
                      onClick={closeDropdown}
                      className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
                    >
                      L&C Group of Companies
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <Link
              to="/jerico-nino-portfolio/services"
              onClick={closeDropdown}
              className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              Services
            </Link>
            <Link
              to="/jerico-nino-portfolio/about"
              onClick={closeDropdown}
              className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              About
            </Link>
            <Link
              to={Resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeDropdown}
              className="text-base hover:text-white transition duration-300 ease-in-out hover:ease-in-out hover:-translate-y-1"
            >
              CV
            </Link>
          </div>

          {/* hamburger */}
          <button
            onClick={HamburgerToggle}
            className="absolute top-[33px] right-[30px] lg:hidden text-[1.5rem] text-white"
          >
            <FaBars />
          </button>

          {ishamburgerToggle && (
            <SideNav onClose={() => setHamburgerToggle(false)} />
          )}

          {/* <div className="hidden lg:flex justify-center items-center gap-[10px]">
            {user.role === "" && !user.status && (
              <Link to="/login" onClick={closeDropdown}>
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
