import { Link } from "react-router-dom";
import ProjectImage from "../../../assets/images/img/Projects.jpg";
import { FaArrowLeft, FaLink } from "react-icons/fa6";
import HgtrProject from "../../../assets/images/img/Projects/HgtrProject.png";
import KittlyProject from "../../../assets/images/img/Projects/KittlyProject.png";
import LCProject from "../../../assets/images/img/Projects/LCProject.png";

const ProjectsComponent: React.FC = () => {
  return (
    <>
      <div
        className="relative w-full h-[1000px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${ProjectImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="text-center">
          <h1 className="text-Inter text-[3rem] lg:text-[5rem] text-[#EEEEEE] opacity-70 uppercase font-bold">
            My Projects
          </h1>
        </div>
      </div>

      <div className="my-[50px] lg:mx-[100px] mx-[20px]">
        <Link to="/jerico-nino-portfolio/">
          <div className="w-full flex text-[16px] md:text-[1.1rem] items-center gap-[10px] font-Inter font-bold uppercase text-[#393E46] hover:animate-bounce duration-1000 cursor-pointer">
            <FaArrowLeft />
            <span>Go Back</span>
          </div>
        </Link>

        <div className="my-[50px] p-[20px]">
          {/* HUGOTERO CLOTHING */}
          <div className="relative">
            <img
              src={HgtrProject}
              alt=""
              className="shadow-2xl w-full 2xl:w-[1000px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            />
            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[50%] 2xl:right-[0px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:justify-end 2xl:items-end 2xl:text-center font-Inter">
                <span className="font-[500] text-[1.5rem] 2xl:text-[1.2rem] text-[#393E46]">
                  E-Commerce Clothing Store
                </span>
                <span className="font-[800] uppercase text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] text-[#00ADB5]">
                  HUGOTERO CLOTHING
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#393E46]">
                <span className="text-[1rem] font-Inter">
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
              <div className="flex gap-[10px] justify-end text-center my-[10px] text-[#00ADB5] uppercase font-bold font-Inter text-[.6rem]">
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  Laravel
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-end 2xl:justify-end mt-[20px]">
                <Link to="https://hugoteroclothing.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] active:bg-[#ac2020] hover:text-white duration-700">
                    Visit Project <FaLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* KITTLY */}
          <div className="relative">
            <div className="flex 2xl:justify-end 2xl:items-end my-[100px] lg:my-[300px]">
              <img
                src={KittlyProject}
                alt=""
                className="shadow-2xl w-full 2xl:w-[1000px]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              />
            </div>

            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[60%] 2xl:left-[0]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:items-start 2xl:text-center font-Inter">
                <span className="font-[500] text-[1.5rem] 2xl:text-[1.2rem] text-[#393E46]">
                  E-Commerce Bag Store
                </span>
                <span className="font-[800] uppercase text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] text-[#00ADB5]">
                  Kittly
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#393E46]">
                <span className="text-[1rem] font-Inter">
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
              <div className="flex gap-[10px] justify-start text-center my-[10px] text-[#00ADB5] uppercase font-bold font-Inter text-[.6rem]">
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-center 2xl:justify-start mt-[20px]">
                <Link to="https://kittlyofficial.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] active:bg-[#ac2020] hover:text-white duration-700">
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
              className="shadow-2xl w-full 2xl:w-[1000px] lg:my-[200px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            />
            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[60%] 2xl:right-[0px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:justify-end 2xl:items-end 2xl:text-center font-Inter">
                <span className="font-[500] text-[1.5rem] 2xl:text-[1.2rem] text-[#393E46]">
                  Static Company Website
                </span>
                <span className="font-[800] uppercase text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] text-[#00ADB5]">
                  L&C Group of Companies
                </span>
              </div>
              <div className="drop-shadow-xl p-[20px] bg-white text-[#393E46]">
                <span className="text-[1rem] font-Inter">
                  I'm excited to share my first static company website! I used
                  React, TypeScript, and Tailwind CSS to create a cool and
                  responsive design. It was a bit challenging, but I enjoyed
                  every step of bringing my ideas to life. This website not only
                  introduces the company but also reflects my growing skills in
                  web development. I look forward to learning more and creating
                  even better digital experiences in the future!
                </span>
              </div>
              <div className="flex gap-[10px] justify-end text-center my-[10px] text-[#00ADB5] uppercase font-bold font-Inter text-[.6rem]">
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className=" bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-end 2xl:justify-end mt-[20px]">
                <Link to="https://lcgroupofcompanies.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] font-[500] p-[10px] font-Oswald uppercase text-[.8rem] border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] active:bg-[#ac2020] hover:text-white duration-700">
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

export default ProjectsComponent;
