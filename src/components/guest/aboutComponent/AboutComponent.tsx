import aboutImage from "../../../assets/images/img/ME2.jpg";

const AboutComponent: React.FC = () => {
  return (
    <>
      <div className="bg-[#00ADB5]">
        <div className="grid xl:grid-cols-2 gap-[10px] mx-[20px] lg:mx-[200px]">
          <div
            className="w-full flex flex-col text-start my-[100px] lg:my-[100px] text-white font-Inter"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div>
              <span className="text-[4rem] font-[800]">About me</span>
            </div>
            <div className="mt-[50px] text-[1rem] lg:text-[1.2rem]">
              <span className="font-[400] text-start">
                Hello, I'm Jerico U. Niño, a front-end developer who specializes
                in creating user-friendly and visually appealing websites. I use
                <span className="text-[#32777b] uppercase font-[800] p-[5px]">
                  REACT,
                </span>
                <span className="text-[#32777b] uppercase font-[800] p-[5px]">
                  TYPESCRIPT,
                </span>
                and
                <span className="text-[#32777b] uppercase font-[800] p-[5px]">
                  TAILWIND CSS
                </span>
                to build beautiful and functional web interfaces. My job is to
                turn design ideas into responsive and efficient websites. I'm
                dedicated to following best practices, making sure websites are
                easy to use and perform well. I'm always learning to stay
                up-to-date with the latest trends and technologies in web
                development. I collaborate effectively with designers, back-end
                developers, and others to deliver great digital solutions. In a
                nutshell, I'm passionate about creating user-friendly web
                experiences using
                <span className="text-[#32777b] uppercase font-[800] p-[5px]">
                  React,
                </span>
                <span className="text-[#32777b] uppercase font-[800] p-[5px]">
                  TypeScript,
                </span>
                and
                <span className="text-[#32777b] uppercase font-[800] p-[5px]">
                  Tailwind CSS,
                </span>
                and I'm excited to be part of the ever-evolving world of web
                development.
              </span>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center my-[50px]"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="flex justify-center items-center 2xl:my-[100px] p-[20px]">
              <img
                src={aboutImage}
                alt=""
                className="w-full hover:rotate-12 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
