import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export default function Login(props) {
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const i = (id) => e.target[id].value;
    const a = await axios
      .post(`/api/login`, { username: i(0), password: i(1) })
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
    props.checkForLogged(a.data.username);
    navigate("/ApiDisplay");

    console.log(a.data);
  };


  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">Log-in to your account</div>
        </h2>
        <form onSubmit={handleFormSubmit} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              value="login"
              href=""
              className="ui fluid large teal submit button"
            >
              Login
            </button>
          </div>

          <div className="ui error message"></div>
        </form>

        <div className="ui message">
          New to us? <a href="/Register">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
