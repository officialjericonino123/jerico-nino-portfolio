import { Link } from "react-router-dom";
// import gradPic from "../../../assets/images/img/BG.png";
// import heroBg from "../../../assets/images/img/Carousel/Carousel.jpg";
import CV from "../../../assets/NIÑO-CV-NOVA-2024.pdf";
import Me from "../../../assets/images/img/Me.png";
import SVG from "../../../assets/images/img/SVG1.png";
import SVG2 from "../../../assets/images/img/SVG2.png";

const ImageSlider = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row w-full h-[1000px] justify-evenly items-center"
      style={{
        // backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="relative grid xl:grid-cols-2 justify-center xl:justify-start w-full p-[20px] font-[700] mt-[150px] mx-[50px] 2xl:mx-[150px] font-Poppins">
        <div>
          <span
            className="font-[500] uppercase text-[1.3rem] lg:text-[1.5rem] text-[#24262f]"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Hey, I'm Jerico Niño
          </span>

          <div className="text-wrap">
            <h1
              className="font-[700] text-[2.8rem] sm:text-[4rem] md:text-[5rem] tracking-tight text-[#24262f] leading-none"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div>
                <span className="text-[#6E06F2]">Front</span>end <br />
                Web Developer
              </div>
            </h1>
          </div>

          <p
            className="w-full md:w-[500px] font-[400] font-Poppins mt-[30px] pb-[30px] text-[#24262f] text-[1rem] md:text-[1.3rem]"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            I craft websites and stunning UI/UX designs that elevate the user
            experience. My passion lies in creating interactive and engaging
            digital spaces. Let's join forces to bring your vision to life and
            build something truly exceptional together!
          </p>

          <div
            className="flex flex-col md:flex-row gap-[20px] justify-start font-Inter"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Link to={CV} target="_blank" rel="noopener noreferrer">
              <button className="border-[1px] p-[10px] w-full lg:w-[200px] uppercase rounded text-[#6E06F2] border-[#6E06F2] hover:text-white hover:bg-[#6E06F2] hover:border-[#6E06F2] active:bg-[#393E46] active:border-[#393E46] hover:-translate-y-1 duration-500 ease-in-out">
                Resume
              </button>
            </Link>
            <Link
              to="/jerico-nino-portfolio/projects"
              rel="noopener noreferrer"
            >
              <button className="border-[1px] p-[10px] w-full lg:w-[200px] uppercase rounded text-[#24262f] border-[#24262f] hover:text-white hover:bg-[#6E06F2] hover:border-[#6E06F2] active:bg-[#393E46] active:border-[#393E46] hover:-translate-y-1 duration-500 ease-in-out">
                Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="relative py-[20px] xl:p-[20px]">
          <div
            className="my-[50px] flex justify-center items-center"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={Me}
              alt=""
              className="w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] border-[#6E06F2] border-2  p-[20px] rounded-full"
            />
            <div className="hidden xl:flex absolute right-0 top-0">
              <img src={SVG2} alt="" className="w-[150px] md:w-[220px] xl:w-[250px] animate-bounce animate-delayed-bounce" />
            </div>
          </div>
        </div>
        <div className="hidden absolute left-0 top-[750px] md:left-[130px] md:top-[780px] xl:left-[800px] xl:top-[300px]">
          <img src={SVG} alt="" className="w-[150px] xl:w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
