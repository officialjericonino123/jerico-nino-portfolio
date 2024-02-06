import hgtr from "../../../assets/images/img/HGTR LOGO 3.png";
import kittly from "../../../assets/images/img/kittly logo.png";
import LC from "../../../assets/images/img/LCLOGO1.png";

import { Link } from "react-router-dom";

const MyClients = () => {
  return (
    <>
      <div className="mt-[50px] p-[50px] md:p-[100px] bg-[#00ADB5]">
        <div className="flex flex-col text-[#EEEEEE] pt-[20px]">
          <span className="font-Inter text-[1.2rem] md:text-[2rem] lg:text-[2.5rem] font-[800] uppercase">
            My previous clients
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly md:items-center gap-[30px] mt-[50px] text-[#EEEEEE]">
          <Link to="https://hugoteroclothing.com/" target="blank">
            <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer">
              <img src={hgtr} alt="" className="w-[200px] md:w-[300px]" />
            </div>
          </Link>

          <Link to="https://kittlyofficial.com/" target="blank">
            <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer">
              <img src={kittly} alt="" className="w-[200px] md:w-[300px]" />
            </div>
          </Link>

          <Link to="https://lcgroupofcompanies.com/" target="blank">
            <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer">
              <img src={LC} alt="" className="w-[200px] md:w-[350px]" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyClients;
