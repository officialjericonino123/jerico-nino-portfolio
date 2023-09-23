import gradimage from "../../../assets/images/img/imagegrad2.png";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const AboutMeHome = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full p-[50px]">
        <div className="lg:w-[40%] flex justify-center">
          <img src={gradimage} alt="" className="" />
        </div>
        <div className="lg:w-[60%] flex flex-col items-center lg:items-start my-[50px]">
          <span className="text-white font-RacingSans uppercase font-[600] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
            about me
          </span>
          <span className="text-white font-RacingSans uppercase font-[600] text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
            Who i am?
          </span>
          <div className="mt-[40px] text-[.9rem] lg:text-[1rem">
            <span className="font-[montserrat] font-[500] text-start text-white">
              Hello, I'm Jerico U. Niño, a front-end developer who specializes
              in creating user-friendly and visually appealing websites. I use
              REACT, TYPESCRIPT, TAILWIND CSS to build beautiful and functional
              web interfaces. My job is to turn design ideas into responsive and
              efficient websites. I'm dedicated to following best practices,
              making sure websites are easy to use and perform well. I'm always
              learning to stay up-to-date with the latest trends and
              technologies in web development. I collaborate effectively with
              designers, back-end developers, and others to deliver great
              digital solutions. In a nutshell, I'm passionate about creating
              user-friendly web experiences using React, TypeScript, and
              Tailwind CSS, and I'm excited to be part of the ever-evolving
              world of web development.
            </span>
          </div>

          {/* SKILL */}
          <div className="shadow-xl bg-black bg-opacity-50 flex flex-col lg:flex-row justify-center lg:justify-evenly lg:items-center w-full h-auto lg:h-[200px] text-white font-[Montserrat] font-[700] p-[20px] rounded-md mt-[30px]">
            <div className="flex flex-col items-center gap-[10px]">
              <span>HTML</span>
              <span className="flex text-[#FFBF00] text-[1.2rem]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </span>
              <span>CSS</span>
              <span className="flex text-[#FFBF00] text-[1.2rem]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </span>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <span>JAVASCRIPT</span>
              <span className="flex text-[#FFBF00] text-[1.2rem]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </span>
              <span>REACT TYPESCRIPT</span>
              <span className="flex text-[#FFBF00] text-[1.2rem]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
                <FaRegStar />
              </span>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <span>TAILWIND CSS</span>
              <span className="flex text-[#FFBF00] text-[1.2rem]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </span>
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
        </div>
      </div>
    </>
  );
};

export default AboutMeHome;
