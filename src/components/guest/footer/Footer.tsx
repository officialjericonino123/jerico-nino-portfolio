import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaPeopleGroup,
  FaFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import CV from "../../../assets/NIÑO-CV-NOVA-2024.pdf";
import MyLogo from "../../../assets/images/img/MYLOGO2.png";

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-[#6E06F2] font-Poppins">
          {/* LEFT BOX */}
          <div
            className="flex flex-col lg:items-center p-[20px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div
              className="flex justify-start"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <Link to="/jerico-nino-portfolio/">
                <img src={MyLogo} alt="Logo" className="w-[250px]" />
                {/* <h1 className="text-[2.5rem] font-boldtext-[#EEEEEE] hover:text-[#393E46] duration-500 ease-in-out">{"<J/>"}</h1> */}
              </Link>
            </div>
            <div className="flex flex-col justify-center lg:items-center text-white p-[20px] gap-[15px]">
              <div>
                <Link
                  to="/jerico-nino-portfolio/projects"
                  className="hover:scale-[1.1] duration-300 uppercase"
                >
                  Home
                </Link>
              </div>

              <Link
                to="/jerico-nino-portfolio/projects"
                className="hover:scale-[1.1] duration-300 uppercase"
              >
                Projects
              </Link>
              <Link
                to="/jerico-nino-portfolio/services"
                className="hover:scale-[1.1] duration-300 uppercase"
              >
                Services
              </Link>
              <Link
                to="/jerico-nino-portfolio/about"
                className="hover:scale-[1.1] duration-300 uppercase"
              >
                About{" "}
              </Link>
              <Link
                to={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-[1.1] duration-300 uppercase"
              >
                CV
              </Link>
            </div>
          </div>

          {/* CENTER BOX */}
          <div className="p-[20px]">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h2 className="text-[2rem] text-white font-[800] uppercase mb-[30px]">
                Contact Us
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
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
                  <span className="text-white">
                    official.jericonino@gmail.com
                  </span>
                </div>
              </div>
              <div className="relative m-[20px 0 0 0]">
                <div className=" text-[1.2rem] flex text-center items-center gap-[20px]">
                  <span className="text-white m-[10px]">
                    <FaPeopleGroup />
                  </span>
                  <div className="text-[2.5rem] hover:scale-[1.1] duration-300">
                    <Link
                      to="https://www.facebook.com/eco.nino123"
                      className="text-white"
                    >
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
          </div>

          {/* RIGHT BOX */}
          <div className="p-[20px]">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h2 className="text-[2rem] text-white font-[800] uppercase mb-[30px]">
                Location
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
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
        </div>
        <div className="flex justify-center items-center w-full h-[30px] bg-[#24262f]">
          <span className="text-white uppercase font-Poppins">
            Designed and Developed By :{" "}
            <Link
              to="#"
              className="decoration-solid hover:text-[#6E06F2] duration-300"
            >
              Jerico U. Niño
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
