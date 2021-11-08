import React from 'react'
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiSmallCraftAdvisory } from "react-icons/wi";
import './styles.css';

export default function Index({ weatherInfo }) {

    return (
        <div className='middle-card'>
            <span>Máximas e mínimas</span>
            <div className='main-info-container'>
            <div className='temp-info-container'>
                <div className='temp-info'>
                    <FaTemperatureHigh />
                    <span>{weatherInfo.tempMax}</span>
                </div>
                <div className='temp-info'>
                    <FaTemperatureLow />
                    <span>{weatherInfo.tempMin}</span>
                </div>
            </div>
            <div>
                <WiSmallCraftAdvisory size={60} />
            </div>
            </div>
        </div>
    )
}
