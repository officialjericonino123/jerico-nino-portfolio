import {
  FaPencil,
  FaCode,
  FaToolbox,
  FaThumbsUp,
  FaScrewdriverWrench,
  FaFileShield,
} from "react-icons/fa6";
import ServicesHeader from "../../assets/images/img/Services2.jpg";

const Testimonials: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${ServicesHeader})`,
    backgroundSize: "100% 100%", // Scale the image to cover the entire container
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh", // Ensure the container takes up the full viewport height
  };

  return (
    <>
      <div
        className="w-full h-full px-[20px] mt-[90px] md:px-[30px] lg:px-[35px] pb-[30px]"
        style={containerStyle}
      >
        <div className="flex justify-center items-center w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <span
            className="text-white text-[2.5rem] sm:text-[2.7rem] md:text-[2.9rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[6rem] uppercase font-[700] font-RacingSans"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Services
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full h-auto p-[20px] gap-[30px] px-[40px]">
          <div className="flex flex-col justify-center items-center w-full p-[30px] border-[1px] gap-[30px] bg-black opacity-90 rounded-md hover:-translate-y-6 hover:bg-[#f12020] hover:border-[#f12020] duration-300">
            <div className="text-white text-[2rem] md:text-[4rem]">
              <FaPencil />
            </div>
            <div className="text-center text-white">
              <span className="font-RacingSans uppercase font-[700] md:text-[1.5rem]">
                Creative and Responsive Design
              </span>
            </div>
            <div className="text-center text-white">
              <span>
                I specialize in the development of responsive designs that
                consistently uphold their visual allure and functional integrity
                across a spectrum of devices. In tandem, my established
                proficiency lies in seamlessly infusing these designs with a
                distinct and innovative character. This harmonious blend of
                skills ensures an unparalleled user experience while
                simultaneously elevating the creative and impactful essence of
                your visual content.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-[30px] border-[1px] gap-[30px] bg-black opacity-90 rounded-md hover:-translate-y-6 hover:bg-[#f12020] hover:border-[#f12020] duration-300">
            <div className="text-white text-[2rem] md:text-[4rem]">
              <FaCode />
            </div>
            <div className="text-center text-white">
              <span className="font-RacingSans uppercase font-[700] md:text-[1.5rem]">
                Clean Code
              </span>
            </div>
            <div className="text-center text-white">
              <span>
                I'm really good at writing clean code. It means I focus on
                making sure the code is neat, easy to read, and follows best
                practices in software development. It's important to me to keep
                the code in good shape so that it's easy for others to
                understand and work with in the future.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-[30px] border-[1px] gap-[30px] bg-black opacity-90 rounded-md hover:-translate-y-6 hover:bg-[#f12020] hover:border-[#f12020] duration-300">
            <div className="text-white text-[2rem] md:text-[4rem]">
              <FaToolbox />
            </div>
            <div className="text-center text-white">
              <span className="font-RacingSans uppercase font-[700] md:text-[1.5rem]">
                User Experience
              </span>
            </div>
            <div className="text-center text-white">
              <span>
                I always maintain high coding standards in my projects to ensure
                an outstanding user experience. This means I focus on creating
                software that works well, is easy to use, thoroughly tested, and
                continuously improved. My goal is to consistently exceed user
                expectations and set a high standard of quality in everything I
                do.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-[30px] border-[1px] gap-[30px] bg-black opacity-90 rounded-md hover:-translate-y-6 hover:bg-[#f12020] hover:border-[#f12020] duration-300">
            <div className="text-white text-[2rem] md:text-[4rem]">
              <FaThumbsUp />
            </div>
            <div className="text-center text-white">
              <span className="font-RacingSans uppercase font-[700] md:text-[1.5rem]">
                Fast Support
              </span>
            </div>
            <div className="text-center text-white">
              <span>
                I have a strong technical support system in place to help my
                clients quickly and effectively. Our dedicated team is
                well-prepared to handle inquiries, solve problems, and provide
                expert guidance, ensuring minimal downtime and top-notch
                assistance. Our commitment to fast and reliable support
                underscores our dedication to client satisfaction and delivering
                exceptional service.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-[30px] border-[1px] gap-[30px] bg-black opacity-90 rounded-md hover:-translate-y-6 hover:bg-[#f12020] hover:border-[#f12020] duration-300">
            <div className="text-white text-[2rem] md:text-[4rem]">
              <FaScrewdriverWrench />
            </div>
            <div className="text-center text-white">
              <span className="font-RacingSans uppercase font-[700] md:text-[1.5rem]">
                Hardware troubleshooting
              </span>
            </div>
            <div className="text-center text-white">
              <span>
                I have extensive computer repair skills that can effectively
                tackle various complex technical issues. These skills have been
                developed over time through hands-on experience and cover
                troubleshooting, diagnostics, and system optimization. I'm
                well-equipped to handle a wide range of technical challenges and
                ensure systems run smoothly. My commitment to staying updated
                with industry advancements underscores my dedication to
                providing top-notch technical support and solutions.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-[30px] border-[1px] gap-[30px] bg-black opacity-90 rounded-md hover:-translate-y-6 hover:bg-[#f12020] hover:border-[#f12020] duration-300">
            <div className="text-white text-[2rem] md:text-[4rem]">
              <FaFileShield />
            </div>
            <div className="text-center text-white">
              <span className="font-RacingSans uppercase font-[700] md:text-[1.5rem]">
                Data Security
              </span>
            </div>
            <div className="text-center text-white">
            <span>
                I possess strong data security skills that can effectively
                protect our clients' important information. My expertise
                includes encryption, access control, and threat detection. I am
                committed to staying updated with the latest security practices
                to ensure data safety. Rest assured, your data is in capable
                hands.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
