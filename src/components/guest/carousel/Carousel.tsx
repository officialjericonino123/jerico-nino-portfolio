import { Link } from "react-router-dom";
// import gradPic from "../../../assets/images/img/BG.png";
import heroBg from "../../../assets/images/img/Carousel/Carousel.jpg";
import CV from "../../../assets/NIÑO-CV-NOVA-2024.pdf";

const ImageSlider = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-full h-[1000px] justify-evenly items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="grid justify-start w-full p-[20px] font-[700] mx-[100px] text-white font-Inter">
        <span className="font-[800] uppercase text-[1.5rem] text-[#EEEEEE]">
          Front End Web Developer
        </span>
        <span className="uppercase font-[800] text-[5rem] text-[#EEEEEE]">
          Jerico Niño
        </span>
        <p className="w-full md:w-[500px] font-[500] font-[Montserrat] pb-[30px] text-[#EEEEEE] text-[1.2rem] md:text-[1rem]">
          I craft extraordinary websites and stunning UI/UX designs that elevate
          the user experience. My passion lies in creating interactive and
          engaging digital spaces. Let's join forces to bring your vision to
          life and build something truly exceptional together!
        </p>

        <div className="flex flex-col md:flex-row gap-[20px] justify-between font-Inter">
          <Link to={CV} target="_blank" rel="noopener noreferrer">
            <button className="border-[1px] p-[10px] w-full lg:w-[200px] uppercase rounded hover:bg-[#00ADB5] hover:border-[#00ADB5] active:bg-[#393E46] active:border-[#393E46] animate-bounce hover:scale-[1.1] duration-500 ease-in-out">
              Curriculum Vitae
            </button>
          </Link>
          <Link to="/jerico-nino-portfolio/projects" rel="noopener noreferrer">
            <button className="border-[1px] p-[10px] w-full lg:w-[200px] uppercase rounded hover:bg-[#00ADB5] hover:border-[#00ADB5] active:bg-[#393E46] active:border-[#393E46] animate-bounce hover:scale-[1.1] duration-500 ease-in-out">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
