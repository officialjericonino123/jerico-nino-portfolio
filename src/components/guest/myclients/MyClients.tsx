import hgtr from "../../../assets/images/img/HGTR LOGO 3.png";
import kittly from "../../../assets/images/img/kittly logo.png";
import LC from "../../../assets/images/img/LCLOGO1.png";

import { Link } from "react-router-dom";

const MyClients = () => {
  return (
    <>
      <div className="px-[50px] md:p-[100px]">
        <div className="flex flex-col text-white">
          <span className="font-RacingSans text-[1.2rem] md:text-[2rem] lg:text-[3rem] font-[800] uppercase">
            My previous clients
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly md:items-center gap-[30px] mt-[50px]">
          <Link to="/jerico-nino-portfolio/hgtr">
            <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer">
              <img src={hgtr} alt="" className="md:w-[300px]" />
              <span className="text-white font-[Montserrat] uppercase lg:text-[1.2rem]">
                Hugotero Clothing
              </span>
            </div>
          </Link>

          <Link to="/jerico-nino-portfolio/kittly">
            {" "}
            <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer">
              <img src={kittly} alt="" className="md:w-[300px]" />
              <span className="text-white font-[Montserrat] uppercase lg:text-[1.2rem]">
                Kittly
              </span>
            </div>
          </Link>

          <Link to="#">
            {" "}
            <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer">
              <img src={LC} alt="" className="md:w-[300px]" />
              <span className="text-white font-[Montserrat] uppercase lg:text-[1.2rem]">
                L&C Group of Companies
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyClients;
