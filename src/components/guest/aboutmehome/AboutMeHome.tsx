import gradimage from "../../../assets/images/img/imagegrad.jpg";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa6";
import { SiAdobephotoshop, SiAdobexd, SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
// import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const AboutMeHome = () => {
  return (
    <>
      <div className="bg-[#6E06F2]">
        <div className="flex flex-col lg:flex-row p-[20px] lg:p-[50px] lg:mx-[100px]">
          <div className="lg:w-[40%] flex justify-center items-center xl:p-[50px]">
            <img
              src={gradimage}
              alt=""
              className="lg:w-[350px] w-full lg:h-[400px] h-full"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            />
          </div>
          <div
            className="lg:w-[60%] flex flex-col items-start my-[50px] lg:px-[50px] text-[#EEEEEE] font-Inter"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <span className="uppercase text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] font-[800]">
              about me
            </span>
            <div className="mt-[40px] text-[.8rem] lg:text-[1rem]">
              <span className="font-Inter font-[400] text-start">
                Hello, I'm Jerico U. Niño, a front-end developer who specializes
                in creating user-friendly and visually appealing websites. I use
                REACT, TYPESCRIPT, TAILWIND CSS to build beautiful and
                functional web interfaces. My job is to turn design ideas into
                responsive and efficient websites. I'm dedicated to following
                best practices, making sure websites are easy to use and perform
                well. I'm always learning to stay up-to-date with the latest
                trends and technologies in web development. I collaborate
                effectively with designers, back-end developers, and others to
                deliver great digital solutions. In a nutshell, I'm passionate
                about creating user-friendly web experiences using React,
                TypeScript, and Tailwind CSS, and I'm excited to be part of the
                ever-evolving world of web development.
              </span>
            </div>

            <div className="mt-[30px] grid gap-[30px]">
              {/* FRONT END */}
              <div className="flex flex-col gap-[15px] font-Inter uppercase font-[800]">
                <div>
                  <h1>FrontEnd Developement</h1>
                </div>
                <div className="flex gap-[10px] text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] items-center">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <FaJs />
                  <FaReact />
                  <SiTailwindcss />
                  <FaBootstrap />
                </div>
              </div>

              {/* BACK END */}
              <div className="flex flex-col gap-[15px] font-Inter uppercase font-[800]">
                <div>
                  <h1>BackEnd Developement</h1>
                </div>
                <div className="flex gap-[10px] text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] items-center">
                  <FaLaravel />
                  <FaPhp />
                  <SiMysql />
                </div>
              </div>

              {/* TOOLS */}
              <div className="flex flex-col gap-[15px] font-Inter uppercase font-[800]">
                <div>
                  <h1>Tools</h1>
                </div>
                <div className="flex gap-[10px] text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] items-center">
                  <FaFigma />
                  <SiAdobexd />
                  <SiAdobephotoshop />
                  <FaGithub />
                </div>
              </div>
            </div>

            {/* SKILL */}
            {/* <div className="shadow-xl bg-black bg-opacity-50 flex flex-col lg:flex-row justify-center lg:justify-evenly lg:items-center w-full h-auto lg:h-[200px] text-white font-[Montserrat] font-[700] p-[20px] rounded-md mt-[30px] gap-[20px]">
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="flex lg:flex-col gap-[10px] items-center text-center">
                  <span>HTML</span>
                  <span className="flex text-[#FFBF00] text-[1.2rem]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </span>
                </div>
                <div className="flex lg:flex-col gap-[10px] items-center text-center">
                  <span>CSS</span>
                  <span className="flex text-[#FFBF00] text-[1.2rem]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="flex lg:flex-col gap-[10px] items-center text-center">
                  <span>JAVASCRIPT</span>
                  <span className="flex text-[#FFBF00] text-[1.2rem]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </span>
                </div>
                <div className="flex lg:flex-col gap-[10px] items-center text-center">
                  <span>REACT TYPESCRIPT</span>
                  <span className="flex text-[#FFBF00] text-[1.2rem]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                    <FaRegStar />
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <div className="flex lg:flex-col gap-[10px] items-center text-center">
                  <span>TAILWIND CSS</span>
                  <span className="flex text-[#FFBF00] text-[1.2rem]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </span>
                </div>
                <div className="flex lg:flex-col gap-[10px] items-center text-center">
                  <span>PHP</span>
                  <span className="flex text-[#FFBF00] text-[1.2rem]">
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeHome;
