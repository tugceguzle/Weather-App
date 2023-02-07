import React from "react";
import { useWeather } from "../context/WeatherContext";
import "./dropdown.css"

function Cities() {
    const { city, cities, setCity } = useWeather();
    const changeCity = (e) => {
        cities.filter((item) => {
            if (item.name === e.target.value) {
                setCity(item);
            }
            return item;
        });
    };

    return (
        <div>
            <select 
            className="dropdown"
                value={city.name}
                onChange={changeCity}>
                {cities.map((item, key) => {
                    return (
                        <option value={item.name} key={key}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default Cities;