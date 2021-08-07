import './App.css';
import Forecast1Day from "./Forecast1Day"
import {useEffect, useState} from "react";

function App() {
    const [Forecast, setForecast] = useState();
    useEffect(() => {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then(data => setForecast(data));
    }, [])

  return (
    <div>
        <section>
            {Forecast && Forecast.map(dailyForecast => <Forecast1Day {...dailyForecast}/>)}
        </section>
    </div>
  );
}

export default App;