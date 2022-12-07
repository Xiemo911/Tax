import React from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import ApiDisplay from "../pages/ApiDisplay";
import ApiDisplayDays from "../pages/ApiDisplayDays";
import Login from "../pages/Login";
import "./weather.css";
import getIcon from "./utils/getIcon";
import Register from "../pages/Register";
import Start from "../pages/Start";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

const check = (str) =>
  localStorage.getItem(str) === null
    ? []
    : JSON.parse(localStorage.getItem(str));

class Weather extends React.Component {
  state = {
    user: null,
    data: check("data"),
    dataDays: check("dataDays"),
    ico: "",
    bg: "",
    date: Date().toLocaleString("en-US"),
    multiDay: [],
    hourlyDay: [],
    firstDayHourly: [],
    isLoading: true,
    isLoggedIn: false,
  };

  handleLogOut = async () => {
    const apiUrl = await axios.get(`/api/logout`);
    window.location.reload()
  };

  getApiData = async () => {
    if(this.state.user !== null){
    const apiUrl = await axios.get(`/api/get_weather`);
    console.log("API DATA", apiUrl.data);
    this.setState(
      {
        data: apiUrl.data,
        isLoading: false,
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state.data));
      }
    );
    }
  };

  getUser = async () => {
    const apiUrl = await axios.get(`/api/user`);
    console.log("User", apiUrl.data);
    this.setState({
      user: apiUrl.data,
    });
  };

  getApiDataDays = async () => {
    if(this.state.user !== null){
    const apiUrlDays = await axios.get(`/api/get_forecast`);
    console.log("API DATA DAYS", apiUrlDays.data);
    this.setState(
      {
        dataDays: apiUrlDays.data,
        isLoading: false,
      },
      () => {
        localStorage.setItem("dataDays", JSON.stringify(this.state.dataDays));
      }
    );
    }
  };

  decideIcon = () => {
    const id = this.state.data.ico;
    const { bg, ico } = getIcon(id);
    this.setState({ bg, ico });
  };

  checkForLogged = async (a) => {
    await this.setState({ isLoggedIn: true, user: a });
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

  // handleFormSubmit = (event) => {
  //   this.setState({
  //     user: {username: event.target.elements.username.value, password: event.target.elements.password.value}
  //   }, () => {console.log(this.state.user)})
  // }

  initState = async () => {
    this.getApiData();
    this.getApiDataDays();
    this.decideIcon();
    this.dataForEachDay();
    this.hoursFirstDay();
  };

  componentDidMount() {
    this.initState();
    this.getUser();
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
        <Routes>
          <Route path="/" element={<Start />} />
          <Route
            path="/Login"
            element={<Login checkForLogged={this.checkForLogged} />}
          />

          <Route path="/Register" element={<Register />} />

          <Route
            path="/ApiDisplay"
            element={
              <ProtectedRoute user={this.state.user}>
                {tr ? (
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
                    handleLogOut={this.handleLogOut}
                  />
                )}
              </ProtectedRoute>
            }
          />
          <Route
            path="/ApiDisplayDays"
            element={
              <ProtectedRoute user={this.state.user}>
                {tp ? (
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
                    handleLogOut={this.handleLogOut}
                  />
                )}
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default Weather;
