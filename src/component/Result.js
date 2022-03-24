import React, { Fragment } from "react";
import water from "../Images/akar-icons_water.svg";
import air from "../Images/akar-icons_air.svg";
import windIcon from "../Images/la_water.svg";

const Result = ({ result }) => {
  console.log(result);
  let { main, name, sys, wind, weather } = result;
  return (
    <>
      <h4 className="text-center my-4">
        {name}, {sys?.country}
      </h4>
      <div className="cardContainer">
        <div className="card-1">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.map(
              (x) => x.icon
            )}@2x.png`}
            alt=""
          />
          {/* data */}
          <p className="text-secondary">Temperature</p>
        </div>
        <div className="card-2">
          <img src={air} alt="" />
          <h4 className="fw-bold">{wind?.speed} km/h</h4>
          <p className="text-secondary">Wind</p>
        </div>
        <div className="card-3">
          <img src={water} alt="" />
          <h4 className="fw-bold">{main?.humidity} %</h4>
          <p className="text-secondary">Humidity</p>
        </div>
        <div className="card-4">
          <img src={windIcon} alt="" />
          <h4 className="fw-bold">{main?.pressure} hPa</h4>
          <p className="text-secondary">Pressure</p>
        </div>
      </div>
    </>
  );
};

export default Result;
