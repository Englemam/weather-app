import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { IconGenerator } from '../../utils/iconGenerator'
import './styles.css';

export default function Index({ weatherInfo, firstIcon, secondIcon, thirdIcon, text, isTemp }) {


    return (
        <div className='middle-card'>
            <span>{text}</span>
            <div className='main-info-container'>
            <div className='temp-info-container'>
                <div className='temp-info'>
                    {IconGenerator(firstIcon)}
                    {
                      isTemp ?  
                      (<span>{weatherInfo.tempMax || <Skeleton />}</span>) : (
                        <span>{weatherInfo.humidity}%</span>
                      )  
                    }
                </div>
                <div className='temp-info'>
                    {IconGenerator(secondIcon)}
                    {
                      isTemp ?  
                      (<span>{weatherInfo.tempMin}</span>) : (
                        <span>{weatherInfo.windSpeed}km/h</span>
                      )  
                    }
                </div>
            </div>
            <div>
                {IconGenerator(thirdIcon)}
            </div>
            </div>
        </div>
    )
}
