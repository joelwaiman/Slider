'use client'
import { useState } from "react";

export default function Home() {

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const API_KEY = "29a4f62cca9148b1aa7175615241501"
  const getWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await response.json();
      setWeather({
        city: data.location.name,
        country: data.location.country,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        temp: data.current.temp_c,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
      setCity('')
    }
  }

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-y-12">
      {!weather.city ?
        <section className="flex flex-col font-display justify-center items-center max-h-[50%]">
          <img src="/sadCloud.webp"
            className="max-w-xs opacity-50"/>
          <p className="text-white ">Realiza una busqueda</p>
        </section>
        :
        <section className="flex flex-col font-display justify-center items-center max-h-[50%] gap-2">
          <p className="text-3xl transition ease-in-out delay-700">{weather.city}, {weather.country}</p>
          <img className="w-4/12" 
          src={weather.icon} 
          alt={weather.temp} />
          <p className="text-3xl">
            {weather.temp}°C
            </p>
          <p>{weather.condition}</p>
        </section>
      }
      <form className="flex flex-col items-center gap-4 w-5/6">
        <input
          className="text-black rounded-lg p-2 h-10 w-5/6"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button
          className="bg-sky-400 rounded-lg p-2 h-10 w-5/6"
          type="button"
          onClick={() => getWeather()}
          disabled={city === ''}>
          Buscar
        </button>
      </form>
    </main>
  )
}
