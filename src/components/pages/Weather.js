
import { useEffect, useState } from "react"

function Weather(){
    const [weather,setWeather] = useState({
        weather:[],
        main:{},
        name:"",
        sys:{},
        wind:{}
    });
    const loadWeather = ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url).then(data=>data.json())
        .then(data=>{
            setWeather(data);
        })
    }
    useEffect(()=>{
        loadWeather();
    },[]);
    return (
        <>
            <h1>{weather.name+" "+weather.sys.country}</h1>
            <p>{weather.main.temp}</p>
            <p>{weather.wind.speed}</p>
            <p>{weather.main.humidity}</p>
        </>
    )
}
export default Weather;