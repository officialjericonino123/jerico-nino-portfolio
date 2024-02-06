import { Link } from "react-router-dom";
// import gradPic from "../../../assets/images/img/BG.png";
import heroBg from "../../../assets/images/img/Carousel/Carousel.jpg";
import CV from "../../../assets/NIÑO-CV-NOVA-2024.pdf";
import Me from "../../../assets/images/img/Me.png";

const ImageSlider = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row w-full h-[800px] justify-evenly items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="grid justify-start w-full p-[20px] font-[700] mt-[100px] mx-[100px] text-white font-Inter">
        <span
          className="font-[800] uppercase text-[1.3rem] lg:text-[1.5rem] text-[#51a2a7] lg:text-white"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Front End Web Developer
        </span>
        <span
          className="uppercase font-[800] text-[5rem] text-[#51a2a7] lg:text-white"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Jerico Niño
        </span>
        <p
          className="w-full md:w-[500px] font-[500] font-[Montserrat] pb-[30px] text-[#51a2a7] lg:text-white text-[1rem] md:text-[1.2rem]"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          I craft extraordinary websites and stunning UI/UX designs that elevate
          the user experience. My passion lies in creating interactive and
          engaging digital spaces. Let's join forces to bring your vision to
          life and build something truly exceptional together!
        </p>

        <div
          className="flex flex-col md:flex-row gap-[20px] justify-between font-Inter"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <Link to={CV} target="_blank" rel="noopener noreferrer">
            <button className="border-[1px] p-[10px] w-full lg:w-[200px] uppercase rounded text-[#00ADB5] lg:text-white border-[#00ADB5] lg:border-white hover:text-white hover:bg-[#00ADB5] hover:border-[#00ADB5] active:bg-[#393E46] active:border-[#393E46] animate-bounce hover:scale-[1.1] duration-500 ease-in-out">
              Curriculum Vitae
            </button>
          </Link>
          <Link to="/jerico-nino-portfolio/projects" rel="noopener noreferrer">
            <button className="border-[1px] p-[10px] w-full lg:w-[200px] uppercase rounded text-[#00ADB5] lg:text-white border-[#00ADB5] lg:border-white hover:text-white hover:bg-[#00ADB5] hover:border-[#00ADB5] active:bg-[#393E46] active:border-[#393E46] animate-bounce hover:scale-[1.1] duration-500 ease-in-out">
              Projects
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden 2xl:flex lg:absolute bottom-[0] right-[0]">
        <img src={Me} alt="" />
      </div>
    </div>
  );
};

export default ImageSlider;
