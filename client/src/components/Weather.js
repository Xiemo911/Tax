import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ApiDisplay from "../pages/ApiDisplay";
import ApiDisplayDays from "../pages/ApiDisplayDays";
import { Link } from "react-router-dom";
import "./weather.css";
import getIcon from "./utils/getIcon";

const check = (str) =>
  localStorage.getItem(str) === null
    ? []
    : JSON.parse(localStorage.getItem(str));

class Weather extends React.Component {
  state = {
    data: check("data"),
    dataDays: check("dataDays"),
    ico: "",
    bg: "",
    date: Date().toLocaleString("en-US"),
    multiDay: [],
    hourlyDay: [],
    firstDayHourly: [],
  };

  getApiData = async () => {
    const apiUrl = await axios.get(`/api/get_weather`);
    console.log("API DATA", apiUrl.data);
    this.setState(
      {
        data: apiUrl.data,
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state.data));
      }
    );
  };

  getApiDataDays = async () => {
    const apiUrlDays = await axios.get(`/api/get_forecast`);
    console.log("API DATA DAYS", apiUrlDays.data);
    this.setState(
      {
        dataDays: apiUrlDays.data,
      },
      () => {
        localStorage.setItem("dataDays", JSON.stringify(this.state.dataDays));
      }
    );
  };

  decideIcon = () => {
    const id = this.state.data.ico;
    const { bg, ico } = getIcon(id);
    this.setState({ bg, ico });
  };

  dataForEachDay = async () => {
    const datD = Object.keys(this.state.dataDays).length === 0;
    let res = [];
    let compr = this.state.dataDays.list[0].dt_txt.split(/-| /)[2];
    datD
      ? console.log("err")
      : this.state.dataDays.list.forEach((day) => {
          if (day.dt_txt.split(/-| /)[2] !== compr) {
            compr = day.dt_txt.split(/-| /)[2];
            res.push(day);
          }
        });
    this.setState({ multiDay: res }, () => {});
  };

  getSameDay = async (compare) => {
    let mapped = this.state.dataDays.list.filter(
      (day) => day.dt_txt.split(/-| /)[2] == compare
    );
    this.setState({ hourlyDay: mapped });
  };

  hoursFirstDay = async () => {
    let mpp = this.state.dataDays.list.filter(
      (day) =>
        day.dt_txt.split(/-| /)[2] ==
        this.state.dataDays.list[0].dt_txt.split(/-| /)[2]
    );
    this.setState({ firstDayHourly: mpp });
  };

  initState = async () => {
    this.getApiData();
    this.getApiDataDays();
    this.decideIcon();
    await this.dataForEachDay();
    this.hoursFirstDay();
  };

  componentDidMount() {
    this.initState();
  }

  render() {
    const st = this.state;
    const hourlyDD = Object.keys(st.hourlyDay).length === 0;
    const tr = Object.keys(st.data).length === 0;
    const tp = Object.keys(st.multiDay).length === 0;
    const i = st.data;
    const d = st.dataDays;
    return (
      <div
        style={{
          marginTop: "5rem",
          maxWidth: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            margin: "auto",
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
          }}
          className="mymenu ui two item menu "
        >
          <Link className="item" style={{ margin: "auto" }} to="/">
           
            Current Forecast
          </Link>
          <Link
            className="item"
            style={{ margin: "auto" }}
            to="/ApiDisplayDays"
          >
            
            5 Day Forecast
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              tr ? (
                <div></div>
              ) : (
                <ApiDisplay
                  name={i.name}
                  dt={st.date}
                  weather={i.weather}
                  temp={i.temp}
                  temp_max={i.temp_max}
                  temp_min={i.temp_min}
                  humidity={i.humidity}
                  pressure={i.pressure}
                  sea_level={i.sea_level}
                  feels_like={i.feels_like}
                  ico={st.ico}
                  bg={st.bg}
                  firstDayHourly={st.firstDayHourly}

                />
              )
            }
          />
          <Route
            path="/ApiDisplayDays"
            element={
              tp ? (
                <div></div>
              ) : (
                <ApiDisplayDays
                  bg={st.bg}
                  ico={st.ico}
                  dt={st.date}
                  name={i.name}
                  weather={d.list[0].weather[0].main}
                  temp={i.temp}
                  temp_max={i.temp_max}
                  temp_min={i.temp_min}
                  hourly={this.getSameDay}
                  sameDay={st.multiDay}
                  hourlyDataArr={hourlyDD ? st.firstDayHourly : st.hourlyDay}
                />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

export default Weather;
