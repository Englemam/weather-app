import React from 'react'
import './styles.css';

export default function Index({ weatherInfo }) {

    return (
        <div className='top-card'>
            <div className='city-container'>
                <span>{weatherInfo.cityName}, {weatherInfo.country}</span>
            </div>
            <div className='degree-info'>
                <div className='degree-details'>
                    <span className='current-degree'>{weatherInfo.temperature}C°</span>
                    <span className='feels-like'>Sensação {weatherInfo.feelsLike}C°</span>
                </div>
                <div className='sky-info'>
                    <span className='sky-info-description'>{weatherInfo.description}</span>
                    <img src={`http://openweathermap.org/img/wn/${weatherInfo.iconName}.png`} alt='weather icon'/>
                </div>
            </div>
        </div>
    )
}
