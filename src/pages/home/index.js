import React from 'react'
import Skeleton from 'react-loading-skeleton';

import useLocation from '../../hooks/useLocation';
import useWeather from '../../hooks/useWeather';

import TopCard from '../../components/TopCard';

import './styles.css';

export default function Index() {
    const { location, grantedAccessToLocation } = useLocation();
    const { weatherInfo } = useWeather();

    console.log('===weatherInfo', weatherInfo)


    return (
        <div className='container'>
            <TopCard weatherInfo={weatherInfo} />
            <Skeleton count={3} />
        </div>
    )
}
