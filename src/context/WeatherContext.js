import { createContext, useContext, useState } from "react";
import cities from "../data/cities_of_turkey.json"; // cities JSON dosyamız. Dropwdown'a aktarıyoruz.
const WeatherContext = createContext(); // Adı ile birlikte context'imizi oluşturuyoruz.

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]); //API'dan çekeceğimiz veriler dizi halinde olduğu için dizi state'i oluşturduk.
  const [city, setCity] = useState(
    cities.find((item) => item.name === "İzmir") //Dropdown'a varsayılan olarak İstanbul çıkması için find methodu ile cities json dosyamızdan çektik.
  );
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //API'dan çektiğimiz dosyada date'i dönüştürdüğümüzde 0-6 arası gün seçecek. Ona göre buradan günü alacak.
  const value = { city, setCity, cities, weather, setWeather, days }; // Burada context aracılığıyla aktarmak istediğimiz propsları aktardık.
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider> // Children, context'imizin altındaki componentslere veri aktarımı sağlıyor.
  );
};

export const useWeather = () => useContext(WeatherContext); // Daha kullanışlı hale getirmek için normalde her context kullanacağımızda useContext'i import etmek zorunda kalıyorduk. Bu sayede dışa aktararak sadece useWeather'ı çağırmamız yeterli oluyor.
