import aboutImage from "../../assets/images/img/aboutimage.jpg";

const About = () => {
  return (
    <>
      <div className="w-full h-auto py-[50px] px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-[50px]">
          <div className="w-full flex flex-col text-center lg:items-start mt-[100px] lg:mt-[100px] text-white">
            <div>
              <span className="text-[4rem] font-[800] font-RacingSans">
                About me
              </span>
            </div>
            <div className="mt-[50px] text-[1rem] lg:text-[1.2rem]">
              <span className="font-[montserrat] font-[500] text-start">
                Hello, I'm Jerico U. Niño, a front-end developer who specializes
                in creating user-friendly and visually appealing websites. I use
                <span className="text-[#f12020] uppercase font-[800] p-[5px]">REACT,</span>
                <span className="text-[#f12020] uppercase font-[800] p-[5px]">TYPESCRIPT,</span>
                and
                <span className="text-[#f12020] uppercase font-[800] p-[5px]">TAILWIND CSS</span>
                to build beautiful and functional web interfaces. My job is to
                turn design ideas into responsive and efficient websites. I'm
                dedicated to following best practices, making sure websites are
                easy to use and perform well. I'm always learning to stay
                up-to-date with the latest trends and technologies in web
                development. I collaborate effectively with designers, back-end
                developers, and others to deliver great digital solutions. In a
                nutshell, I'm passionate about creating user-friendly web
                experiences using
                <span className="text-[#f12020] uppercase font-[800] p-[5px]">React,</span>
                <span className="text-[#f12020] uppercase font-[800] p-[5px]">TypeScript,</span>
                and
                <span className="text-[#f12020] uppercase font-[800] p-[5px]">Tailwind CSS,</span>
                and I'm excited to be part of the ever-evolving world of web
                development.
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center lg:mt-[100px]">
              <img src={aboutImage} alt="" className="w-[400px] rounded-[10px] hover:rotate-12 duration-300"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
