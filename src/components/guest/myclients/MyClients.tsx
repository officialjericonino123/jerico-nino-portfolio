import hgtr from "../../../assets/images/img/HGTR LOGO 3.png";
import kittly from "../../../assets/images/img/kittly logo.png";
import LC from "../../../assets/images/img/LCLOGO1.png";

import { Link } from "react-router-dom";

const MyClients = () => {
  return (
    <>
      <div className="my-[50px] p-[50px] md:p-[100px] bg-[#6E06F2]">
        <div
          className="flex flex-col text-[#EEEEEE] mx-auto md:max-w-3xl xl:max-w-6xl px-7 md:px-0"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <span className="text-center xl:text-start font-Poppins text-[1.5rem] md:text-[2rem] font-[800] uppercase">
            My previous clients
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly md:items-center gap-[30px] mt-[50px] text-[#EEEEEE] mx-auto md:max-w-3xl xl:max-w-6xl px-7 md:px-0">
          <Link to="https://hugoteroclothing.com/" target="blank">
            <div
              className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img src={hgtr} alt="" className="w-[200px] md:w-[300px]" />
            </div>
          </Link>

          <Link to="https://kittlyofficial.com/" target="blank">
            <div
              className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img src={kittly} alt="" className="w-[200px] md:w-[300px]" />
            </div>
          </Link>

          <Link to="https://lcgroupofcompanies.com/" target="blank">
            <div
              className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img src={LC} alt="" className="w-[200px] md:w-[350px]" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyClients;
