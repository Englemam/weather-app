import React from 'react'
import Skeleton from 'react-loading-skeleton';

import useLocation from '../../hooks/useLocation';
import useWeather from '../../hooks/useWeather';

import TopCard from '../../components/TopCard';
import MiddleCard from '../../components/MiddleCard';

import './styles.css';

export default function Index() {
    const { weatherInfo } = useWeather();
    
    return (
        <div className='container'>
            <TopCard weatherInfo={weatherInfo} />
            <MiddleCard 
                weatherInfo={weatherInfo}
                firstIcon='FaTemperatureHigh'
                secondIcon='FaTemperatureLow'
                thirdIcon='WiSmallCraftAdvisory'
                text='Máximas e mínimas'
                isTemp={true}
             />
            <MiddleCard 
                weatherInfo={weatherInfo}
                firstIcon='BsFillSunriseFill'
                secondIcon='BsFillSunsetFill'
                thirdIcon='BsSun'
                text='Nascer e pôr do sol'
             />
        </div>
    )
}
