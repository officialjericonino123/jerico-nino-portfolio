import { Link } from "react-router-dom";
import footerLogo from "../../../assets/images/img/Logo/Artboard 1.png";
import {
  FaPhone,
  FaEnvelope,
  FaPeopleGroup,
  FaFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLocationDot,
} from "react-icons/fa6";

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-black font-[Montserrat]">
          {/* LEFT BOX */}
          <div className="flex flex-col justify-center items-center p-[20px]">
            <img src={footerLogo} alt="" className="w-[100px]"/>
            <div className="flex flex-col justify-center items-center text-white p-[20px] gap-[15px]">
              <Link to="/" className="text-[1.2rem] font-[Montserrat] hover:text-[#f12020] hover:scale-[1.1] duration-300 uppercase">Home</Link>
              <Link to="/services" className="text-[1.2rem] font-[Montserrat] hover:text-[#f12020] hover:scale-[1.1] duration-300 uppercase">Services</Link>
              <Link to="/about" className="text-[1.2rem] font-[Montserrat] hover:text-[#f12020] hover:scale-[1.1] duration-300 uppercase">About </Link>
              <Link to="/cv" className="text-[1.2rem] font-[Montserrat] hover:text-[#f12020] hover:scale-[1.1] duration-300 uppercase">CV</Link>
            </div>
          </div>

          {/* CENTER BOX */}
          <div className="p-[20px]">
            <h2 className="text-[1.5rem] text-white font-[600] uppercase mb-[30px]">
              Contact Us
            </h2>
            <div className="relative m-[20px 0 0 0]">
              <div className=" text-[1.2rem] flex text-center items-center">
                <span className="text-white m-[10px]">
                  <FaPhone />
                </span>
                <span className="text-white">09950245510</span>
              </div>
            </div>
            <div className="relative m-[20px 0 0 0]">
              <div className=" text-[1.2rem] flex text-center items-center">
                <span className="text-white m-[10px]">
                  <FaEnvelope />
                </span>
                <span className="text-white">official.jericonino@gmail.com</span>
              </div>
            </div>
            <div className="relative m-[20px 0 0 0]">
              <div className=" text-[1.2rem] flex text-center items-center gap-[20px]">
                <span className="text-white m-[10px]">
                  <FaPeopleGroup />
                </span>
                <div className="text-[2.5rem] hover:scale-[1.1] duration-300">
                  <Link to="https://www.facebook.com/eco.nino123" className="text-white">
                    <FaFacebook />
                  </Link>
                </div>
                <div className="text-[2.5rem] hover:scale-[1.1] duration-300">
                  <Link to="#" className="text-white">
                    <FaSquareInstagram />
                  </Link>
                </div>
                <div className="text-[2.5rem] hover:scale-[1.1] duration-300">
                  <Link to="#" className="text-white">
                    <FaSquareTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="p-[20px]">
            <h2 className="text-[1.5rem] text-white font-[600] uppercase mb-[30px]">
              Location
            </h2>
            <div className="relative m-[20px 0 0 0]">
              <div className=" text-[1.2rem] flex text-center items-center">
                <span className="text-white m-[10px]">
                  <FaLocationDot />
                </span>
                <span className="text-white">
                  Villa Zaragosa Brgy. Turo Bocaue Bulacan
                </span>
              </div>
            </div>
            <div className="relative m-[20px 0 0 0] overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.431753910227!2d120.93228747591405!3d14.801007072137137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ad7399684309%3A0xe3f3739bc08a0ce9!2sVilla%20zaragosa%20foods%20corner!5e0!3m2!1sen!2sph!4v1693744090249!5m2!1sen!2sph"
                width="600"
                height="200"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full h-[30px] bg-[#242526]">
          <span className="flex justify-center text-white uppercase font-[Montserrat]">
            Designed and Developed By :{" "}
            <Link to="#" className="decoration-solid hover:text-[#f12020]">
              Jerico U. Niño
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
