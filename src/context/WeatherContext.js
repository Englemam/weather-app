import React, { createContext, useState, useEffect } from 'react'
import useLocation from '../hooks/useLocation';

import { api } from '../services/api';

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const { location, grantedAccessToLocation } = useLocation();


    const fetchWeatherInfo = async () => {
        const res = await api.get(`weather?lat=${location.lat}&lon=${location.long}&appid=9997c56866a63215f905efd1be2db505&lang=pt_br&units=metric`)

        setWeatherInfo({
            cityName: res.data.name,
            country: res.data.sys.country,
            windSpeed: res.data.wind.speed,
            temperature: res.data.main.temp,
            feelsLike: res.data.main.feels_like,
            tempMax: res.data.main.temp_max,
            tempMin: res.data.main.temp_min
        })
    }

    useEffect(() => {
        if(grantedAccessToLocation && location?.lat && location?.long){
            fetchWeatherInfo();
        }
    }, [grantedAccessToLocation, location])


    return (
        <WeatherContext.Provider
            value={{ 
                weatherInfo
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;
