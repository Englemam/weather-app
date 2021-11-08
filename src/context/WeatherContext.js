import React, { createContext, useState, useEffect } from 'react'
import useLocation from '../hooks/useLocation';
import { fetchCurrentWeatherInfo } from '../services/weatherServices';

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const { location, grantedAccessToLocation } = useLocation();


    const fetchWeatherInfo = async () => {
        const response = await fetchCurrentWeatherInfo(location);
        if(response.status === 200){
            setWeatherInfo({
                cityName: response.data.name,
                country: response.data.sys.country,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                windSpeed: response.data.wind.speed,
                temperature: response.data.main.temp,
                feelsLike: response.data.main.feels_like,
                tempMax: response.data.main.temp_max,
                tempMin: response.data.main.temp_min,
                iconName: response.data.weather[0].icon,
                description: response.data.weather[0].description
            })
        }
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
