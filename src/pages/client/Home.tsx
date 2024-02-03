import Carousel from "../../components/guest/carousel/Carousel";
import AboutMeHome from "../../components/guest/aboutmehome/AboutMeHome";
import MyClients from "../../components/guest/myclients/MyClients";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectsComponentContent from "../../components/guest/projectsComponent/ProjectsComponentContent";
import ServicesComponentContent from "../../components/guest/servicesComponent/ServicesComponentContent";

const Home = () => {
  useEffect(() => {
    document.title = "Jerico Niño | Portfolio";
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Carousel />
      <AboutMeHome />
      <ProjectsComponentContent />
      <ServicesComponentContent/>
      <MyClients />
    </>
  );
};

export default Home;
