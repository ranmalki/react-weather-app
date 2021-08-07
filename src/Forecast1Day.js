import React from 'react';
import Days from './Days';

export default function Forecast1Day({day, temperature, icon, description}) {

    return (
        <div className="daily-forecast">
            <h2>{Days[day]}</h2>
            <img src={require(`./icons/${icon}.png`).default} alt="Forecast"/>
            <div><span className="temperature">{Math.floor(temperature) + "° "}</span>{description}</div>
        </div>
    );
} 