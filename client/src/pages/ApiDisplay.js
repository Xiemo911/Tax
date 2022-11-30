import React from "react";

export default function ApiDisplay(props) {
  console.log(props)
  return (
    <div
      style={{
        margin: "auto",
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        backgroundImage: `url(${props.bg})`,
      }}
    >
      <div style={{ display: "flex" }}>
        
        <div style={{ margin: "auto" }}>
          <h1>{props.name}</h1>
          <h3>{props.dt.split(" ")[4].slice(0, -3)}</h3>
          <img src={props.ico} />
          <div>{props.weather}</div>
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

      <div style={{ display: "flex", paddingBottom: "2rem" }}>
        <p style={{ margin: "auto" }}>Humidity: {props.humidity}%</p>
        <p style={{ margin: "auto" }}>Pressure: {props.pressure}</p>
        <p style={{ margin: "auto" }}>Sea Level: {props.sea_level}</p>
        <p style={{ margin: "auto" }}> Feels Like: {props.feels_like}°</p>
      </div>

      <div style={{display: "flex", margin: "auto"}}>
      {props.firstDayHourly.map((i, ind ) => {
        return(
        <div key={`i${ind}`} style={{ margin: "auto", paddingBottom: "10px" }}>
          <h5 style={{ margin: "auto" }}>{i.dt_txt.split(" ")[1].slice(0, -3)}</h5>
          <h5 style={{ margin: "auto" }}>{i.main.temp}</h5>
        </div>
      )})}


      </div>
    </div>
  );
}
