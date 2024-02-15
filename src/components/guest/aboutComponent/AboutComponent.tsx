import aboutImage from "../../../assets/images/img/ME2.jpg";

const AboutComponent: React.FC = () => {
  return (
    <>
      <div>
        <div className="grid xl:grid-cols-2 gap-[10px] mx-auto md:max-w-3xl xl:max-w-6xl px-7 md:px-0 ">
          <div
            className="w-full flex flex-col text-start my-[60px] text-[#24262f] font-Poppins"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div>
              <span className="text-[3.5rem] font-[800] text-[#6E06F2]">About me</span>
            </div>
            <div className="mt-[50px] text-[.9rem] lg:text-[1.2rem]">
              <p className="font-[400] text-start">
                Hello, I'm Jerico U. Niño, a front-end developer who specializes
                in creating user-friendly and visually appealing websites. I use
                <span className="text-[#6E06F2] uppercase font-[800] p-[5px]">
                  REACT,
                </span>
                <span className="text-[#6E06F2] uppercase font-[800] p-[5px]">
                  TYPESCRIPT,
                </span>
                and
                <span className="text-[#6E06F2] uppercase font-[800] p-[5px]">
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
                <span className="text-[#6E06F2] uppercase font-[800] p-[5px]">
                  React,
                </span>
                <span className="text-[#6E06F2] uppercase font-[800] p-[5px]">
                  TypeScript,
                </span>
                and
                <span className="text-[#6E06F2] uppercase font-[800] p-[5px]">
                  Tailwind CSS,
                </span>
                and I'm excited to be part of the ever-evolving world of web
                development.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center my-[50px] p-[30px]"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="flex justify-center items-center 2xl:my-[100px] p-[30px] border-[#6E06F2] border-2 rounded-full">
              <img
                src={aboutImage}
                alt=""
                className="lg:w-[430px] w-full rounded-full duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
