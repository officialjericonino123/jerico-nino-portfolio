import { Link } from "react-router-dom";
import ProjectImage from "../../../assets/images/img/Projects.jpg";
import { FaArrowLeft, FaLink } from "react-icons/fa6";
import HgtrProject from "../../../assets/images/img/Projects/HgtrProject.png";
import KittlyProject from "../../../assets/images/img/Projects/KittlyProject.png";

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

      <div className="my-[50px] lg:mx-[100px] h-auto mx-[20px]">
        
        <Link to="/jerico-nino-portfolio/">
          <div className="w-full flex text-[16px] md:text-[1.1rem] items-center gap-[10px] font-Inter font-bold uppercase text-[#393E46] hover:animate-bounce duration-1000 cursor-pointer">
            <FaArrowLeft />
            <span>Go Back</span>
          </div>
        </Link>

        <div className="my-[50px]">
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
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[50%] 2xl:left-[50%]"
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
              <div className="flex gap-[10px] justify-end text-center my-[10px] text-[#00ADB5] uppercase font-bold font-Inter text-[.8rem]">
                <div className="bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  React
                </div>
                <div className="bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  Tailwind
                </div>
                <div className="bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  Laravel
                </div>
                <div className="bg-[#00ADB5] bg-opacity-20 p-[10px] rounded-lg">
                  TypeScript
                </div>
              </div>
              <div className="flex justify-end 2xl:justify-end mt-[20px]">
                <Link to="https://hugoteroclothing.com/" target="blank">
                  <button className="flex items-center justify-center gap-[10px] border-2 w-full 2xl:w-[200px] p-[10px] font-Oswald font-bold uppercase border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] active:bg-[#ac2020] hover:text-white duration-700">
                    See More <FaLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* KITTLY */}
          <div className="relative mt-[300px]">
            <div
              className="flex 2xl:justify-end 2xl:items-end"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img
                src={KittlyProject}
                alt=""
                className="shadow-2xl w-full 2xl:w-[1000px]"
              />
            </div>

            <div
              className="2xl:absolute w-full 2xl:w-[800px] 2xl:top-[60%] 2xl:left-[5%]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="flex flex-col justify-center items-center 2xl:items-start 2xl:text-center">
                <span className="font-Oswald font-[400] text-[1.5rem] 2xl:text-[1.2rem] text-stone-500">
                  Regular Tees (Couple Tees Edition)
                </span>
                <span className="font-Oswald font-bold uppercase text-[2rem] 2xl:text-[2.5rem] text-[#f12020] text-center">
                  Hawak kamay
                </span>
              </div>
              <div className="drop-shadow-lg p-[20px] bg-white rounded-lg">
                <span className="font-Oswald text-[1.2rem]">
                  Introducing the HGTR "Hawak Kamay, Lilibutin ang Mundo" Couple
                  T-Shirt: Experience the world hand in hand with our specially
                  crafted couple shirts. "Hawak Kamay, Lilibutin ang Mundo"
                  translates to "Holding Hands, Traveling the World,"
                  symbolizing the joy of exploration and enduring love. These
                  shirts are more than just clothing; they're a celebration of
                  unity and shared adventures. Perfect for couples who
                  appreciate style, comfort, and the journey of life together.
                </span>
              </div>
              <div className="flex justify-center 2xl:justify-start mt-[20px]">
                <Link to="/regular-tees" target="blank">
                  <button className="border-2 w-full 2xl:w-[200px] p-[10px] font-Oswald font-bold uppercase border-[#f12020] text-[#f12020] hover:bg-[#f12020] active:bg-[#ac2020] hover:rounded-2xl hover:text-white duration-300">
                    See More
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
