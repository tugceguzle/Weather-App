import React, { useEffect } from "react";
import axios from "axios"; // axios ile işlerimizi daha da kolaylaştırıyoruz.
import { useWeather } from "../context/WeatherContext"; // Ana context'de bahsettiğim gibi. Sadece bunu çağırarak işi bitiriyoruz.
import "./days.css"


function Days() {

  const { city, weather, setWeather, days } = useWeather(); // Kullanmak istediğimiz propsları çağırıyoruz.
  useEffect(() => {
    // useEffect sayesinde çalıştırmak istediğimiz zaman render ediyoruz. Eğer useEffect kullanmasaydık sürekli render olacaktı veya sadece sayfa ilk render edildiğinde çalışacaktı.
    const api_key = "b5f85e7674e245dbab726e5a8a3e3186"; // API Key
    const getCity = async () => {
      const res = axios(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city.name},TR&key=${api_key}&lang=tr`
      );
      console.log((await res).data.data.filter((day, index) => index < 7));
      setWeather((await res).data.data.filter((day, index) => index < 7)); // Burada JSON dosyasının içinde data array'ini filtreliyoruz. Normalde 16 gün array'i vardı. Bize 7 günlük lazım. Sonrad setWeather ile weather state'imize veriyi aktarıyoruz.
    };
    getCity(); //fonksiyonu çalıştır.
  }, [city, setWeather]); // city'de ve weather'da değişiklik olduğunda mount et.

  return (
    <div className="d-flex justify-content-center mb-5 ms-5 me-5" >
      {weather.map((item, index) => (
        <div key={index}
          className={`card p-3 border rounded ${index === 0
            ? "active"
            : "passive"
            } `}>
          <h6 key={index} className={`btn card-header fluid ${index === 0
            ? "active"
            : "passive"
            } `}>{days[new Date(item.datetime).getDay()]}</h6>
          <img class="card-img-top p-4" src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
            alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <button type="button" key={index}
              className={`btn ${index === 0
                ? "active"
                : "passive"
                } `}>
              <div className="d-flex justify-content-between me-4 ms-4">
                <span key={index} className={`badge cel ${index === 0
                  ? "badge_active"
                  : "badge_passive"
                  } `}>{Math.round(item.app_min_temp)}°</span>
                <span key={index} className={`badge cel ${index === 0
                  ? "badge_active"
                  : "badge_passive"
                  } `} >{Math.round(item.app_max_temp)}°</span>
              </div>

            </button></li>
            <li className="list-group-item"> <button type="button" className={`btn ${index === 0
              ? "active"
              : "passive"
              } `}>
              <span key={index} className={`badge ${index === 0
                ? "badge_active"
                : "badge_passive"
                } `} >P.O.P : %{Math.round(item.pop)}</span>
            </button></li>
            <li className="list-group-item"><button type="button" className={`btn ${index === 0
              ? "active"
              : "passive"
              } `}>
              <span key={index} className={`badge ${index === 0
                ? "badge_active"
                : "badge_passive"
                } `} >Wind Speed : {item.wind_spd} m/sn</span>
            </button></li>
            <li class="list-group-item"> <button type="button" className={`btn ${index === 0
              ? "active"
              : "passive"
              } `}>
              <span key={index} className={`badge ${index === 0
                ? "badge_active"
                : "badge_passive"
                } `} >R.H : %{Math.round(item.rh)}</span>
            </button></li>

          </ul>
        </div>
      ))}
    </div>
  );
}

export default Days;