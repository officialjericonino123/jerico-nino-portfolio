import Carousel from "../../components/guest/carousel/Carousel";
import AboutMeHome from "../../components/guest/aboutmehome/AboutMeHome";
import Skills from "../../components/guest/skills/Skills";
import MyClients from "../../components/guest/myclients/MyClients";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home - HGTR";
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Carousel />
      <AboutMeHome />
      <Skills />
      <MyClients />
    </>
  );
};

export default Home;
