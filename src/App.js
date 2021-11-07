import './App.css';
import Home from './pages/home';

import { LocationProvider } from './context/LocationContext';

function App() {

  return (
    <>
      <LocationProvider>
        <Home />
      </LocationProvider>
    </>
  );
}

export default App;
