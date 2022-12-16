import React, { useState } from "react";
import states from "../components/utils/states.json";
import marital from "../components/utils/marital.json";
import axios from "axios";
import "./start.css";
export default function Start(props) {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const a = await axios
      .post(`/api/submittax`, {
        state: props.stateForApi,
        status: props.statusForApi,
        income: props.incomeForApi,
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    props.checkAfterTax(a.data.amount);
    console.log(a);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "grey",
          minHeight: "5rem",
          maxHeight: "5rem",
        }}
      >
        {/* //NAV */}
      </div>

      <form onSubmit={handleFormSubmit} style={{}}>
        <div style={{ marginTop: "3rem" }}>
          <div>
            <select
              onChange={props.addStateForApi}
              name="state"
              id={"selectState"}
              style={{ margin: "auto", width: "15rem", marginBottom: "2rem" }}
              className="ui dropdown"
              
            >
              {states.map((i, ind) => {
                return (
                  <option key={ind} value={i.abbreviation}>
                    {i.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <select
            onChange={props.addStatusForApi}
              name="status"
              style={{ margin: "auto", width: "15rem", marginBottom: "2rem" }}
              className="ui dropdown"
            >
              {marital.map((i, ind) => {
                return (
                  <option key={`a${ind}`} value={i.abbreviation}>
                    {i.status}
                  </option>
                );
              })}
            </select>
          </div>


          <div>
            <div
              style={{ margin: "auto", width: "15rem", marginBottom: "2rem" }}
              className="ui input action"
            >
              <input
              onChange={props.addDeductionsForApi}
                name="deductions"
                type="number"
                placeholder="Deductions"
              />
            </div>
          </div>


          <div>
            <div
              style={{ margin: "auto", width: "15rem", marginBottom: "2rem" }}
              className="ui input action"
            >
              <input
              onChange={props.addIncomeForApi}
                name="income"
                type="text"
                required
                placeholder="Annual Taxable Income"
              />
            </div>
          </div>

        



          <div>
            <button
              style={{ width: "15rem" }}
              type="submit"
              className="ui button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div style={{ marginTop: "2rem" }}>{props.amount} </div>

      <hr />

      <svg viewBox="0 0 500 500" width={600} height={600}>
        <g
          transform="matrix(1.10096, 0, 0, 1.862996, 79.987962, -143.516207)"
          className="gParent"
        >
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -285.691742, -3.848652)">
            <title>WA</title>
            <path
              d="M 258.438 178.93 L 238.232 187.665 L 218.026 178.93 L 218.026 161.461 L 238.232 152.726 L 258.438 161.461 L 258.438 178.93 Z"
              id="WA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
              }}
              x="230.543"
              y="173.328"
              id="WA"
            >
              WA
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -213.94635, -18.032722)">
            <title>ID</title>
            <path
              d="M 206.61 219.367 L 186.404 228.102 L 166.198 219.367 L 166.198 201.898 L 186.404 193.163 L 206.61 201.898 L 206.61 219.367 Z"
              id="ID"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
              }}
              x="180.994"
              y="213.48"
              id="ID"
            >
              ID
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -248.118698, 18.067625)">
            <title>OR</title>
            <path
              d="M 220.597 209.423 L 200.391 218.158 L 180.185 209.423 L 180.185 191.954 L 200.391 183.219 L 220.597 191.954 L 220.597 209.423 Z"
              id="OR"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="193.965"
              y="203.762"
              id="OR"
            >
              OR
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -223.595291, 25.635302)">
            <title>CA</title>
            <path
              d="M 216.204 228.22 L 195.998 236.955 L 175.792 228.22 L 175.792 210.751 L 195.998 202.016 L 216.204 210.751 L 216.204 228.22 Z"
              id="CA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
            id="CA"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              transform="matrix(1, 0, 0, 1, 2.617562, 5.235142)"
            >
              <tspan id="CA" x="187.669" y="216.868">
                CA
              </tspan>
              <tspan x="187.669" dy="1em">
                ​
              </tspan>
              <tspan x="187.669" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -177.659622, 5.644844)">
            <title>UT</title>
            <path
              d="M 210.636 248.132 L 190.43 256.867 L 170.224 248.132 L 170.224 230.663 L 190.43 221.928 L 210.636 230.663 L 210.636 248.132 Z"
              id="UT"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              transform="matrix(1, 0, 0, 1, 0.87512, 4.599763)"
              id="UT"
            >
              <tspan id="UT" x="183.073" y="238.006">
                UT
              </tspan>
              <tspan x="183.073" dy="1em">
                ​
              </tspan>
              <tspan x="183.073" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -208.368896, 94.359505)">
            <title>AZ</title>
            <path
              d="M 261.545 185.61 L 241.339 194.345 L 221.133 185.61 L 221.133 168.141 L 241.339 159.406 L 261.545 168.141 L 261.545 185.61 Z"
              id="AZ"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="234.023"
              y="179.924"
              id="AZ"
            >
              AZ
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -271.814178, 135.427963)">
            <title>OK</title>
            <path
              d="M 365.383 144.617 L 345.177 153.352 L 324.971 144.617 L 324.971 127.148 L 345.177 118.413 L 365.383 127.148 L 365.383 144.617 Z"
              id="OK"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="337.064"
              y="139.263"
              id="OK"
            >
              OK
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -198.34166, 32.493118)">
            <title>TX</title>
            <path
              d="M 312.081 273.736 L 291.875 282.471 L 271.669 273.736 L 271.669 256.267 L 291.875 247.532 L 312.081 256.267 L 312.081 273.736 Z"
              id="TX"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "9.5px",
              }}
              x="286.452"
              y="264.188"
              transform="matrix(1, 0, 0, 1, -0.542379, 3.796719)"
              id="TX"
            >
              TX
              <tspan x="286.4519958496094" dy="1em">
                ​
              </tspan>
              <tspan x="286.4519958496094" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -280.108459, 56.216545)">
            <title>LA</title>
            <path
              d="M 414.207 223.925 L 394.001 232.66 L 373.795 223.925 L 373.795 206.456 L 394.001 197.721 L 414.207 206.456 L 414.207 223.925 Z"
              id="LA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "10.1px",
              }}
              x="387.361"
              y="218.366"
              id="LA"
            >
              LA
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -244.384705, 118.999702)">
            <title>MS</title>
            <path
              d="M 418.958 161.143 L 398.752 169.878 L 378.546 161.143 L 378.546 143.674 L 398.752 134.939 L 418.958 143.674 L 418.958 161.143 Z"
              id="MS"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="391.301"
              y="156.085"
              id="MS"
            >
              MS
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -171.265823, -9.324421)">
            <title>AL</title>
            <path
              d="M 386.293 289.52 L 366.087 298.255 L 345.881 289.52 L 345.881 272.051 L 366.087 263.316 L 386.293 272.051 L 386.293 289.52 Z"
              id="AL"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              transform="matrix(1, 0, 0, 1, -6.300121, 7.481444)"
              id="AL"
            >
              <tspan id="AL" x="366.481" y="277.636">
                AL
              </tspan>
              <tspan x="366.481" dy="1em">
                ​
              </tspan>
              <tspan x="366.481" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -218.369202, 85.616417)">
            <title>FL</title>
            <path
              d="M 453.545 220.658 L 433.339 229.393 L 413.133 220.658 L 413.133 203.189 L 433.339 194.454 L 453.545 203.189 L 453.545 220.658 Z"
              id="FL"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="427.421"
              y="214.434"
              id="FL"
            >
              FL
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -63.513706, 122.364189)">
            <title>GA</title>
            <path
              d="M 319.016 157.895 L 298.81 166.63 L 278.604 157.895 L 278.604 140.426 L 298.81 131.691 L 319.016 140.426 L 319.016 157.895 Z"
              id="GA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              transform="matrix(1, 0, 0, 1, -1.637481, 6.550017)"
              id="GA"
            >
              <tspan id="GA" x="293.351" y="146.431">
                GA
              </tspan>
              <tspan x="293.351" dy="1em">
                ​
              </tspan>
              <tspan x="293.351" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -154.782043, 141.794617)">
            <title>SC</title>
            <path
              d="M 430.566 112.314 L 410.36 121.049 L 390.154 112.314 L 390.154 94.845 L 410.36 86.11 L 430.566 94.845 L 430.566 112.314 Z"
              id="SC"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="404.174"
              y="106.879"
              id="SC"
            >
              SC
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, 17.472757, 143.081818)">
            <title>DC</title>
            <path
              d="M 298.76 111.124 L 278.554 119.859 L 258.348 111.124 L 258.348 93.655 L 278.554 84.92 L 298.76 93.655 L 298.76 111.124 Z"
              id="DC"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="271.374"
              y="105.979"
              id="DC"
            >
              DC
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -107.52269, -62.609959)">
            <title>DE</title>
            <path
              d="M 444.118 290.555 L 423.912 299.29 L 403.706 290.555 L 403.706 273.086 L 423.912 264.351 L 444.118 273.086 L 444.118 290.555 Z"
              id="DE"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="417.262"
              y="285.335"
              id="DE"
            >
              DE
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -94.57988, -26.507048)">
            <title>CT</title>
            <path
              d="M 451.393 228.231 L 431.187 236.966 L 410.981 228.231 L 410.981 210.762 L 431.187 202.027 L 451.393 210.762 L 451.393 228.231 Z"
              id="CT"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="424.036"
              y="222.026"
              id="CT"
            >
              CT
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, 86.199074, -44.545712)">
            <title>RI</title>
            <path
              d="M 290.832 220.087 L 270.626 228.822 L 250.42 220.087 L 250.42 202.618 L 270.626 193.883 L 290.832 202.618 L 290.832 220.087 Z"
              id="RI"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              transform="matrix(1, 0, 0, 1, 2.022117, 3.033175)"
              id="RI"
            >
              <tspan id="RI" x="263.549" y="211.757">
                RI
              </tspan>
              <tspan x="263.549" dy="1em">
                ​
              </tspan>
              <tspan x="263.549" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -33.342472, -49.990673)">
            <title>NH</title>
            <path
              d="M 390.196 199.391 L 369.99 208.126 L 349.784 199.391 L 349.784 181.922 L 369.99 173.187 L 390.196 181.922 L 390.196 199.391 Z"
              id="NH"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="362.289"
              y="193.544"
              id="NH"
            >
              NH
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -8.565558, -57.726719)">
            <title>ME</title>
            <path
              d="M 385.693 180.983 L 365.487 189.718 L 345.281 180.983 L 345.281 163.514 L 365.487 154.779 L 385.693 163.514 L 385.693 180.983 Z"
              id="ME"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="357.562"
              y="175.391"
              id="ME"
            >
              ME
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -38.803135, 12.496953)">
            <title>VT</title>
            <path
              d="M 355.268 136.974 L 335.062 145.709 L 314.856 136.974 L 314.856 119.505 L 335.062 110.77 L 355.268 119.505 L 355.268 136.974 Z"
              id="VT"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="328.527"
              y="131.255"
              id="VT"
            >
              VT
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, 5.792769, -14.441743)">
            <title>NY</title>
            <path
              d="M 290.663 189.955 L 270.457 198.69 L 250.251 189.955 L 250.251 172.486 L 270.457 163.751 L 290.663 172.486 L 290.663 189.955 Z"
              id="NY"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="263.906"
              y="183.873"
              id="NY"
            >
              NY
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -76.193863, 26.12579)">
            <title>PA</title>
            <path
              d="M 352.507 175.578 L 332.301 184.313 L 312.095 175.578 L 312.095 158.109 L 332.301 149.374 L 352.507 158.109 L 352.507 175.578 Z"
              id="PA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="326.033"
              y="169.472"
              id="PA"
            >
              PA
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -85.091789, 26.430454)">
            <title>OH</title>
            <path
              d="M 321.187 175.33 L 300.981 184.065 L 280.775 175.33 L 280.775 157.861 L 300.981 149.126 L 321.187 157.861 L 321.187 175.33 Z"
              id="OH"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="292.863"
              y="169.602"
              id="OH"
            >
              OH
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -123.828125, 49.900017)">
            <title>MI</title>
            <path
              d="M 339.616 125.696 L 319.41 134.431 L 299.204 125.696 L 299.204 108.227 L 319.41 99.492 L 339.616 108.227 L 339.616 125.696 Z"
              id="MI"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="314.322"
              y="119.395"
              id="MI"
            >
              MI
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -46.888153, -37.785522)">
            <title>IN</title>
            <path
              d="M 242.569 239.576 L 222.363 248.311 L 202.157 239.576 L 202.157 222.107 L 222.363 213.372 L 242.569 222.107 L 242.569 239.576 Z"
              id="IN"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="217.279"
              y="233.884"
              id="IN"
            >
              IN
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -31.212486, 136.864578)">
            <title>IL</title>
            <path
              d="M 186.48 64.981 L 166.274 73.716 L 146.068 64.981 L 146.068 47.512 L 166.274 38.777 L 186.48 47.512 L 186.48 64.981 Z"
              id="IL"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="162.584"
              y="59.199"
              id="IL"
            >
              IL
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -63.720554, -13.684296)">
            <title>WI</title>
            <path
              d="M 198.746 189.343 L 178.54 198.078 L 158.334 189.343 L 158.334 171.874 L 178.54 163.139 L 198.746 171.874 L 198.746 189.343 Z"
              id="WI"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="172.989"
              y="183.384"
              id="WI"
            >
              WI
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -84.98835, -3.12192)">
            <title>MN</title>
            <path
              d="M 179.525 178.846 L 159.319 187.581 L 139.113 178.846 L 139.113 161.377 L 159.319 152.642 L 179.525 161.377 L 179.525 178.846 Z"
              id="MN"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="151.245"
              y="173.719"
              id="MN"
            >
              MN
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -86.065491, -32.562569)">
            <title>ND</title>
            <path
              d="M 140.16 208.27 L 119.954 217.005 L 99.748 208.27 L 99.748 190.801 L 119.954 182.066 L 140.16 190.801 L 140.16 208.27 Z"
              id="ND"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="113.235"
              y="201.775"
              id="ND"
            >
              ND
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -93.039345, 3.827675)">
            <title>MT</title>
            <path
              d="M 106.487 171.418 L 86.281 180.153 L 66.075 171.418 L 66.075 153.949 L 86.281 145.214 L 106.487 153.949 L 106.487 171.418 Z"
              id="MT"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="79.151"
              y="165.06"
              id="MT"
            >
              MT
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -272.203064, 99.663574)">
            <title>WY</title>
            <path
              d="M 305.672 101.911 L 285.466 110.646 L 265.26 101.911 L 265.26 84.442 L 285.466 75.707 L 305.672 84.442 L 305.672 101.911 Z"
              id="WY"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="277.242"
              y="96.484"
              id="WY"
            >
              WY
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -320.496948, 122.624283)">
            <title>NV</title>
            <path
              d="M 333.5 105.101 L 313.294 113.836 L 293.088 105.101 L 293.088 87.632 L 313.294 78.897 L 333.5 87.632 L 333.5 105.101 Z"
              id="NV"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="305.942"
              y="100.247"
              id="NV"
            >
              NV
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -163.086655, 38.757504)">
            <title>SD</title>
            <path
              d="M 237.046 163.043 L 216.84 171.778 L 196.634 163.043 L 196.634 145.574 L 216.84 136.839 L 237.046 145.574 L 237.046 163.043 Z"
              id="SD"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="210.024"
              y="157.078"
              id="SD"
            >
              SD
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -195.368271, 74.293503)">
            <title>CO</title>
            <path
              d="M 248.849 153.587 L 228.643 162.322 L 208.437 153.587 L 208.437 136.118 L 228.643 127.383 L 248.849 136.118 L 248.849 153.587 Z"
              id="CO"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="220.705"
              y="147.574"
              id="CO"
            >
              CO
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -180.112518, 101.134811)">
            <title>NM</title>
            <path
              d="M 253.573 152.625 L 233.367 161.36 L 213.161 152.625 L 213.161 135.156 L 233.367 126.421 L 253.573 135.156 L 253.573 152.625 Z"
              id="NM"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="224.816"
              y="146.909"
              id="NM"
            >
              NM
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -163.936249, 120.355927)">
            <title>NE</title>
            <path
              d="M 257.87 107.361 L 237.664 116.096 L 217.458 107.361 L 217.458 89.892 L 237.664 81.157 L 257.87 89.892 L 257.87 107.361 Z"
              id="NE"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="230.97"
              y="101.974"
              id="NE"
            >
              NE
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -169.439636, 34.501163)">
            <title>IA</title>
            <path
              d="M 283.996 167.191 L 263.79 175.926 L 243.584 167.191 L 243.584 149.722 L 263.79 140.987 L 283.996 149.722 L 283.996 167.191 Z"
              id="IA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="259.924"
              y="160.711"
              id="IA"
            >
              IA
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -199.948425, 118.161407)">
            <title>KS</title>
            <path
              d="M 313.843 135.847 L 293.637 144.582 L 273.431 135.847 L 273.431 118.378 L 293.637 109.643 L 313.843 118.378 L 313.843 135.847 Z"
              id="KS"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="287.921"
              y="130.685"
              id="KS"
            >
              KS
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -140.163315, 94.876251)">
            <title>MO</title>
            <path
              d="M 274.912 133.021 L 254.706 141.756 L 234.5 133.021 L 234.5 115.552 L 254.706 106.817 L 274.912 115.552 L 274.912 133.021 Z"
              id="MO"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="246.451"
              y="127.509"
              id="MO"
            >
              MO
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -180.164368, 153.003113)">
            <title>KY</title>
            <path
              d="M 355.387 74.827 L 335.181 83.562 L 314.975 74.827 L 314.975 57.358 L 335.181 48.623 L 355.387 57.358 L 355.387 74.827 Z"
              id="KY"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="329.1"
              y="69.835"
              id="KY"
            >
              KY
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -160.477783, 107.46402)">
            <title>AR</title>
            <path
              d="M 315.061 146.5 L 294.855 155.235 L 274.649 146.5 L 274.649 129.031 L 294.855 120.296 L 315.061 129.031 L 315.061 146.5 Z"
              id="AR"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="287.975"
              y="140.58"
              id="AR"
            >
              AR
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -207.07843, 175.88768)">
            <title>TN</title>
            <path
              d="M 402.299 78.043 L 382.093 86.778 L 361.887 78.043 L 361.887 60.574 L 382.093 51.839 L 402.299 60.574 L 402.299 78.043 Z"
              id="TN"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="376.266"
              y="72.638"
              id="TN"
            >
              TN
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -199.311462, -117.523109)">
            <title>WV</title>
            <path
              d="M 414.966 345.534 L 394.76 354.269 L 374.554 345.534 L 374.554 328.065 L 394.76 319.33 L 414.966 328.065 L 414.966 345.534 Z"
              id="WV"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              transform="matrix(1, 0, 0, 1, -3.204993, 2.003113)"
              id="WV"
            >
              <tspan id="WV" x="390.754" y="338.001">
                WV
              </tspan>
              <tspan x="390.754" dy="1em">
                ​
              </tspan>
              <tspan x="390.754" dy="1em">
                ​
              </tspan>
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -115.813606, 77.993507)">
            <title>NC</title>
            <path
              d="M 351.334 176.076 L 331.128 184.811 L 310.922 176.076 L 310.922 158.607 L 331.128 149.872 L 351.334 158.607 L 351.334 176.076 Z"
              id="NC"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="323.971"
              y="170.139"
              id="NC"
            >
              NC
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -64.601112, 151.54921)">
            <title>VA</title>
            <path
              d="M 320.656 76.265 L 300.45 85 L 280.244 76.265 L 280.244 58.796 L 300.45 50.061 L 320.656 58.796 L 320.656 76.265 Z"
              id="VA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="294.995"
              y="70.888"
              id="VA"
            >
              VA
            </text>
          </g>
          <g onClick={props.onclickStateForApi} className="gFill" transform="matrix(1, 0, 0, 1, -105.572639, 94.21907)">
            <title>MD</title>
            <path
              d="M 401.886 133.82 L 381.68 142.555 L 361.474 133.82 L 361.474 116.351 L 381.68 107.616 L 401.886 116.351 L 401.886 133.82 Z"
              id="MD"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="374.41"
              y="128.048"
              id="MD"
            >
              MD
            </text>
          </g>
          <g
                    onClick={props.onclickStateForApi}

          className="gFill" transform="matrix(1, 0, 0, 1, -142.717545, 113.370102)">
            <title>NJ</title>
            <path
              d="M 459.359 88.403 L 439.153 97.138 L 418.947 88.403 L 418.947 70.934 L 439.153 62.199 L 459.359 70.934 L 459.359 88.403 Z"
              id="NJ"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
              }}
              x="433.446"
              y="82.976"
              id="NJ"
            >
              NJ
            </text>
          </g>
          <g       
              onClick={props.onclickStateForApi}
 className="gFill" transform="matrix(1, 0, 0, 1, -71.107651, 49.759315)">
            <title>MA</title>
            <path
              d="M 408.008 125.894 L 387.802 134.629 L 367.596 125.894 L 367.596 108.425 L 387.802 99.69 L 408.008 108.425 L 408.008 125.894 Z"
              id="MA"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
                
              }}
            />
            <text
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
                whiteSpace: "pre",
              }}
              x="381.087"
              y="119.601"
              id="MA"
            >
              MA
            </text>
          </g>
          <g
                    onClick={props.onclickStateForApi}

            className="gFill"
            transform="matrix(1, 0, 0, 1, -113.526802, 160.137421)"
          >
            <title>HI</title>
            <path
              d="M 120.326 171.589 L 100.12 180.324 L 79.914 171.589 L 79.914 154.12 L 100.12 145.385 L 120.326 154.12 L 120.326 171.589 Z"
              id="HI"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
              }}
              x="95.279"
              y="166.557"
              id="HI"
            >
              HI
            </text>
          </g>
          <g
          onClick={props.onclickStateForApi}
            className="gFill"
            transform="matrix(1, 0, 0, 1, 5.604812, 32.754257)"
          >
            <title>AK</title>
            <path
              d="M 17.085 74.459 L -3.121 83.194 L -23.327 74.459 L -23.327 56.99 L -3.121 48.255 L 17.085 56.99 L 17.085 74.459 Z"
              id="AK"
              style={{
                stroke: "rgb(0, 0, 0)",
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeWidth: "0.5px",
              }}
            />
            <text
              style={{
                whiteSpace: "pre",
                fontFamily: "Arial, sans-serif",
                fontSize: "10px",
              }}
              id="AK"
              x="-10.285"
              y="69.342"
            >
              AK
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
