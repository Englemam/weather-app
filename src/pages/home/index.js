import React from 'react'
import useWeather from '../../hooks/useWeather';

import TopCard from '../../components/TopCard';
import MainCard from '../../components/MainCard';

import './styles.css';

export default function Index() {
    const { weatherInfo } = useWeather();

    return (
        <div className='container'>
            <TopCard weatherInfo={weatherInfo} />
            <MainCard
                weatherInfo={weatherInfo}
                firstIcon='FaTemperatureHigh'
                secondIcon='FaTemperatureLow'
                thirdIcon='WiSmallCraftAdvisory'
                text='Máximas e mínimas'
                isTemp={true}
            />
            <MainCard
                weatherInfo={weatherInfo}
                firstIcon='WiHumidity'
                secondIcon='WiDayWindy'
                thirdIcon='WiCloudyWindy'
                text='Vento e humidade'
            />
        </div>
    )
}
