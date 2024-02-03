import ProjectImage from "../../../assets/images/img/Projects.jpg";
import ProjectsComponentContent from "./ProjectsComponentContent";

const ProjectsComponent: React.FC = () => {
  return (
    <>
      <div
        className="relative w-full h-[1000px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${ProjectImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="text-center">
          <h1 className="text-Inter text-[3rem] lg:text-[5rem] text-[#EEEEEE] opacity-70 uppercase font-bold">
            My Projects
          </h1>
        </div>
      </div>

        <ProjectsComponentContent />
    </>
  );
};

export default ProjectsComponent;
