import { useEffect, useState } from "react";


type WeatherInfo = {
  weather: {
    main: string;
    description: string;
    icon: string;
  }[]
}

const sleep = (delay:number) => new Promise(resolve => setTimeout(resolve,delay));

const fetchWeather = async () => {
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        Tokyo&lang=ja&appid=56b3a9369a7446341c9d9b55e386c50d`)
    if(res.ok){
        return res.json()
    }
    throw new Error(res.statusText)
}

export default function QueryPre(){
    const [data,setData] = useState<WeatherInfo | null>(null);
    const [isLoading,setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true);
        fetchWeather()
        .then(result => setData(result))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    },[])

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    return(
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
            alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    )
}