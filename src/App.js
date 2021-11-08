import './App.css';
import Home from './pages/home';

import { LocationProvider } from './context/LocationContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {

  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <Home />
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
