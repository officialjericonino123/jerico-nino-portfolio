import { Link } from "react-router-dom";
import gradPic from "../../../assets/images/img/BG.png";
import heroBg from "../../../assets/images/img/herobg.jpg";
import Resume from "../../../assets/jerico-u.-niño.pdf";

const ImageSlider = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-full h-[1000px] bg-gray-100 justify-evenly items-center text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col w-full lg:w-[50%] text-center lg:items-start justify-center p-[20px] lg:pl-[200px] font-[700] text-white">
        <span className="font-[800] font-RacingSans text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-stone-400">
          Hello! I'm Jerico Niño,
        </span>
        <span className="uppercase font-[800] font-RacingSans text-[1.5rem] sm:text-[2rem] lg:text-[4rem] text-stone">
          Front End Developer
        </span>
        <p className="font-[500] font-[Montserrat] pb-[30px] text-stone-200">
          Web Developer / Web Designer Expert
        </p>

        <Link to={Resume} target="_blank" rel="noopener noreferrer">
          <button className="border-[1px] p-[10px] w-[200px] font-[Montserrat] uppercase rounded hover:bg-[#f12020] hover:border-[#f12020] hover:scale-[1.1] duration-500 ease-in-out">
            Curriculum Vitae
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-full md:w-[50%] items-center justify-center ">
        <img
          src={gradPic}
          alt=""
          className=" p-[20px] w-[300px] lg:w-[500px] rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
