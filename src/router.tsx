// Library
// import {createBrowserRouter} from "react-router-dom";

// Layout
import ClientLayout from "./layout/client/ClientLayout";

// Component
import NotFound from "./components/not-found/NotFound";

// Client Pages
import Home from "./pages/client/Home";
import Projects from "./pages/client/Projects";
import Services from "./pages/client/Services";
import About from "./pages/client/About";
import Cv from "./pages/client/Cv";


interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routerConfig: Record<string, RouteConfig[]> = {
  guest: [
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        // PAGES
        {
          path: "/jerico-nino-portfolio/",
          element: <Home />,
        },
        {
          path: "/jerico-nino-portfolio/projects",
          element: <Projects />,
        },
        {
          path: "/jerico-nino-portfolio/services",
          element: <Services />,
        },
        {
          path: "/jerico-nino-portfolio/about",
          element: <About />,
        },
        {
          path: "/jerico-nino-portfolio/cv",
          element: <Cv />,
        },
        {
          path: "*", // Wildcard for unmatched routes
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default routerConfig;
