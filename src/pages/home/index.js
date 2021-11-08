import React from 'react'
import Skeleton from 'react-loading-skeleton';

import useLocation from '../../hooks/useLocation';
import useWeather from '../../hooks/useWeather';

import TopCard from '../../components/TopCard';
import MiddleCard from '../../components/MiddleCard';

import './styles.css';

export default function Index() {
    const { location, grantedAccessToLocation } = useLocation();
    const { weatherInfo } = useWeather();


    return (
        <div className='container'>
            <TopCard weatherInfo={weatherInfo} />
            <MiddleCard weatherInfo={weatherInfo} />
            <Skeleton count={3} />
        </div>
    )
}
