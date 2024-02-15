import {
  FaPencil,
  FaCode,
  FaToolbox,
  FaThumbsUp,
  FaScrewdriverWrench,
  FaFileShield,
} from "react-icons/fa6";

const ServicesComponentContent: React.FC = () => {
  return (
    <>
      <div>
        <div
          className="text-center font-Poppins mx-auto md:max-w-3xl xl:max-w-6xl px-7 md:px-0 my-[50px]"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1 className="text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-[800] text-[#6E06F2]">
            What I do?
          </h1>
          <p className="text-[#6E06F2] font-[500]">
            In my capacity as a front-end web developer, I specialize in the
            meticulous creation of visually compelling and user-friendly
            websites, meticulously designed to deliver exceptional user
            experiences.
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto md:max-w-3xl xl:max-w-6xl px-7 md:px-0 gap-[30px]"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="flex flex-col justify-center items-center w-full p-[30px] font-Poppins border-[2px] border-[#6E06F2] gap-[30px] opacity-90 rounded-md hover:-translate-y-6 duration-300">
            <div className="text-[#6E06F2] text-[2rem] md:text-[4rem]">
              <FaPencil />
            </div>
            <div className="text-center text-[#6E06F2]">
              <span className="uppercase font-[700] md:text-[1.5rem]">
                Creative and Responsive Design
              </span>
            </div>
            <div className="text-center text-[#6E06F2]">
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

          <div className="flex flex-col justify-center items-center w-full p-[30px] font-Poppins border-[2px] border-[#6E06F2] gap-[30px] opacity-90 rounded-md hover:-translate-y-6 duration-300">
            <div className="text-[#6E06F2] text-[2rem] md:text-[4rem]">
              <FaCode />
            </div>
            <div className="text-center text-[#6E06F2]">
              <span className="uppercase font-[700] md:text-[1.5rem]">
                Clean Code
              </span>
            </div>
            <div className="text-center text-[#6E06F2]">
              <span>
                I'm really good at writing clean code. It means I focus on
                making sure the code is neat, easy to read, and follows best
                practices in software development. It's important to me to keep
                the code in good shape so that it's easy for others to
                understand and work with in the future.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-[30px] font-Poppins border-[2px] border-[#6E06F2] gap-[30px] opacity-90 rounded-md hover:-translate-y-6 duration-300">
            <div className="text-[#6E06F2] text-[2rem] md:text-[4rem]">
              <FaToolbox />
            </div>
            <div className="text-center text-[#6E06F2]">
              <span className="uppercase font-[700] md:text-[1.5rem]">
                User Experience
              </span>
            </div>
            <div className="text-center text-[#6E06F2]">
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

          <div className="flex flex-col justify-center items-center w-full p-[30px] font-Poppins border-[2px] border-[#6E06F2] gap-[30px] opacity-90 rounded-md hover:-translate-y-6 duration-300">
            <div className="text-[#6E06F2] text-[2rem] md:text-[4rem]">
              <FaThumbsUp />
            </div>
            <div className="text-center text-[#6E06F2]">
              <span className="uppercase font-[700] md:text-[1.5rem]">
                Fast Support
              </span>
            </div>
            <div className="text-center text-[#6E06F2]">
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

          <div className="flex flex-col justify-center items-center w-full p-[30px] font-Poppins border-[2px] border-[#6E06F2] gap-[30px] opacity-90 rounded-md hover:-translate-y-6 duration-300">
            <div className="text-[#6E06F2] text-[2rem] md:text-[4rem]">
              <FaScrewdriverWrench />
            </div>
            <div className="text-center text-[#6E06F2]">
              <span className="uppercase font-[700] md:text-[1.5rem]">
                Hardware troubleshooting
              </span>
            </div>
            <div className="text-center text-[#6E06F2]">
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

          <div className="flex flex-col justify-center items-center w-full p-[30px] font-Poppins border-[2px] border-[#6E06F2] gap-[30px] opacity-90 rounded-md hover:-translate-y-6 duration-300">
            <div className="text-[#6E06F2] text-[2rem] md:text-[4rem]">
              <FaFileShield />
            </div>
            <div className="text-center text-[#6E06F2]">
              <span className="uppercase font-[700] md:text-[1.5rem]">
                Data Security
              </span>
            </div>
            <div className="text-center text-[#6E06F2]">
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

export default ServicesComponentContent;
