import Carousel from "../../components/guest/carousel/Carousel";
import AboutMeHome from "../../components/guest/aboutmehome/AboutMeHome";
import MyClients from "../../components/guest/myclients/MyClients";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ProjectsComponentContent from "../../components/guest/projectsComponent/ProjectsComponentContent";
import ServicesComponentContent from "../../components/guest/servicesComponent/ServicesComponentContent";
import PageLoader from "../../components/guest/pageloader/PageLoader";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check if data exists in localStorage
    const dataExists = localStorage.getItem("homePageData");

    if (dataExists) {
      setIsLoading(false); // No need to show loader, as data is available
      document.body.classList.remove("overflow-hidden");
    } else {
      // Simulate an asynchronous action (e.g., fetching data) that takes some time
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false to hide the loader
        document.body.classList.remove("overflow-hidden");

        // Save data to localStorage
        localStorage.setItem("homePageData", "true");
      }, 5000); // Adjust the timeout according to your needs
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoading]);

  useEffect(() => {
    document.title = "Jerico Niño | Portfolio";
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <Carousel />
          <AboutMeHome />
          <ProjectsComponentContent />
          <ServicesComponentContent />
          <MyClients />
        </div>
      )}
    </>
  );
};

export default Home;
