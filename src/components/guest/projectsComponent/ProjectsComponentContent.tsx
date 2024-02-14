import { FaArrowLeft, FaLink } from "react-icons/fa6";
import HgtrProject from "../../../assets/images/img/Projects/HgtrProject.png";
import KittlyProject from "../../../assets/images/img/Projects/KittlyProject.png";
import LCProject from "../../../assets/images/img/Projects/LCProject.png";
import YoutubeClone from "../../../assets/images/img/Projects/YoutubeClone.png";
import { Link } from "react-router-dom";

const ProjectsComponentContent: React.FC = () => {
  return (
    <>
      <div className="lg:mt-[50px] lg:mx-[100px] mx-[20px]">
        <Link to="/jerico-nino-portfolio/">
          <div className="w-full flex text-[16px] md:text-[1.1rem] items-center gap-[10px] font-Poppins font-bold uppercase text-[#6E06F2] hover:text-[#24262f] duration-500 cursor-pointer">
            <FaArrowLeft />
            <span>Go Back</span>
          </div>
        </Link>

        <div className="text-center lg:text-start font-Poppins m-[20px] lower tracking-tight">
          <span className="text-[2.5rem] lg:text-[4rem] font-[800] text-[#24262f]">
            My <span className="text-[#6E06F2]">Projects.</span>
          </span>
        </div>

        <div className="my-[20px] p-[20px] font-Poppins">
          {/* HUGOTERO CLOTHING */}
          <div className="relative">
            <img
              src={HgtrProject}
              alt=""
              className="shadow-2xl w-full 2xl:w-[1000px] my-[20px]"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            />
            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[50%] 2xl:right-[0px]"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:justify-end 2xl:items-end 2xl:text-center">
                <span className="font-[500] text-[1.2rem] md:text-[2rem] 2xl:text-[1.2rem] text-[#24262f]">
                  E-Commerce Clothing Store
                </span>
                <span className="font-[800] uppercase text-[1.5rem] md:text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] text-[#6E06F2]">
                  HUGOTERO CLOTHING
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#24262f]">
                <span className="text-[1rem]">
                  I have developed a full-stack web application utilizing
                  Laravel, React with TypeScript, and Tailwind CSS from the
                  ground up. The backend is seamlessly integrated with a MySQL
                  database. Users can create an account, benefiting from
                  features such as email verification and a seamless form
                  validation experience. Once registered, users enjoy the
                  freedom to effortlessly place orders or add products to their
                  cart from the available online inventory. The application
                  delivers a smooth and engaging experience, ensuring a
                  user-friendly journey from account creation to exploring and
                  interacting with the available products.
                </span>
              </div>
              <div className="flex gap-[10px] justify-end text-center my-[10px] text-[#6E06F2] uppercase font-bold text-[.6rem]">
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  Laravel
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-end 2xl:justify-end mt-[20px]">
                <Link to="https://hugoteroclothing.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#6E06F2] text-[#6E06F2] hover:bg-[#6E06F2] active:bg-[#ac2020] hover:text-white duration-700">
                    Visit Project <FaLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* KITTLY */}
          <div className="relative">
            <div className="flex 2xl:justify-end 2xl:items-end my-[20px] lg:my-[300px]">
              <img
                src={KittlyProject}
                alt=""
                className="shadow-2xl w-full 2xl:w-[1000px]"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              />
            </div>

            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[60%] 2xl:left-[0]"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:items-start 2xl:text-center">
                <span className="font-[500] text-[1.2rem] md:text-[2rem] 2xl:text-[1.2rem] text-[#24262f]">
                  E-Commerce Bag Store
                </span>
                <span className="font-[800] uppercase text-[1.5rem] md:text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] text-[#6E06F2]">
                  Kittly
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#24262f]">
                <span className="text-[1rem]">
                  I have developed a full-stack web application utilizing
                  Laravel, React with TypeScript, and Tailwind CSS from the
                  ground up. The backend is seamlessly integrated with a MySQL
                  database. Users can create an account, benefiting from
                  features such as email verification and a seamless form
                  validation experience. Once registered, users enjoy the
                  freedom to effortlessly place orders or add products to their
                  cart from the available online inventory. The application
                  delivers a smooth and engaging experience, ensuring a
                  user-friendly journey from account creation to exploring and
                  interacting with the available products.
                </span>
              </div>
              <div className="flex gap-[10px] justify-start text-center my-[10px] text-[#6E06F2] uppercase font-bold text-[.6rem]">
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  Laravel
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-start 2xl:justify-start mt-[20px]">
                <Link to="https://kittlyofficial.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#6E06F2] text-[#6E06F2] hover:bg-[#6E06F2] active:bg-[#ac2020] hover:text-white duration-700">
                    Visit Project <FaLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* L&C GROUP OF COMPANIES */}
          <div className="relative">
            <img
              src={LCProject}
              alt=""
              className="shadow-2xl w-full 2xl:w-[1000px] my-[20px] 2xl:my-[200px]"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            />
            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[60%] 2xl:right-[0px]"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:justify-end 2xl:items-end 2xl:text-center">
                <span className="font-[500] text-[1.2rem] md:text-[2rem] 2xl:text-[1.2rem] text-[#24262f]">
                  Static Company Website
                </span>
                <span className="font-[800] uppercase text-[1.2rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] text-[#6E06F2]">
                  L&C Group of Companies
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#393E46]">
                <span className="text-[1rem]">
                  I'm excited to share my first static company website! I used
                  React, TypeScript, and Tailwind CSS to create a cool and
                  responsive design. It was a bit challenging, but I enjoyed
                  every step of bringing my ideas to life. This website not only
                  introduces the company but also reflects my growing skills in
                  web development. I look forward to learning more and creating
                  even better digital experiences in the future!
                </span>
              </div>
              <div className="flex gap-[10px] justify-end text-center my-[10px] text-[#6E06F2] uppercase font-bold text-[.6rem]">
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex 2xl:justify-end mt-[20px]">
                <Link to="https://lcgroupofcompanies.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#6E06F2] text-[#6E06F2] hover:bg-[#6E06F2] active:bg-[#ac2020] hover:text-white duration-700">
                    Visit Project <FaLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* YOUTUBE CLONE */}
          <div className="relative">
            <div className="flex 2xl:justify-end 2xl:items-end my-[20px] lg:my-[300px]">
              <img
                src={YoutubeClone}
                alt=""
                className="shadow-2xl w-full 2xl:w-[1000px]"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              />
            </div>

            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[60%] 2xl:left-[0]"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:items-start 2xl:text-center">
                <span className="font-[500] text-[1.2rem] md:text-[2rem] 2xl:text-[1.2rem] text-[#24262f]">
                  free video sharing website
                </span>
                <span className="font-[800] uppercase text-[1.5rem] md:text-[2rem] lg:text-[3rem] 2xl:text-[3.5rem] text-[#6E06F2]">
                  YouTube Clone
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#24262f]">
                <span className="text-[1rem]">
                  I developed a comprehensive clone application of YouTube using
                  the latest technologies, including React, TypeScript, and
                  Tailwind CSS, leveraging their robust features and
                  functionalities to replicate the renowned video-sharing
                  platform's user interface, interactions, and functionalities
                  with meticulous attention to detail and a focus on delivering
                  an immersive and seamless user experience
                </span>
              </div>
              <div className="flex gap-[10px] justify-start text-center my-[10px] text-[#6E06F2] uppercase font-bold text-[.6rem]">
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#6E06F2] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-start 2xl:justify-start mt-[20px]">
                <Link
                  to="https://react-youtube-clone-ruby.vercel.app"
                  target="blank"
                >
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#6E06F2] text-[#6E06F2] hover:bg-[#6E06F2] active:bg-[#ac2020] hover:text-white duration-700">
                    Visit Project <FaLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsComponentContent;
