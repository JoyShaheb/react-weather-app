import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Input from "./component/Input";
import Result from "./component/Result";
import axios from "axios";

function App() {
  let abcd = [];
  console.log(abcd ? "empty" : "not empty");
  let [city, setCity] = useState("London");
  let [result, setResult] = useState([]);
  // console.log(result);
  let base = "https://api.openweathermap.org/data/2.5/weather";
  let appid = "e07b29a01102b6821d6752110110108a";

  let api = `${base}?q=${city}&appid=${appid}`;

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setResult(res.data);
        setGate(true);
      })
      .catch((err) => {
        setGate(false);
        console.log(err);
      });
  }, [api]);

  // Gate - true -> Open
  // Gate - False -> Close
  let [gate, setGate] = useState(true);
  return (
    <div className="App">
      <h3 className="text-center">Weather App</h3>
      <Input setCity={setCity} />

      {gate ? <Result result={result} /> : "City not found"}
    </div>
  );
}

export default App;
