import React, { createContext, useState, useEffect } from 'react'

const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [grantedAccessToLocation, setGrantedAccessToLocation] = useState(false);


  const getUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      });

    } else {
      alert('Falha ao buscar localização do usuário!')
    }

  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      setGrantedAccessToLocation(true);
    } else {
      alert('Oops! Usuário não deu permissão de localização!')
      setGrantedAccessToLocation(false);
    }
    getUserLocation()
  }, [])


  return (
    <LocationContext.Provider
      value={{
        location,
        grantedAccessToLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContext;
