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
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
      setCity('')
    }
  }

  return (
    <main className="h-screen flex justify-center items-center">
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
