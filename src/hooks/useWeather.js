import { useContext } from 'react'

import WeatherContext from '../context/WeatherContext';

export default function useWeather() {
    const { weatherInfo } = useContext(WeatherContext);


    return { weatherInfo }
}


