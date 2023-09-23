
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/index.css'

import routerConfig from './router';


const App: React.FC = () => {
    let selectedRoute = 'guest'; // Default to guest route
  
    const routingConfig = routerConfig[selectedRoute];
    return (
      <BrowserRouter>
        <Routes>
          {routingConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            >
              {route.children && route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
export default App