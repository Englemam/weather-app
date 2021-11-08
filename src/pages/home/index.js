import React from 'react'
import Skeleton from 'react-loading-skeleton';

import useLocation from '../../hooks/useLocation';
import useWeather from '../../hooks/useWeather';


export default function Index() {
    const { location, grantedAccessToLocation } = useLocation();
    const { weatherInfo } = useWeather();

    console.log('===weatherInfo', weatherInfo)


    return (
        <div>
            <h1>home page goes here</h1>
            <Skeleton count={3} />
        </div>
    )
}
