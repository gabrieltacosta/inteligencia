import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformations from "./weatherinformations";
import Loading from "./loading";

const Weather = () => {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function searchCity() {
    const city = "São Paulo"; // Default city if geolocation fails

    const key = import.meta.env.VITE_APP_API_KEY;
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiInfo = await axios.get(url);
      setWeather(apiInfo.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar informações do clima:", error);
    }
  }

  useEffect(() => {
    searchCity();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{weather && <WeatherInformations weather={weather} />}</>;
};

export default Weather;
