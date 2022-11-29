import React from "react";

const getIc = (id) => {
  switch (id.charAt(0)) {
    case 2:
      return "http://openweathermap.org/img/wn/11d@2x.png";
    case 3:
      return "http://openweathermap.org/img/wn/09d@2x.png";
    case 5:
      return "http://openweathermap.org/img/wn/09d@2x.png";
    case 6:
      return "http://openweathermap.org/img/wn/13d@2x.png";
    case 800:
      return "http://openweathermap.org/img/wn/01n@2x.png";
    default:
      return "http://openweathermap.org/img/wn/04d@2x.png";
  }
};



export default function ApiDisplayDays(props) {
  return (
    <div
      style={{
        margin: "auto",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        backgroundImage: `url(${props.bg})`,
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <h1>{props.name}</h1>
          <h3>{props.dt.split(" ")[4].slice(0, -3)}</h3>
          <img  style={{}} src={props.ico} />
          <h5>{props.weather}</h5>
        </div>
        <div style={{ margin: "auto" }}>
          <div>
            <h1>{props.temp}°</h1>
            <h4>
              {props.temp_max}°/{props.temp_min}°
            </h4>
          </div>
        </div>
      </div>

      <hr style={{ maxWidth: "70%" }} />

      <div style={{ display: "flex", paddingBottom: "2rem", margin: "auto" }}>
        {props.sameDay.map((i, ind) => {
          return (
            <div
              key={ind}
              onClick={() => props.hourly(i.dt_txt.split(/-| /)[2])}
              style={{ margin: "auto" }}
            >
              <h4 style={{ marginLeft: "0.5rem" }}>{i.main.temp}°</h4>
              <img
                style={{ width: "50%", height: "50%", marginRight: "10px" }}
                src={getIc(props.ico)}
              />
              <h5 style={{ marginLeft: "1.1rem" }}>
                {i.dt_txt.split(/-| /)[2]}
              </h5>
            </div>
          );
        })}
      </div>
      <hr />
      <div style={{ display: "flex", margin: "auto" }}>
        {props.hourlyDataArr.map((i, ind) => {
          return (
            <div key={`s${ind}`} style={{ margin: "auto", paddingBottom: "10px" }}>
              <h5 style={{ margin: "auto" }}>{i.dt_txt.split(" ")[1].slice(0, -3)}</h5>
              <h5 style={{ margin: "auto" }}>{i.main.temp + "°"}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
